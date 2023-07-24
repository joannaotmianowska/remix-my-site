import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "my-violet": "#CAB8DB",
        "my-orange": "#ECA7A4",
        "my-pink": "#EF91B3",
        "my-beige": "#F6EFEE",
        "my-red": "#DF6950",
      },
    },
  },
  plugins: [],
} satisfies Config;
