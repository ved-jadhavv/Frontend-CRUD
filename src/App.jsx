import './App.css'
import Home from './Home'
import Navbar from './Navbar'
import AddUser from './users/AddUser'
import { createBrowserRouter,RouterProvider} from "react-router";

function App() {
  
   const Router =createBrowserRouter([
    {path:"/", element:<> <Navbar/> <Home/> </>},
    {path:"/addUser", element:<> <Navbar/> <AddUser/> </>},
   ]) 

  return (
    <>

       <RouterProvider router={Router}/>
   
    </>
  )
}

export default App
