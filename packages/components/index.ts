import { type App, type Component, type Plugin } from 'vue';
import * as components from './src';

const install: Plugin = (app: App) => {
  Object.values(components).forEach((c: Component) => {
    app.component(c.name!, c);
  });
};

export default install;
