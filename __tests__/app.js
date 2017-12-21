'use strict';
const path = require('path');
// Const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-react-awesome:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app')).withPrompts();
  });

  it('creates files', () => {
    // Assert.file(['dummyfile.txt']);
  });
});
