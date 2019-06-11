import React from 'react';
import ReactDOM from 'react-dom';
import { Catalog } from 'catalog';
import pages from './config/pages';
import { logoSrc, theme, responsiveSizes } from './config/theme';
import '../src/stylesheets/catalog.scss';

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
