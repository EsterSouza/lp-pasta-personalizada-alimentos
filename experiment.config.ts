export const experiment = {
  cookie: "ab-alimentos",
  maxAge: 60 * 60 * 24 * 30,
  variants: [
    { id: "a", weight: 50 },
    { id: "b", weight: 50 },
  ],
  champion: null as string | null,
};
