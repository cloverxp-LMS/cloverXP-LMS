import type { Config } from 'tailwindcss'

import tailwindcssAnimate from "tailwindcss-animate";

const config = {
    darkMode: "class",
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {},
    plugins: [tailwindcssAnimate],
} satisfies Config

export default config
