/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { MAIN, PRIVACY_PAGE } from './routes';

const router = createBrowserRouter([MAIN, PRIVACY_PAGE]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);
