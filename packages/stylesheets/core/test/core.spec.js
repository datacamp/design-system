const dirTree = require('directory-tree');
const fs = require('fs');
const omitDeep = require('omit-deep-lodash');

describe('Core', () => {
  it('has correct file structure', () => {
    const dir = dirTree('lib');
    expect(omitDeep(dir, 'size')).toMatchSnapshot();
  });

  it('generates the correct files', () => {
    dirTree('lib', { extensions: /\.(css|scss|json)$/ }, item => {
      const file =
        item.extension === '.json'
          ? require(`../${item.path}`) // eslint-disable-line
          : fs.readFileSync(item.path, 'utf8');
      expect(file).toMatchSnapshot(item.path);
    });
  });
});
