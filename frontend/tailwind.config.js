/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        drop: 'drop 1s infinite',
        reveal: 'reveal 1s infinite'
      },
      keyframes: {
        drop: {
          '0%': { transform: 'translateY(0)' },
          '10%': { transform: 'translateY(-20px)' },
          '18%': { transform: 'translateY(10px)' },
          '36%': { transform: 'translateY(-10px)' },
          '46%': { transform: 'translateY(5px)' },
          '100%': { transform: 'translateY(0)' }
        },
        reveal: {
          // Define your keyframes for the reveal animation here
        }
      }
    }
  },
  plugins: [],
};

