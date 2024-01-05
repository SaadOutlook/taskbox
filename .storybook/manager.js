import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';
import asteratheme from './asteratheme';

addons.setConfig({
  theme: asteratheme
});