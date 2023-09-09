import React, {useState} from 'react';
import {Breadcrumb, Layout, theme} from 'antd';
import {Outlet} from "react-router-dom";
import MianMenu from "@/layout/MianMenu";


const {Header, Content, Footer, Sider} = Layout;

const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer},
    } = theme.useToken();

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical"/>
                <MianMenu/>
            </Sider>
            <Layout>
                <Header/>
                <Content style={{margin: '0 16px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}
                                items={[
                                    {
                                        title: '首页',
                                    },
                                ]}
                    />
                    <div style={{padding: 24, minHeight: '98%', background: colorBgContainer}}>
                        <Outlet/>
                    </div>
                </Content>
                <Footer style={{textAlign: 'center', height: '48px'}}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};

export default App;