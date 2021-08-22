const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
    mode: "jit",
    darkMode: "class",
    purge: ["./src/pages/**/*.tsx", "./src/components/**/*.tsx"],
    theme: {
        container: {
            center: true
        }
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
    ],
};
