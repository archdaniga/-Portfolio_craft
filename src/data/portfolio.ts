export const categories = ["All", "Architecture", "Interiors", "Identity", "Editorial"] as const;

export type Category = (typeof categories)[number];
export type ProjectCategory = Exclude<Category, "All">;

export type Project = {
  id: string;
  index: string;
  title: string;
  category: ProjectCategory;
  year: string;
  place: string;
  blurb: string;
  image: string;
  wide: boolean;
};

export const projects: Project[] = [
  {
    id: "volume-house",
    index: "01",
    title: "Volume House",
    category: "Architecture",
    year: "2026",
    place: "Addis Ababa",
    blurb: "A courtyard house cut by thin shadow. Limewash, one olive tree, and a single pane of teal glass.",
    image: "/work/volume-house.jpg",
    wide: true,
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
    wide: false,
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
    wide: false,
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
    wide: false,
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
    wide: false,
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
    wide: true,
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
    wide: false,
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
    wide: false,
  },
];

export const practice = [
  {
    index: "01",
    name: "Spatial studies",
    detail: "Courtyards, halls, and rooms drawn before they are built — proportion, light, and the thickness of a wall.",
  },
  {
    index: "02",
    name: "Interiors",
    detail: "Furniture as punctuation. Palettes stay narrow: ivory, timber, charcoal, and one note of color.",
  },
  {
    index: "03",
    name: "Identity",
    detail: "Marks that can be stamped, stitched, or set in type. Quiet systems, not campaigns.",
  },
  {
    index: "04",
    name: "Editorial & print",
    detail: "Paper objects, certificates, and cards. The sheet size is part of the design.",
  },
  {
    index: "05",
    name: "Motion",
    detail: "Short walks through a space. Camera moves that respect the room instead of performing over it.",
  },
  {
    index: "06",
    name: "Direction",
    detail: "One conversation from the first sketch to the last proof. No account layer in between.",
  },
] as const;

export const interests = [
  "Architecture",
  "Interiors",
  "Identity",
  "Editorial",
  "Something else",
] as const;

export type Interest = (typeof interests)[number];
