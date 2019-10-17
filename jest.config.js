module.exports = {
    roots: [
        '<rootDir>/src',
    ],
    transform: {
        '^.+\\.(tsx|ts)?$': 'ts-jest',
    },
    testEnvironment: 'jsdom',
    testMatch: [
        '<rootDir>/src/**/*.test.ts',
        '<rootDir>/src/**/*.test.tsx',
    ],
    testPathIgnorePatterns: [
        '/node_modules/',
    ],
    moduleNameMapper: {
        '\\.(css|scss)$': '<rootDir>/.jest/style-mock.js',
        'src/(.*)$': '<rootDir>/src/$1',
    }
};
