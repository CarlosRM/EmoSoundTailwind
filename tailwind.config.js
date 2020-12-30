const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        accent: {
          DEFAULT: '#6bd0ff'
        },
        darkAccent: {
          DEFAULT: '#45c4ff'
        },
        grey: {
          DEFAULT: '#1f2123'
        },
        lightGrey: {
          DEFAULT: '#ced4da'
        },
        black: {
          DEFAULT: '#000'
        },
        greyText: {
          DEFAULT: '#495057'
        }

      },
      container: {
        center: true,
        padding: "1rem"
      },
      fontFamily: {
        'custom-sans': ['Quicksand', 'sans-serif'],
        'custom-serif': ["Playfair Display", "Georgia", "Times New Roman", "serif"],
        'fab': ["'Font Awesome 5 Brands'"]
      },
      fontSize: {
        '2rem': '2rem',
        '2.5rem': '2.5rem'
      },
      spacing: {
        '20%': '20%',
        '15%': '15%',
        '10%': '10%',
        '5%' : '5%',
        '100px': '100px',
        '50px': '50px',
        '30px': '30px',
        '20px': '20px',
      },
      height: {
        '30vh': '30vh',
        '150px': '150px'
      },
      width: {
        '30%': '30%',
        '50%': '50%',
        '90%': '90%'
      },
      flex: {
        '30%-fixed': '0 0 30%',
        '45%-fixed': '0 0 45%',
        '95%-fixed': '0 0 95%',
        '100%-fixed':  '0 0 100%'
      }
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
     '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
      accent: '2px 2px 22px -7px #6bd0ff'
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.25em',
      midwide: '.125em'
     }

  },
  variants: {
    extend: {}
  },
  plugins: []
};
