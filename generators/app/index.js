'use strict';
const Generator = require('yeoman-generator');
const path = require('path');
const chalk = require('chalk');
const yosay = require('yosay');
const _ = require('lodash');

module.exports = class extends Generator {
  Prompting() {
    this.log(
      yosay(
        'Welcome to the scrumtrulescent ' +
          chalk.red('generator-react-awesome') +
          ' generator!'
      )
    );

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Application Name:'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Description:'
      },
      {
        type: 'input',
        name: 'homepage',
        message: 'Project homepage url:'
      },
      {
        type: 'input',
        name: 'authorName',
        message: "Author's Name:",
        default: this.user.git.name(),
        store: true
      },
      {
        type: 'input',
        name: 'authorEmail',
        message: "Author's Email",
        default: this.user.git.email(),
        store: true
      },
      {
        type: 'input',
        name: 'authorUrl',
        message: "Author's Homepage",
        store: true
      },
      {
        type: 'input',
        name: 'keywords',
        message: 'Package keywords (comma to split)',
        when: _.isEmpty(this.pkg && this.pkg.keywords),
        filter: function(words) {
          return words.split(/\s*,\s*/g).filter(x => x);
        }
      },
      {
        type: 'confirm',
        name: 'i18n',
        message: 'Would you like to use i18n package?',
        default: true
      },
      {
        type: 'confirm',
        name: 'jest',
        message: 'Would you like to use Jest?',
        default: true
      },
      {
        type: 'confirm',
        name: 'flow',
        message: 'Would you like to use Flow package (devOnly)?',
        default: true
      },
      {
        type: 'confirm',
        name: 'husky',
        message: 'Would you like to use Husky (devOnly)?',
        default: true
      },
      {
        type: 'confirm',
        name: 'eslint',
        message: 'Would you like to use Eslint (devOnly)?',
        default: true
      },
      {
        type: 'confirm',
        name: 'browserSync',
        message: 'Would you like to use BrowserSync (devOnly)?',
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    this.sourceRoot(path.join(__dirname, 'react-awesome'));
    this.fs.copy(
      this.templatePath('dummyfile.txt'),
      this.destinationPath('dummyfile.txt')
    );
  }

  install() {
    this.installDependencies();
  }
};
