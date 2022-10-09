import React from 'react'
import { App } from '../components/App'
import { PrivacyPolicy } from '../components/PrivacyPolicy'

export const MAIN = {
  path: "/",
  element: <App />,
}

export const PRIVACY_PAGE = {
  path: "/privacy",
  element: <PrivacyPolicy />,
}

