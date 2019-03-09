# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 1.1.2 - 2019-03-09
### Changed
- php version in `composer.json`

## 1.1.1 - 2019-03-09
### Changed
- removed craft plugin entries from README.md

## 1.1.0 - 2019-03-09
### Changed
- updated env.example file to have DEFAULT_SITE_URL
- removed nystudios107 craft plugins
- added node modules: @babel/plugin-proposal-class-properties, html-webpack-herddisk-plugin
- removed node module git-rev-sync
- updated index.twig file
- removed vue folder
- moved webpack config to root folder
- changed webpack setting to work with the current config
- renamed ./src/img to ./src/assets
- replaced favicon-src.png image

### Added
- webpack.template.wrapper.twig
- ajax-layout.twig
- index.js
- router.js
- standard routes: base.js, home.js

## 1.0.4 - 2019-03-04
### Changed
- remove VUE js files

## 1.0.3 - 2019-03-04
### Changed
- added type to `composer.json` file

## 1.0.2 - 2019-03-03
### Changed
- changed name to all lowercase in `composer.json` file

## 1.0.1 - 2019-03-03
### Changed
- fixed `composer.json` file

## 1.0.0 - 2019-03-03
### Added
- initial release
- nystutios107/craft-minify - minify inline js/css/html
- ether/seo - add SEO tools
- nystudio107/craft-typogrify - clean outputed content
- nystudio107/craft-twigpack
- ostark/craft-async-queue - a better queue handler
- craftcms/redactor - rich text redactor
- agencyleroy/craft-kint - debugging utility