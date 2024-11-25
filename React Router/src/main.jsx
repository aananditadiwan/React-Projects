import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Layout from './Layout'
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Contact from './components/Contect/Contact'
import Github,{githubInfoLoader} from './components/Github/github'

// const route = createBrowserRouter(
//   [
//     {
//       path:'/',
//       element: <Layout />,
//       children: [
//         {
//           path : "",
//           element : <Home/>
//         },
//         {
//           path : "about",
//           element : <About/>
//         },
//         {
//           path : "contact",
//           element : <Contact/>
//         }
//       ]
//     }
//   ]
// )

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='contact' element={<Contact/>}></Route>
      <Route loader={githubInfoLoader}
      path='github' element={<Github/>}></Route>

    </Route>
  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)
