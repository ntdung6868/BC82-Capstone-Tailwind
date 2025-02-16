/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            keyframes: {
                "shadow-pulse": {
                    "0%": { boxShadow: "0 0 0 0px rgba(254, 96, 25, 0.7)" },
                    "70%": { boxShadow: "0 0 0 35px rgba(254, 96, 25, 0)" },
                    "100%": { boxShadow: "0 0 0 0 rgba(254, 96, 25, 0)" },
                },
                "shadow-pulse-2": {
                    "0%": { boxShadow: "0 0 0 0px rgba(254, 96, 25, 0.7)" },
                    "70%": { boxShadow: "0 0 0 20px rgba(254, 96, 25, 0)" },
                    "100%": { boxShadow: "0 0 0 0 rgba(254, 96, 25, 0)" },
                },
            },
            animation: {
                "shadow-pulse": "shadow-pulse 1.5s infinite",
                "shadow-pulse-2": "shadow-pulse-2 1.4s infinite",
            },
        },
        container: {
            center: true,
            padding: "0.75rem",
            screens: {
                DEFAULT: "1202px",
            },
        },
    },
    plugins: [],
};
