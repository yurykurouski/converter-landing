import React from 'react'
import { POLICY_1, POLICY_2 } from './PrivacyPolicy.consts'
import './PrivacyPolicy.styles.css'

export const PrivacyPolicy = () => {
  return (
    <div className='privacy_background'>
      <div className='policy_text'>Политика конфиденциальности:</div>
      <div className='policy_text'>{POLICY_1}</div>
      <div className='policy_text'>{POLICY_2}</div>
    </div>
  )
}