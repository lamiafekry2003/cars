
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import Landing from './Pages/Landing/Landing'
import Cars from './Components/Cars/Cars'
import CarsDetails from './Pages/CarsDetails/CarsDetails'


function App() {
  const routs= createBrowserRouter([
    {path:'',element:<Layout/>,children:[
      {path:'/',element:<Landing/>},
      { path: 'cars', element: <Cars /> },
      {path:'/carddetails/:id',element:<CarsDetails/>}
    ]}
  ])

  return (
    <>
      <RouterProvider router={routs}/>
      {/* <GetData/> */}
    </>
  )
}

export default App
