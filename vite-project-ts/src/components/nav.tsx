/*
 * @Date: 2023-09-07 16:38:45
 * @LastEditTime: 2023-09-08 10:19:46
 */
import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

const items: MenuProps['items'] = [
    {
        label: '首页',
        key: 'mail',
    },
    {
        label: '下载',
        key: 'Nav',
        // icon: <NavstoreOutlined />,
    },
    {
        label: '会员中心',
        key: 'SubMenu',
        children: [
            {
                label: 'Option 1',
                key: 'setting:1',
            },
            {
                label: 'Option 2',
                key: 'setting:2',
            },
        ],
    },
];

const Nav: React.FC = () => {
    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default Nav;