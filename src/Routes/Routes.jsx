import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData,
} 
 from 'react-router';


export  const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
]);

