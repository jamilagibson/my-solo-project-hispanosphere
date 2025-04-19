// tailwind.config.js
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'primary': '#ff5f5f',       // Bright, accessible primary color
          'secondary': '#1e2a47',     // Deep blue secondary color
          'accent': '#ffbc42',        // Accent color for highlights
          'light-bg': '#f7fafc',      // Light background for contrast
          'dark-bg': '#2d3748',       // Dark background for contrast
          'highlight': '#ffdf00',     // Highlight color
        },
        fontFamily: {
          sans: ['Inter', 'Arial', 'sans-serif'],  // Clean, modern font
          serif: ['Georgia', 'serif'],             // Readable serif font for contrast
        },
        boxShadow: {
          'glow': '0 0 20px rgba(255, 95, 95, 0.5)', // Subtle glow effect
          'card': '0 4px 12px rgba(0, 0, 0, 0.1)',  // Soft shadow for cards
        },
      },
    },
    plugins: [],
  };
  