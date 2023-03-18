import type { Config } from 'jest'

const config: Config = {
  testMatch: ['<rootDir>/**/*.spec.ts'],
  collectCoverageFrom: ['src/**/*/.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
  },
}

export default config
