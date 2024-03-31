import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Component/Home';
import CreateAccount from './Component/CreateAccount';
// import CreateAccount from './CreateAccount';


const router = createBrowserRouter([
  {
    path: "/",
    Component:Home,
  },
  {
    path: "/CreateAccount",
    Component:CreateAccount,
  },
])

function App() {
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
