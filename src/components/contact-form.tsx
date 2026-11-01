import { useState, type FormEvent } from "react";
import { ChevronDown } from "lucide-react";
import { z } from "zod";
import { interests, type Interest } from "@/data/portfolio";

const noteSchema = z.object({
  name: z.string().min(2, "Give a name I can reply to."),
  email: z.email("That email doesn’t look complete."),
  interest: z.enum(interests, { error: "Pick a direction." }),
  message: z.string().min(12, "A sentence or two is enough."),
});

type Fields = {
  name: string;
  email: string;
  interest: Interest | "";
  message: string;
};

type FieldErrors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { name: "", email: "", interest: "", message: "" };

function compose(fields: Fields) {
  return [`Name: ${fields.name}`, `Email: ${fields.email}`, `Interest: ${fields.interest}`, "", fields.message].join(
    "\n",
  );
}

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const parsed = noteSchema.safeParse({
      name: fields.name.trim(),
      email: fields.email.trim(),
      interest: fields.interest,
      message: fields.message.trim(),
    });
    if (!parsed.success) {
      const next: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && next[key as keyof Fields] === undefined) {
          next[key as keyof Fields] = issue.message;
        }
      }
      setErrors(next);
      return;
    }
    setFields({
      name: parsed.data.name,
      email: parsed.data.email,
      interest: parsed.data.interest,
      message: parsed.data.message,
    });
    setErrors({});
    setCopied(false);
    setSent(true);
  }

  const mailHref = `mailto:?subject=${encodeURIComponent(
    `Studio note — ${fields.interest || "Hello"}`,
  )}&body=${encodeURIComponent(compose(fields))}`;

  async function copyNote() {
    try {
      await navigator.clipboard.writeText(compose(fields));
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  if (sent) {
    return (
      <div className="border border-line bg-surface p-6 md:p-8" role="status">
        <p className="text-xs tracking-widest text-accent uppercase">Ready to send</p>
        <h3 className="mt-3 font-display text-section text-fg">Noted.</h3>
        <p className="mt-4 max-w-md text-muted">
          The note stays here until you send it. Open it in your mail app, or copy the text.
        </p>
        <pre className="mt-6 overflow-x-auto border-t border-line pt-5 font-sans text-sm whitespace-pre-wrap text-fg">
          {compose(fields)}
        </pre>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={mailHref}
            className="inline-flex min-h-11 items-center bg-accent px-5 text-sm text-bg transition-transform duration-150 ease-out active:scale-[0.96]"
          >
            Open in mail
          </a>
          <button
            type="button"
            className="inline-flex min-h-11 items-center border border-line px-5 text-sm text-fg transition-transform duration-150 ease-out hover:border-fg active:scale-[0.96]"
            onClick={() => void copyNote()}
          >
            {copied ? "Copied" : "Copy note"}
          </button>
          <button
            type="button"
            className="inline-flex min-h-11 items-center px-2 text-sm text-muted underline-offset-4 hover:text-fg hover:underline"
            onClick={() => {
              setSent(false);
              setCopied(false);
            }}
          >
            Edit note
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="grid gap-6" onSubmit={onSubmit} noValidate>
      <div className="grid gap-6 md:grid-cols-2">
        <Field
          id="name"
          label="Name"
          value={fields.name}
          error={errors.name}
          autoComplete="name"
          onChange={(value) => update("name", value)}
        />
        <Field
          id="email"
          label="Email"
          type="email"
          value={fields.email}
          error={errors.email}
          autoComplete="email"
          onChange={(value) => update("email", value)}
        />
      </div>
      <div>
        <label htmlFor="interest" className="text-xs tracking-widest text-muted uppercase">
          Direction
        </label>
        <div className="relative mt-2">
          <select
            id="interest"
            name="interest"
            value={fields.interest}
            aria-invalid={errors.interest ? true : undefined}
            aria-describedby={errors.interest ? "interest-error" : undefined}
            className="min-h-12 w-full appearance-none border-b border-line bg-transparent pr-8 text-base text-fg outline-none transition-colors duration-200 focus:border-accent"
            onChange={(event) => update("interest", event.target.value as Interest | "")}
          >
            <option value="">Choose one</option>
            {interests.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 text-muted" aria-hidden="true">
            <ChevronDown className="size-4" />
          </span>
        </div>
        {errors.interest ? (
          <p id="interest-error" className="mt-2 text-sm text-fg">
            {errors.interest}
          </p>
        ) : null}
      </div>
      <div>
        <label htmlFor="message" className="text-xs tracking-widest text-muted uppercase">
          Note
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={fields.message}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="mt-2 w-full resize-y border-b border-line bg-transparent py-3 text-base text-fg outline-none transition-colors duration-200 focus:border-accent"
          onChange={(event) => update("message", event.target.value)}
        />
        {errors.message ? (
          <p id="message-error" className="mt-2 text-sm text-fg">
            {errors.message}
          </p>
        ) : null}
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="inline-flex min-h-11 items-center bg-accent px-6 text-sm text-bg transition-transform duration-150 ease-out active:scale-[0.96]"
        >
          Prepare note
        </button>
        <p className="text-sm text-muted">No account. Nothing is stored.</p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  error,
  onChange,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-xs tracking-widest text-muted uppercase">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className="mt-2 min-h-12 w-full border-b border-line bg-transparent text-base text-fg outline-none transition-colors duration-200 focus:border-accent"
        onChange={(event) => onChange(event.target.value)}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-fg">
          {error}
        </p>
      ) : null}
    </div>
  );
}
