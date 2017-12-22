'use strict';
const Generator = require('yeoman-generator');
const path = require('path');
const chalk = require('chalk');
const yosay = require('yosay');
const _ = require('lodash');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    // Argument
    this.argument('name', { type: String, required: false });
    this.argument('description', { type: String, required: false });
    this.argument('homepage', { type: String, required: false });
    this.argument('authorName', { type: String, required: false });
    this.argument('authorEmail', { type: String, required: false });
    this.argument('authorUrl', { type: String, required: false });
    this.argument('keywords', { type: String, required: false });

    // Option
    this.option('skip-install');
    this.option('i18n');
    this.option('jest');
    this.option('flow');
    this.option('husky');
    this.option('eslint');
    this.option('browserSync');
  }
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
        when: typeof this.options.i18n === 'undefined',
        default: true
      },
      {
        type: 'confirm',
        name: 'jest',
        message: 'Would you like to use Jest?',
        when: typeof this.options.jest === 'undefined',
        default: true
      },
      {
        type: 'confirm',
        name: 'flow',
        message: 'Would you like to use Flow package (devOnly)?',
        when: typeof this.options.flow === 'undefined',
        default: true
      },
      {
        type: 'confirm',
        name: 'husky',
        message: 'Would you like to use Husky (devOnly)?',
        when: typeof this.options.husky === 'undefined',
        default: true
      },
      {
        type: 'confirm',
        name: 'eslint',
        message: 'Would you like to use Eslint (devOnly)?',
        when: typeof this.options.eslint === 'undefined',
        default: true
      },
      {
        type: 'confirm',
        name: 'browserSync',
        message: 'Would you like to use BrowserSync (devOnly)?',
        when: typeof this.options.browserSync === 'undefined',
        default: true
      }
    ];

    return this.prompt(prompts).then(options => {
      this.options = {
        ...options,
        ...this.options
      };
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
    if (!this.options['skip-install']) {
      this.installDependencies();
    }
  }
};
