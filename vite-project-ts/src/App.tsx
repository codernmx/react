/*
 * @Date: 2023-09-07 14:26:25
 * @LastEditTime: 2023-09-08 10:22:22
 */

import './App.css'
// import Nav from './components/nav';

import {useRoutes} from "react-router-dom";
import router from "@/router";


function App() {
    const outlet = useRoutes(router)
    return (
        <>
            <div></div>
            {/*<Nav></Nav>*/}
            {/* <video
                    style={{ width: '100%' }}
                    loop
                    muted
                    autoPlay
                    playsInline
                  >
                    <source src="https://www.aliboxx.com/resources/video/home/way.mp4" type="video/mp4"></source>
                  </video> */}
            {outlet}
        </>
    )
}

export default App
