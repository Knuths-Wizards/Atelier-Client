/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    light240: {

      "primary": "#fbbf24",

      "secondary": "#fcd34d",

      "accent": "#fde68a",

      "neutral": "#fef3c7",

      "base-100": "#fef3c7",

      "info": "#42aebd",

      "success": "#489380",

      "warning": "#eb8014",

      "error": "#e01a2e",
               },
    dark240: {

      "primary": "75DDDD",

      "secondary": "#508991",

      "accent": "#172A3A",

      "neutral": "#09BC8A",

      "base-100": "#004346",

      "info": "#47b9e6",

      "success": "#1fc7b9",

      "warning": "#c7810f",

      "error": "#e11d48",
                         },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: true, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark240", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  }
}

