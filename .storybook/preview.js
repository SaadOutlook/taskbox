/** @type { import('@storybook/react').Preview } */

import '../src/styles/global.css';

const preview = {
  parameters: {
    actions: { hidden:true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // options:{
    //   showPanel: false,
    // }
  },
};

export default preview;
