import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './18n.ts'
import "./services/firebase/config.ts"

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
)
