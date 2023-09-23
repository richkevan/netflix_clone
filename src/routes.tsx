import ErrorPage from "./404"
import { createBrowserRouter } from "react-router-dom"
// eslint-disable-next-line
const ROUTES: {[key: string]: {default: any, loader: any}} = import.meta.glob('/src/pages/**/*.tsx', { eager: true })

// eslint-disable-next-line
const routes: {path: string, element: any, loader?: any, action?: any, ErrorBoundary?: any}[] = Object.keys(ROUTES).map((route: any) => {
  const path = route
    .replace(/\/src\/pages|index|\.tsx$/g, '')
    .replace(/\[\.{3}.+\]/, '*')
    .replace(/\[(.+)\]/, ':$1')
  return { path, element: ROUTES[route].default, ErrorBoundary: <ErrorPage />, loader: ROUTES[route].loader }
})

const fileRouter = createBrowserRouter(routes.map(({path, element: Element, loader}) => {
  return {path, element: <Element />, loader, errorElement: <ErrorPage />}
}))

console.log(routes, fileRouter)

export { fileRouter }