import { defineConfig } from 'astro/config'
import Particles from 'particlesjs'

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()]
});