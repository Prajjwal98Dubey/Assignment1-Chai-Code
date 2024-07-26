import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Otp from "./pages/Otp"
import Courses from "./pages/Courses"
import Batches from "./pages/Batches"

function App() {
  return (
    <>
     <RouterProvider router={appRouter}/>
    </>
  )
}

export default App


const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Otp/>,
  },
  {
    path:'/otp-form',
    element:<Otp/>
  },
  {
    path:'/course-list',
    element:<Courses/>
  },
  {
    path:'/batches',
    element:<Batches/>
  }
])