import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './routes/RootLayout';
import './index.css';
import ProjectDetails, {
  loader as projectDetailsLoader,
} from './routes/ProjectDetails';
import Projects from './routes/Projects';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: '/projects',
        element: <Projects></Projects>,
      },
      {
        path: '/projects/:id',
        element: <ProjectDetails></ProjectDetails>,
        loader: projectDetailsLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
