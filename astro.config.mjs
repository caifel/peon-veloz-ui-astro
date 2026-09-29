// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Dev server: bind to all interfaces so the Docker `dev-ui` container and
  // LAN devices can reach it. Port matches the ops UI_PORT mapping.
  server: {
    host: true,
    port: 4321,
  },
});
