import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { RecoilRoot } from 'recoil'
import RecoilNexus from 'recoil-nexus'
import LoadingOverlay from './components/layouts/loadingOverlay'
import './index.css'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <RecoilRoot>
    <RecoilNexus />
    <LoadingOverlay />
    <App />
  </RecoilRoot>
)
