const dirTree = require('directory-tree');
const fs = require('fs');
const omitDeep = require('omit-deep-lodash');
const _ = require('lodash');

// remove hash from filename so snapshots are diffed rather than recreated
const replaceFileName = fileName =>
  fileName.replace(/(waffles)\.(\w+)(\.css)/, '$1$3');

describe('Core', () => {
  it('has correct file structure', () => {
    const dir = dirTree('lib');
    const structure = omitDeep(dir, 'size');
    const cssDirIndex = _.findIndex(
      structure.children,
      ({ name }) => name === 'css'
    );
    const cssFiles = structure.children[cssDirIndex].children;
    structure.children[cssDirIndex].children = cssFiles.map(file => ({
      ...file,
      name: replaceFileName(file.name),
      path: replaceFileName(file.path),
    }));
    expect(structure).toMatchSnapshot();
  });

  it('generates the correct files', () => {
    dirTree('lib', { extensions: /\.(css|scss|json)$/ }, item => {
      const file =
        item.extension === '.json'
          ? require(`../${item.path}`) // eslint-disable-line
          : replaceFileName(fs.readFileSync(item.path, 'utf8'));
      expect(file).toMatchSnapshot(replaceFileName(item.path));
    });
  });
});
