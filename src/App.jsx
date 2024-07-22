import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Otp from "./pages/Otp"

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
    element:<Otp/>
  },
  {
    path:'/otp-form',
    element:<Otp/>
  }
])