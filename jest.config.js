module.exports = {
    // The root of your source code, typically /src
    // `<rootDir>` is a token Jest substitutes
    roots: ['<rootDir>/src'],

    // Jest transformations -- this adds support for TypeScript
    // using ts-jest
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },

    // Runs special logic, such as cleaning up components
    // when using React Testing Library and adds special
    // extended assertions to Jest
    // setupFilesAfterEnv: ['@testing-library/react/cleanup-after-each', '@testing-library/jest-dom/extend-expect'],

    // Test spec file resolution pattern
    // Matches parent folder `__tests__` and filename
    // should contain `test` or `spec`.
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',

    // Module file extensions for importing
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

    /**
     * With snapshotSerializers: [“enzyme-to-json/serializer”]
     * we set snapshot serializer for Jest to be the enzyme-to-json
     * serializer we installed in the previous step.
     */
    snapshotSerializers: ['enzyme-to-json/serializer'],

    /**
     * With setupTestFrameworkScriptFile: “<rootDir>/src/setupEnzyme.ts”
     * we tell Jest where to look for our setup tests file.
     * A file which sets up our test cases to begin with.
     */
    setupFilesAfterEnv: ['<rootDir>/src/setupEnzyme.ts'],

    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': '<rootDir>/src/__mocks__/styleMock.js',
        '\\.(gif|ttf|eot|svg)$': '<rootDir>/src/__mocks__/fileMock.js',
    },
};
