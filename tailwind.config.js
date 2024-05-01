/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: { min: "576px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "768px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "992px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1200px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }
      "2xl": { min: "1536px" },
    },
    fontSize: {
      xs: ["12px", "24px"],
      sm: ["14px", "26px"],
      base: ["16px", "28px"],
      xl: ["20px", "32px"],
      "2xl": ["24px", "36px"],
      "3xl": ["32px", "44px"],
    },
    fontWeight: {
      thin: "100",
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    container: {
      center: "true",
      // screens: {
      //   sm: "100%",
      //   md: "100%",
      //   lg: "1024px",
      //   xl: "1354px",
      //   '2xl':"1536px",
      // },
      maxWidth: {
        xl: "700px",
      },
    },
    extend: {
      maxWidth: {
        'container-sm': '576px',  // Adjust as needed for small screens
        'container-md': '768px',  // Adjust as needed for medium screens
        'container-lg': '1000px',  // Adjust as needed for large screens
        'container-xl': '1450px', // Adjust as needed for extra large screens '1456px'
        'container-2xl': '1606px', // Adjust as needed for 2xl screens
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-button-gradient":
          "var(--Gradients-Gradient, linear-gradient(180deg, #F2CA88 0%, #EDB25A 100%))",
        "Light-Gradient-4":
          "var(--Gradients-Light-Gradient-4, linear-gradient(180deg, rgba(242, 202, 136, 0.80) -27.7%, rgba(236, 236, 236, 0.80) 119.23%))",
        transparents: "var(--Transparent, rgba(13, 13, 13, 0.50))",
        Cultured: "#F4F4F4",
        black: "#333333",
        White: "#ffffff",
      },
      colors: {
        "custom-grey": "var(--Greys-FAFAFA, #FAFAFA)",
        "yellow-color": "#F79F1F",
        cultured: "#F4F4F4",
        black: "#333333",
        white: "#ffffff",
        "complimentary-red": "#A30000",
        "complimentary-red-bg": "#FBE3E3",
        "complimentary-blue": "#3B75EF",
        "complimentary-violet": "922CEE",
        "complimentary-blue-bg": "#E3ECFF",
        "complimentary-violet-bg": "#E2C9F9",
        yellow: {
          "Tint-1": "#E99B39",
          "Tint-2": "#EAA341",
          "Tint-3": "#ECAB4C",
          "Tint-4": "#EDB25A",
          "Tint-5": "#EFBA68",
          "Tint-6": "#F1C178",
          "Tint-7": "#F2CA88",
          "Tint-8": "#F4D299",
          "Tint-9": "#F6D9AA",
          "Tint-10": "#F7E1BC",
          "Tint-11": "#F9E9CC",
          "Tint-12": "#FCF0DE",
          "Tint-13": "#FDF8F0",
          "shade-1": "#DA9034",
          "shade-2": "#C88430",
          "shade-3": "#B6792B",
          "shade-4": "#A46C26",
          "shade-5": "#926121",
          "shade-6": "#926121",
          "shade-7": "#6F4917",
          "shade-8": "#5C3D12",
          "shade-9": "#4B310E",
          "shade-10": "#392509",
          "shade-11": "#271A04",
        },
        signal: {
          green: "#41AE0E",
          "green-bg": "#DEF7D2",
          red: "#CE0000",
          "red-bg": "#FFECEC",
          yellow: "#E5B712",
          "yellow-bg": "#FCF1CB",
          blue: "#17A9E7",
          "blue-bg": "#D0F1FF",
        },
        grey: {
          "grey-1": "#4A5568",
          "grey-2": "#595959",
          "grey-3": "#757575",
          "grey-4": "#888888",
          "grey-5": "#989898",
          "grey-6": "#C4C4C4",
          "grey-7": "#D4D4D4",
          "grey-8": "#D9D9D9",
          "grey-9": "#ECECEC",
          "grey-10": "#F6F6F6",
          "grey-11": "#F8F8F8",
          "grey-12": "#FAFAFA",
        },
      },
      borderColor: {
        "custom-grey": "#ff00ff",
      },
      backdropBlur: {
        "md": "10px",
      },
      borderRadius: {
        none: "0",
        "r-20": "20px",
      },
      boxShadow: {
        'regular': '0px 0px 44px 0px rgba(0, 0, 0, 0.08)',
        'basic':'0px 12px 20px 0px rgba(233, 155, 57, 0.56)'
      }
    },
  },
  plugins: [],
};
