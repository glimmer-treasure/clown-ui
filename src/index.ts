import type { App } from 'vue'
import * as components from './components/index'

export const register = () => {
    return {
        install(app: App) {
            Object.entries(components).forEach((item) => {
                const [name, component] = item
                app.component(name, component)
            })
        }
    }
}

export {components}