import '../src/stylesheets/catalog.scss';

import { Catalog } from 'catalog';
import React from 'react';
import ReactDOM from 'react-dom';

import pages from './config/pages';
import { logoSrc, responsiveSizes, theme } from './config/theme';

const styles = [];
const scripts = [];
const imports = [];

const config = {
  imports,
  logoSrc,
  pages,
  responsiveSizes,
  scripts,
  styles,
  theme,
  title: 'DataCamp Waffles',
  useBrowserHistory: true,
};

ReactDOM.render(<Catalog {...config} />, document.getElementById('catalog'));
