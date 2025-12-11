module.exports = {
  darkMode: ["class"],
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(240 3.7% 15.9%)",
        input: "hsl(240 3.7% 15.9%)",
        ring: "hsl(240 4.9% 83.9%)",
        background: "hsl(222.2 47.4% 11.2%)",
        foreground: "hsl(210 40% 98%)",
        primary: { DEFAULT: "hsl(262 83% 58%)", foreground: "hsl(210 40% 98%)" },
        secondary: { DEFAULT: "hsl(240 4.8% 16%)", foreground: "hsl(210 40% 98%)" }
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem"
      }
    }
  },
  plugins: []
};
