/*
 * @Date: 2023-09-07 16:24:02
 * @LastEditTime: 2023-09-08 09:52:27
 */
// import Home from '@/pages/home/home'
// import About from '@/pages/about/about'
import {Navigate} from "react-router-dom";
import React, {lazy} from "react";


// 懒加载写法
const Home = lazy(() => import('@/pages/home/home'))
const Login = lazy(() => import('@/pages/login/login'))
const User = lazy(() => import('@/pages/user/user'))
const Role = lazy(() => import('@/pages/user/role'))
const Layout = lazy(() => import('@/layout/Admin'))
const NotFound = lazy(() => import('@/pages/error/404'))

const LoadingComponent = (com: JSX.Element) => (
    <React.Suspense fallback={
        <div>loading...</div>
    }>
        {com}
    </React.Suspense>
)
const routes = [
    {
        path: '/',
        element: <Navigate to="/home"/>,
    },
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/home',
                element: LoadingComponent(<Home/>),
            },
            {
                path: '/role',
                element: LoadingComponent(<Role/>),

            },
            {
                path: '/user',
                element: LoadingComponent(<User/>),
            },

        ]
    },
    {
        path: '/login',
        element: <Login/>,
    },
    {
        path: '/404',
        element: <NotFound/>,
    },
    {
        path: '*',
        element: <Navigate to="/404"/>,
    },
]


export default routes