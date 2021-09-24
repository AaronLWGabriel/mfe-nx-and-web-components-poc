const { getJestProjects } = require('@nrwl/jest');

module.exports = {
  projects: [
    ...getJestProjects(),
    '<rootDir>/apps/loan',
    '<rootDir>/apps/shell',
  ],
};
