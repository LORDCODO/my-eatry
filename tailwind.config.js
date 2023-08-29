/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      letterSpacing: {
        'tighter': '-0.05em',  // Custom word spacing classes
        'wide': '0.1em',      // Add more as needed
      },
    },
  },
  plugins: [],
}


