import React from 'react';
import {Button, Form, message, Input} from 'antd';
import styles from './login.module.scss';
import {useNavigate} from "react-router-dom";
import {loginApi} from "@/api/user";

const Login: React.FC = () => {
    const router = useNavigate();
    const [name, setName] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const onFinish = (values: any) => {
        console.log('Success:', values);

        loginApi({name, password}).then(res => {
            if (res.code === 200) {
                message.success('登陆成功');
                localStorage.setItem('token', res.data.token)
                router('/')
            }
        })

    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
        message.error('请填写完整信息');
    };

    type FieldType = {
        username?: string;
        password?: string;
    };

    const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }


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
                    <Input placeholder="请输入账号" onChange={changeName}/>
                </Form.Item>

                <Form.Item<FieldType>
                    label=""
                    name="password"
                    rules={[{required: true, message: 'Please input your password!'}]}
                >
                    <Input.Password placeholder="请输入密码" onChange={changePassword}/>
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