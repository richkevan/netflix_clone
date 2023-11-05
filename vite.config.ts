import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'

const appRoot  = resolve(__dirname, 'src')
const fallback = resolve(appRoot, '404.html')
const login = resolve(appRoot, 'login/index.html')
const signup = resolve(appRoot, 'signup/index.html')

// https://vitejs.dev/config/
export default defineConfig({
  root: appRoot,
  publicDir: resolve(__dirname, 'public'),
  plugins: [react(), svgr()],
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(appRoot, 'index.html'),
        "404": fallback,
        login,
        signup,
      }
    }
  }
})
