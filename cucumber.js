module.exports = {
    default: {
        require: ["tests/**/*.ts"], // Path to step definitions
        requireModule: ["ts-node/register"], // Transpile TypeScript
        format: ["pretty"], // Output format
        paths: ["features/**/*.feature"], // Path to .feature files
        publishQuiet: true // Suppress cucumber.io report prompt
    }
};