import { system, Config } from '@typed-styled-system/core'

const config: Config = {
  color: {
    property: 'color',
    scale: 'colors',
  },
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors',
  },
  opacity: true,
}
config.bg = config.backgroundColor

export const color = system(config)
export default color
