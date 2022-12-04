import '@testing-library/jest-dom/extend-expect'

module.exports = {
  moduleNameMapper: {
    '^@db/(.*)$': '<rootDir>/server/db/$1',
    '^@components/(.*)$': '<rootDir>/app/components/$1',
    '^@mocks/(.*)$': '<rootDir>/__mocks__/$1'
  }
}
