/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
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
