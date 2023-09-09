import React, {useState} from 'react';
import {
    PieChartOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Menu} from 'antd';
import {useNavigate, useLocation} from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('首页', '/home', <PieChartOutlined/>),
    getItem('系统管理', '/system', <UserOutlined/>, [
        getItem('用户管理', '/user'),
        getItem('角色管理', '/role'),
    ]),
];

const MainMenu: React.FC = () => {
    const router = useNavigate();
    const route = useLocation();


    let firstOpenKeys: string = ''
    for (let i = 0; i < items.length; i++) {
        // @ts-ignore
        if (items[i].children) {
            // @ts-ignore
            for (let j = 0; j < items[i].children.length; j++) {
                // @ts-ignore
                if (items[i].children[j].key === route.pathname) {
                    // @ts-ignore
                    firstOpenKeys = items[i].key as string
                }
            }
        }
    }
    const [openKeys, setOpenKeys] = useState([firstOpenKeys])

    const clickMenu = (e: any) => {
        router(e.key)
    }
    const handleOpenChange = (keys: string[]) => {
        setOpenKeys([keys[keys.length - 1]]);
        console.log(keys)
        console.log(openKeys)
    }
    return (
        <Menu theme="dark" defaultSelectedKeys={[route.pathname]} mode="inline" items={items} onClick={clickMenu}
              openKeys={openKeys} onOpenChange={handleOpenChange}/>
    );
};

export default MainMenu;