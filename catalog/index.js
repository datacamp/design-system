import React from 'react'
import ReactDOM from 'react-dom'
import { Catalog } from 'catalog'
import pages from './config/pages'
import { logoSrc, theme, responsiveSizes } from './config/theme'
import './build/static/ingredients.css';

const styles = []
const scripts = []
const imports = []

const config = {
  title: 'DataCamp Waffles',
  useBrowserHistory: true,
  styles,
  scripts,
  imports,
  // logoSrc,
  theme,
  responsiveSizes,
  pages
}

ReactDOM.render(
  <Catalog {...config} />,
  document.getElementById('catalog')
)
