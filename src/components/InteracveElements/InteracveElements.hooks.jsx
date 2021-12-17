import { useState } from 'react';
import { checkIsScrollable } from '../../utils';

export const useHandleScroll = (onScrollDown) => {
  const [touchStartPosition, setTouchStartPosition] = useState(null);
  const [swipeDown, setSwipeDown] = useState(true);
  const isScrollable = checkIsScrollable();

  const handleTouchStart = ({ targetTouches }) => setTouchStartPosition(targetTouches[0].clientY);

  const handleTouchEnd = ({ changedTouches }) => {
    const touchEndPosition = changedTouches[0].clientY;

    setSwipeDown(
      touchStartPosition < touchEndPosition
    );
  }

  return [handleTouchStart, handleTouchEnd, isScrollable ? onScrollDown : swipeDown];
}