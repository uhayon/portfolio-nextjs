module.exports = {
    transform: {
        ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform",
        "^.+\\.tsx?$": "babel-jest",
    },
    testMatch: ["**/src/**/*.test.[jt]s?(x)"],
    setupFilesAfterEnv: ["./setupTests.ts"],
    collectCoverageFrom: [
        "src/**/*.{ts,tsx}",
        "!src/**/*.{scss,css}",
        "!src/enums/**",
        "!src/types/**",
        "!src/constants/**",
        "!**/node_modules/**",
        "!**/*.{json}",
    ],
    moduleDirectories: ["node_modules", "src"],
};
