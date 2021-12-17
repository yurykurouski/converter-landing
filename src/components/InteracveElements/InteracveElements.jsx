import React from 'react';
import { useHandleScroll } from './InteracveElements.hooks';

import TelegramIcon from '../../assets/images/telegram-badge.png';
import './styles.css';

export const InteracveElements = React.memo(({ onScrollDown }) => {
  const [handleTouchStart, handleTouchEnd, isDownScroll] = useHandleScroll(onScrollDown)

  return (
    <div
      className="interactive-elements_wrap"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <section className={`elements-container ${ isDownScroll ? 'hidden' : 'visible' }`}>
        <a href="https://t.me/fancyconverter" target="_blank" rel="noreferrer">
          <img src={TelegramIcon} className='elements_icon' />
        </a>
      </section>
    </div>
  )
});
