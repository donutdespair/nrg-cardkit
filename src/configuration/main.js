const fonts = require('./fonts');
const layers = require('./layers');

const configuration = {
  card: {
    width: 1066,
    height: 600,
    fill: '#333333'
  },
  fonts: fonts,
  layers: layers
}

const templates = require('./templates/main');
const themes = require('./themes/main');
const layouts = require('./layouts/main');

module.exports = {
  configuration: configuration,
  templates: templates,
  themes: themes,
  layouts: layouts
}