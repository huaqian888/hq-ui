import { App, Component, Plugin } from 'vue'
import * as components from './src'

const install: Plugin = (app: App) => {
    console.log(components);
    Object.values(components).forEach((c: Component) => {
        console.log(c.name);
        app.component(c.name!, c)
    })
}

export default install;