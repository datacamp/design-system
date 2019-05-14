const fs = require('fs');
const coreTokens = require('../lib/core-tokens.json');
const futureTokens = require('../lib/future-tokens.json');

// Snapshots to ensure that changes are not made to exposed objects
describe('tokens', () => {
  it('generates the core-tokens', () => {
    expect(coreTokens).toMatchSnapshot();
  });

  it('generates the future-tokens', () => {
    expect(futureTokens).toMatchSnapshot();
  });

  it('generates the scss variables', () => {
    const scssVariables = fs.readFileSync('lib/variables.scss', 'utf8');
    expect(scssVariables).toMatchSnapshot();
  });
});
