import React, { useState } from 'react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { VIEWPORT_HEIGHT } from '../../constants';
import { InteracveElements } from '../InteracveElements';

export const HandleScrollHOC = ({ children }) => {
  const [onScrollDown, setOnScrollDown] = useState(true);

  useScrollPosition(({ prevPos, currPos }) => {
    const isShow = currPos.y > (prevPos.y);
    if (isShow !== onScrollDown) setOnScrollDown(isShow);
  }, [onScrollDown]);

  if (!onScrollDown) {
    window.scrollTo(0, VIEWPORT_HEIGHT);
  } else {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <InteracveElements onScrollDown={onScrollDown} />
      {children}
    </>
  );
}