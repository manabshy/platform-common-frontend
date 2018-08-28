import { configure, addDecorator } from "@storybook/react";
import { withKnobs } from '@storybook/addon-knobs/react';
import { setOptions } from '@storybook/addon-options';
import { setDefaults } from '@storybook/addon-info'

setOptions({
  /**
   * name to display in the top left corner
   * @type {String}
   */
  name: 'Platform Common Frontend',
  /**
   * URL for name in top left corner to link to
   * @type {String}
   */
  url: 'https://github.com/ukncsc/platform-common-frontend'
});

setDefaults({
  header: false,
  inline: true, // Toggles display of header with component name and description
});

addDecorator(withKnobs);

// Import stylesheets here
import './storybook-core.scss'
import './storybook-styles.scss'
// @note: Include paths will be added into webpack config
let req = require.context("../src/components", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
