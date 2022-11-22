import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      backgroundColor: {
        'bg-green-custom': '#ff0000' //#4fc08d
      }
    }
  }
}
