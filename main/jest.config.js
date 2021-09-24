const { getJestProjects } = require('@nrwl/jest');

module.exports = {
  projects: [
    ...getJestProjects(),
    '<rootDir>/apps/app-one',
    '<rootDir>/apps/shell',
  ],
};
