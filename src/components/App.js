import React from 'react';
import { Gallery } from './Gallery';
import { HandleScrollHOC } from './HandleScrollHOC/HandleScrollHOC';

export const App = () => {
  return (
    <HandleScrollHOC>
      <Gallery />
    </HandleScrollHOC>
  )
}
