// plugins/squircle.js
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
    const config = useRuntimeConfig();
    const scriptPath = `/squircle.js`;

    if (typeof CSS !== 'undefined' && CSS.paintWorklet) {
      CSS.paintWorklet.addModule(scriptPath);
    } else {
      console.warn('CSS.paintWorklet is not supported in this browser.');
    }
  });
});
