'use strict';
const Generator = require('yeoman-generator');
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
        message: 'Description:',
        when: !this.props.description
      },
      {
        type: 'input',
        name: 'homepage',
        message: 'Project homepage url:',
        when: !this.props.homepage
      },
      {
        type: 'input',
        name: 'authorName',
        message: "Author's Name:",
        when: !this.props.authorName,
        default: this.user.git.name(),
        store: true
      },
      {
        type: 'input',
        name: 'authorEmail',
        message: "Author's Email",
        when: !this.props.authorEmail,
        default: this.user.git.email(),
        store: true
      },
      {
        type: 'input',
        name: 'authorUrl',
        message: "Author's Homepage",
        when: !this.props.authorUrl,
        store: true
      },
      {
        type: 'input',
        name: 'keywords',
        message: 'Package keywords (comma to split)',
        when: _.isEmpty(this.pkg.keywords),
        filter: function(words) {
          return words.split(/\s*,\s*/g).filter(x => x);
        }
      },
      {
        type: 'confirm',
        name: 'i18n',
        message: 'Would you like to use i18n package?',
        when: this.props.i18n === undefined,
        default: true
      },
      {
        type: 'confirm',
        name: 'jest',
        message: 'Would you like to use Jest?',
        when: this.props.jest === undefined,
        default: true
      },
      {
        type: 'confirm',
        name: 'flow',
        message: 'Would you like to use Flow package?',
        when: this.props.flow === undefined,
        default: true
      },
      {
        type: 'confirm',
        name: 'husky',
        message: 'Would you like to use Husky?',
        when: this.props.husky === undefined,
        default: true
      },
      {
        type: 'confirm',
        name: 'eslint',
        message: 'Would you like to use Eslint?',
        when: this.props.eslint === undefined,
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('dummyfile.txt'),
      this.destinationPath('dummyfile.txt')
    );
  }

  install() {
    this.installDependencies();
  }
};
