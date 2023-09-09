import React from 'react';
import {Button, Form, message, Input} from 'antd';
import styles from './login.module.scss';
import {useNavigate} from "react-router-dom";

const Login: React.FC = () => {
    const router = useNavigate();
    const onFinish = (values: any) => {
        console.log('Success:', values);
        message.success('登陆成功');
        router('/')
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
        message.error('请填写完整信息');
    };

    type FieldType = {
        username?: string;
        password?: string;
    };


    return (
        <div className={styles.box}>
            <h1>欢迎登录</h1>
            <Form
                name="basic"
                className={styles.formBox}
                style={{width: '500px'}}
                initialValues={{remember: true}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >

                <Form.Item<FieldType>
                    label=""
                    name="username"
                    rules={[{required: true, message: 'Please input your username!'}]}
                >
                    <Input placeholder="请输入账号"/>
                </Form.Item>

                <Form.Item<FieldType>
                    label=""
                    name="password"
                    rules={[{required: true, message: 'Please input your password!'}]}
                >
                    <Input.Password placeholder="请输入密码"/>
                </Form.Item>
                <Form.Item>
                    <Button style={{width: '100%'}} type="primary" htmlType="submit">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
export default Login;