import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcssForms from '@tailwindcss/forms';

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
  plugins: [react()],
})
=======
  plugins: [
    react(),
    tailwindcssForms(),
  ],
});
>>>>>>> 5146f0dfd5c9f0705c25b85f6b7cf5e713d11d31
