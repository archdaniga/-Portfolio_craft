import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as ChevronDown } from "../_libs/lucide-react.mjs";
import { a as object, n as email, o as string, t as _enum } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-6DQa8DCz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var categories = [
	"All",
	"Architecture",
	"Interiors",
	"Identity",
	"Editorial"
];
var projects = [
	{
		id: "volume-house",
		index: "01",
		title: "Volume House",
		category: "Architecture",
		year: "2026",
		place: "Addis Ababa",
		blurb: "A courtyard house cut by thin shadow. Limewash, one olive tree, and a single pane of teal glass.",
		image: "/work/volume-house.jpg",
		wide: true
	},
	{
		id: "palm-court",
		index: "02",
		title: "Palm Court",
		category: "Interiors",
		year: "2026",
		place: "Study",
		blurb: "Linen, teak, and a tall palm. The room is arranged so afternoon light does the decorating.",
		image: "/work/palm-court.jpg",
		wide: false
	},
	{
		id: "hall-of-light",
		index: "03",
		title: "Hall of Light",
		category: "Architecture",
		year: "2025",
		place: "Addis Ababa",
		blurb: "An assembly stage in white volume and warm oak, with one wash of teal on the plaster wall.",
		image: "/work/hall-of-light.jpg",
		wide: false
	},
	{
		id: "night-room",
		index: "04",
		title: "Night Room",
		category: "Interiors",
		year: "2025",
		place: "Study",
		blurb: "Charcoal plaster, ivory linen, and a low oak headboard. Morning arrives as a single pool of light.",
		image: "/work/night-room.jpg",
		wide: false
	},
	{
		id: "quiet-mark",
		index: "05",
		title: "Quiet Mark",
		category: "Identity",
		year: "2026",
		place: "Studio",
		blurb: "A wordmark built from pressure, not decoration. Ink bars, thread, and a seal that can live on paper.",
		image: "/work/quiet-mark.jpg",
		wide: false
	},
	{
		id: "paper-season",
		index: "06",
		title: "Paper Season",
		category: "Editorial",
		year: "2025",
		place: "Addis Ababa",
		blurb: "Layered paper-cut cards for the new year. Hills, a gold sun, and a green that feels like the first rain.",
		image: "/work/paper-season.jpg",
		wide: true
	},
	{
		id: "field-note",
		index: "07",
		title: "Field Note",
		category: "Editorial",
		year: "2026",
		place: "Studio",
		blurb: "A certificate reduced to hairline rules and a teal seal. The honor is in the paper, not the ornament.",
		image: "/work/field-note.jpg",
		wide: false
	},
	{
		id: "clay-door",
		index: "08",
		title: "Clay Door",
		category: "Architecture",
		year: "2025",
		place: "Study",
		blurb: "A white corridor and one terracotta door, left ajar. The skylight does the rest of the drawing.",
		image: "/work/clay-door.jpg",
		wide: false
	}
];
var practice = [
	{
		index: "01",
		name: "Spatial studies",
		detail: "Courtyards, halls, and rooms drawn before they are built — proportion, light, and the thickness of a wall."
	},
	{
		index: "02",
		name: "Interiors",
		detail: "Furniture as punctuation. Palettes stay narrow: ivory, timber, charcoal, and one note of color."
	},
	{
		index: "03",
		name: "Identity",
		detail: "Marks that can be stamped, stitched, or set in type. Quiet systems, not campaigns."
	},
	{
		index: "04",
		name: "Editorial & print",
		detail: "Paper objects, certificates, and cards. The sheet size is part of the design."
	},
	{
		index: "05",
		name: "Motion",
		detail: "Short walks through a space. Camera moves that respect the room instead of performing over it."
	},
	{
		index: "06",
		name: "Direction",
		detail: "One conversation from the first sketch to the last proof. No account layer in between."
	}
];
var interests = [
	"Architecture",
	"Interiors",
	"Identity",
	"Editorial",
	"Something else"
];
var noteSchema = object({
	name: string().min(2, "Give a name I can reply to."),
	email: email("That email doesn’t look complete."),
	interest: _enum(interests, { error: "Pick a direction." }),
	message: string().min(12, "A sentence or two is enough.")
});
var empty = {
	name: "",
	email: "",
	interest: "",
	message: ""
};
function compose(fields) {
	return [
		`Name: ${fields.name}`,
		`Email: ${fields.email}`,
		`Interest: ${fields.interest}`,
		"",
		fields.message
	].join("\n");
}
function ContactForm() {
	const [fields, setFields] = (0, import_react.useState)(empty);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [sent, setSent] = (0, import_react.useState)(false);
	const [copied, setCopied] = (0, import_react.useState)(false);
	function update(key, value) {
		setFields((current) => ({
			...current,
			[key]: value
		}));
		setErrors((current) => ({
			...current,
			[key]: void 0
		}));
	}
	function onSubmit(event) {
		event.preventDefault();
		const parsed = noteSchema.safeParse({
			name: fields.name.trim(),
			email: fields.email.trim(),
			interest: fields.interest,
			message: fields.message.trim()
		});
		if (!parsed.success) {
			const next = {};
			for (const issue of parsed.error.issues) {
				const key = issue.path[0];
				if (typeof key === "string" && next[key] === void 0) next[key] = issue.message;
			}
			setErrors(next);
			return;
		}
		setFields({
			name: parsed.data.name,
			email: parsed.data.email,
			interest: parsed.data.interest,
			message: parsed.data.message
		});
		setErrors({});
		setCopied(false);
		setSent(true);
	}
	const mailHref = `mailto:?subject=${encodeURIComponent(`Studio note — ${fields.interest || "Hello"}`)}&body=${encodeURIComponent(compose(fields))}`;
	async function copyNote() {
		try {
			await navigator.clipboard.writeText(compose(fields));
			setCopied(true);
		} catch {
			setCopied(false);
		}
	}
	if (sent) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border border-line bg-surface p-6 md:p-8",
		role: "status",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-widest text-accent uppercase",
				children: "Ready to send"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-3 font-display text-section text-fg",
				children: "Noted."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-md text-muted",
				children: "The note stays here until you send it. Open it in your mail app, or copy the text."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
				className: "mt-6 overflow-x-auto border-t border-line pt-5 font-sans text-sm whitespace-pre-wrap text-fg",
				children: compose(fields)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: mailHref,
						className: "inline-flex min-h-11 items-center bg-accent px-5 text-sm text-bg transition-transform duration-150 ease-out active:scale-[0.96]",
						children: "Open in mail"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "inline-flex min-h-11 items-center border border-line px-5 text-sm text-fg transition-transform duration-150 ease-out hover:border-fg active:scale-[0.96]",
						onClick: () => void copyNote(),
						children: copied ? "Copied" : "Copy note"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "inline-flex min-h-11 items-center px-2 text-sm text-muted underline-offset-4 hover:text-fg hover:underline",
						onClick: () => {
							setSent(false);
							setCopied(false);
						},
						children: "Edit note"
					})
				]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "grid gap-6",
		onSubmit,
		noValidate: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "name",
					label: "Name",
					value: fields.name,
					error: errors.name,
					autoComplete: "name",
					onChange: (value) => update("name", value)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "email",
					label: "Email",
					type: "email",
					value: fields.email,
					error: errors.email,
					autoComplete: "email",
					onChange: (value) => update("email", value)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "interest",
					className: "text-xs tracking-widest text-muted uppercase",
					children: "Direction"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						id: "interest",
						name: "interest",
						value: fields.interest,
						"aria-invalid": errors.interest ? true : void 0,
						"aria-describedby": errors.interest ? "interest-error" : void 0,
						className: "min-h-12 w-full appearance-none border-b border-line bg-transparent pr-8 text-base text-fg outline-none transition-colors duration-200 focus:border-accent",
						onChange: (event) => update("interest", event.target.value),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "Choose one"
						}), interests.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: item,
							children: item
						}, item))]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 text-muted",
						"aria-hidden": "true",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4" })
					})]
				}),
				errors.interest ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					id: "interest-error",
					className: "mt-2 text-sm text-fg",
					children: errors.interest
				}) : null
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "message",
					className: "text-xs tracking-widest text-muted uppercase",
					children: "Note"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					id: "message",
					name: "message",
					rows: 5,
					value: fields.message,
					"aria-invalid": errors.message ? true : void 0,
					"aria-describedby": errors.message ? "message-error" : void 0,
					className: "mt-2 w-full resize-y border-b border-line bg-transparent py-3 text-base text-fg outline-none transition-colors duration-200 focus:border-accent",
					onChange: (event) => update("message", event.target.value)
				}),
				errors.message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					id: "message-error",
					className: "mt-2 text-sm text-fg",
					children: errors.message
				}) : null
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "inline-flex min-h-11 items-center bg-accent px-6 text-sm text-bg transition-transform duration-150 ease-out active:scale-[0.96]",
					children: "Prepare note"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "No account. Nothing is stored."
				})]
			})
		]
	});
}
function Field({ id, label, value, error, onChange, type = "text", autoComplete }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			htmlFor: id,
			className: "text-xs tracking-widest text-muted uppercase",
			children: label
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			id,
			name: id,
			type,
			value,
			autoComplete,
			"aria-invalid": error ? true : void 0,
			"aria-describedby": error ? `${id}-error` : void 0,
			className: "mt-2 min-h-12 w-full border-b border-line bg-transparent text-base text-fg outline-none transition-colors duration-200 focus:border-accent",
			onChange: (event) => onChange(event.target.value)
		}),
		error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			id: `${id}-error`,
			className: "mt-2 text-sm text-fg",
			children: error
		}) : null
	] });
}
var links$1 = [
	{
		href: "#work",
		label: "Work"
	},
	{
		href: "#about",
		label: "About"
	},
	{
		href: "#practice",
		label: "Practice"
	},
	{
		href: "#contact",
		label: "Note"
	}
];
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-ink text-bg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-12 px-5 py-14 md:grid-cols-12 md:px-8 md:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-4xl tracking-tight md:text-5xl",
						children: "Daniel Nigatu"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-sm text-bg/70",
						children: "Architecture studies, interiors, and identity. Drawn in Addis Ababa."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "md:col-span-3",
					"aria-label": "Footer",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-bg/50 uppercase",
						children: "Index"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-1",
						children: links$1.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: link.href,
							className: "inline-flex min-h-11 items-center text-bg/85 transition-colors duration-200 hover:text-bg",
							children: link.label
						}) }, link.href))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-widest text-bg/50 uppercase",
							children: "Colophon"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-bg/70",
							children: "Set in Fraunces and Outfit. Ivory paper, charcoal ink, one teal."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-bg/70",
							children: "Addis Ababa"
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-bg/15",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-sm text-bg/55 sm:flex-row sm:items-center sm:justify-between md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Daniel Nigatu"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "tabular-nums",
					children: "No. 08 — eight studies in this issue"
				})]
			})
		})]
	});
}
var links = [
	{
		href: "#work",
		label: "Work"
	},
	{
		href: "#about",
		label: "About"
	},
	{
		href: "#practice",
		label: "Practice"
	},
	{
		href: "#contact",
		label: "Note"
	}
];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-30 border-b border-line bg-bg/90 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					className: "font-display text-lg tracking-tight text-fg",
					children: "Daniel Nigatu"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 sm:flex",
					"aria-label": "Page",
					children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: "rounded-full px-3 py-2 text-sm text-muted transition-colors duration-200 hover:text-fg",
						children: link.label
					}, link.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "min-h-11 rounded-full border border-line px-4 text-sm text-fg transition-transform duration-150 ease-out active:scale-[0.96] sm:hidden",
					"aria-expanded": open,
					"aria-controls": "mobile-nav",
					onClick: () => setOpen((value) => !value),
					children: open ? "Close" : "Menu"
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			id: "mobile-nav",
			className: "border-t border-line px-5 py-3 sm:hidden",
			"aria-label": "Page",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col",
				children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: link.href,
					className: "flex min-h-11 items-center font-display text-2xl text-fg",
					onClick: () => setOpen(false),
					children: link.label
				}) }, link.href))
			})
		}) : null]
	});
}
function WorkGrid() {
	const [category, setCategory] = (0, import_react.useState)("All");
	const visible = (0, import_react.useMemo)(() => category === "All" ? projects : projects.filter((project) => project.category === category), [category]);
	const label = visible.length === 1 ? "1 study" : `${visible.length} studies`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "work",
		className: "scroll-mt-24 border-t border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-8 md:flex-row md:items-end md:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-muted uppercase",
						children: "Index"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-section text-fg",
						children: "Selected studies"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						role: "group",
						"aria-label": "Filter by category",
						children: categories.map((item) => {
							const selected = item === category;
							const count = item === "All" ? projects.length : projects.filter((project) => project.category === item).length;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								"aria-pressed": selected,
								className: "min-h-11 rounded-full border px-4 text-sm transition-colors duration-200 active:scale-[0.96] " + (selected ? "border-ink bg-ink text-bg" : "border-line bg-transparent text-fg hover:border-fg"),
								onClick: () => setCategory(item),
								children: [item, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-2 tabular-nums " + (selected ? "text-bg/70" : "text-muted"),
									children: count
								})]
							}, item);
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-sm text-muted",
					"aria-live": "polite",
					children: [
						"Showing ",
						label,
						category === "All" ? "." : ` in ${category.toLowerCase()}.`
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2",
					children: visible.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: project.wide ? "md:col-span-2" : void 0,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "project-card",
							tabIndex: 0,
							"aria-labelledby": `${project.id}-title`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative overflow-hidden bg-ink",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: project.image,
										alt: "",
										width: 1728,
										height: 1152,
										className: "project-photo aspect-plate w-full object-cover " + (project.wide ? "md:aspect-banner" : ""),
										loading: project.index === "01" ? "eager" : "lazy"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "project-veil absolute inset-x-0 bottom-0 p-4 md:p-5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											id: `${project.id}-note`,
											className: "max-w-lg bg-ink px-4 py-3 text-base text-bg",
											children: project.blurb
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex items-start justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs tracking-widest text-muted uppercase",
										children: project.category
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										id: `${project.id}-title`,
										className: "mt-1 font-display text-3xl text-fg",
										children: project.title
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "pt-1 text-sm text-muted tabular-nums",
										children: [
											project.index,
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mx-1.5 text-line",
												children: "/"
											}),
											project.year
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted",
									children: project.place
								})
							]
						})
					}, project.id))
				})
			]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkGrid, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Practice, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-5 pt-10 pb-16 md:px-8 md:pt-16 md:pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rise text-xs tracking-widest text-muted uppercase",
				children: "Studio index · Addis Ababa"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "rise rise-2 mt-5 font-display text-hero text-fg italic",
				children: [
					"Rooms, marks,",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"and the quiet",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"between them."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-8 md:mt-14 md:grid-cols-12 md:gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "rise rise-3 max-w-xl text-lg text-fg md:col-span-6",
					children: "Daniel Nigatu designs architecture studies, interiors, and identity systems. The palette stays small. The light does most of the talking."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "rise rise-4 grid grid-cols-2 gap-x-6 gap-y-5 text-sm md:col-span-5 md:col-start-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-xs tracking-widest text-muted uppercase",
							children: "Based"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-fg",
							children: "Addis Ababa"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-xs tracking-widest text-muted uppercase",
							children: "Practice"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-fg",
							children: "Independent studio"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-xs tracking-widest text-muted uppercase",
							children: "Now"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-fg",
							children: "Open for a commission"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-xs tracking-widest text-muted uppercase",
							children: "This issue"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-fg tabular-nums",
							children: "08 studies"
						})] })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#work",
				className: "mt-12 inline-flex min-h-11 items-center gap-3 text-sm text-accent",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "h-px w-10 bg-accent",
					"aria-hidden": "true"
				}), "Enter the index"]
			})
		]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "scroll-mt-24 border-t border-line bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-12 md:px-8 md:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-muted uppercase",
					children: "About"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-section text-fg",
					children: "A studio, not a department."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-7 md:col-start-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg text-fg",
						children: "I draw spaces before they exist, then the marks that help people find them. Most of the work is a study in proportion: how a wall meets light, how a word sits on a sheet, how a room feels at four in the afternoon."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 font-display text-2xl text-fg italic md:text-3xl",
						children: "Light first. Then the wall. Then the word that names it."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-muted",
						children: "Commissions run from a single room to a full identity. I work directly — the person who has to live with the result is the person I talk to."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-10 grid grid-cols-3 gap-4 border-t border-line pt-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs tracking-widest text-muted uppercase",
								children: "Studies"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 font-display text-3xl text-fg tabular-nums",
								children: "08"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs tracking-widest text-muted uppercase",
								children: "Disciplines"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 font-display text-3xl text-fg tabular-nums",
								children: "04"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs tracking-widest text-muted uppercase",
								children: "City"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 font-display text-3xl text-fg tabular-nums",
								children: "01"
							})] })
						]
					})
				]
			})]
		})
	});
}
function Practice() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "practice",
		className: "scroll-mt-24 border-t border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-muted uppercase",
					children: "Practice"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-section text-fg",
					children: "What the studio actually does."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "mt-10 border-t border-line",
				children: practice.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2 border-b border-line py-6 md:grid-cols-12 md:items-baseline md:gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-display text-2xl text-fg md:col-span-4",
							children: item.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "text-muted md:col-span-7",
							children: item.detail
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-muted tabular-nums md:col-span-1 md:text-right",
							children: item.index
						})
					]
				}, item.index))
			})]
		})
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "scroll-mt-24 border-t border-line bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-12 md:px-8 md:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-muted uppercase",
						children: "Note"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-section text-fg",
						children: "Tell me the room, the mark, or the deadline."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted",
						children: "A short note is enough. I’ll open it in your mail app so you can send it from your own address."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "md:col-span-7 md:col-start-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})
			})]
		})
	});
}
//#endregion
export { Home as component };
