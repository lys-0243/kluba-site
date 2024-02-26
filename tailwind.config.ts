import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: "transparent",
      primary: "#c71a0c",
      bleu: "#152c45",
      bleulight: "#1f354e",
      text: "#2b2b2b",
      orange: "#e45c16",
      white: "#fff",
      grayHard: "#D9D9D9",
      grayLight: "#f6f6f6",
    },
    fontFamily: {
      "PExtra":      ["PlusJakartaSans-ExtraBold", "sans-serif"],
      "PBold":       ["PlusJakartaSans-Bold", "sans-serif"],
      "PMedium":     ["PlusJakartaSans-Medium", "sans-serif"],
      "PRegular":    ["PlusJakartaSans-Regular", "sans-serif"],
      "PLight":      ["PlusJakartaSans-Light", "sans-serif"],
    },
    extend: {
      spacing: {
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
      },
      borderWidth: {
        3: "3px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      
    },
  },
  variants: {
    animation: ["motion-safe"]
  },
  plugins: [
    require('tailwindcss-animated'),
    
  ],
}
export default config
