import { useState } from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './Pages/Home/Home';
function App() {
  const router=createBrowserRouter([
  {
    path: "/",
    Component: Home,
    // children: [
    //   { index: true, Component: Home },
    //   { path: "settings", Component: Settings },
    // ],
  },
]);

  return (
    <div>
  <RouterProvider router={router} />
    </div>
      
  )
}

export default App
