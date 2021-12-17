import { useState } from 'react';
import { checkIsMobileDevice } from '../../utils';

export const useHandleScroll = (onScrollDown) => {
  const [touchStartPosition, setTouchStartPosition] = useState(null);
  const [swipeDown, setSwipeDown] = useState(true);
  const isMobileDevice = checkIsMobileDevice();
  
  const handleTouchStart = ({ targetTouches }) => setTouchStartPosition(targetTouches[0].clientY);

  const handleTouchEnd = ({ changedTouches }) => {
    const touchEndPosition = changedTouches[0].clientY;

    setSwipeDown(
      touchStartPosition < touchEndPosition
    );
  }

  return [handleTouchStart, handleTouchEnd, isMobileDevice ? swipeDown : onScrollDown];
}