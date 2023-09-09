import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import 'reset-css' //重置样式

import '@/assets/styles/global.scss'
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
)
