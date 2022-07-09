import React from 'react'
import { Button, Form, Input } from 'antd';
import logo from '../../image/blacklogo.png'
import {Link} from 'react-router-dom'
import '../Registration/Registration.scss'


const SignIn = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className='registration-container'>
                <div>
                <Link to="/posts"><img src={logo} alt=""/></Link>
                </div>
             <div className='registration-box'>
            <div className='registration-words'>
                <div className='club-words'>
                    <div className='club-grey'>CLUB</div>
                    <div className='club-orange'>CLUB</div>
                    <div className='club-grey'>CLUB</div>
                </div>
                <div className='meeting-words'>
                    <div className='meeting-grey'>MEETING</div>
                    <div className='meeting-orange'>MEETING</div>
                    <div className='meeting-grey'>MEETING</div>
                </div>



            </div>

            <div className='registration-form'>

                <h1>Мы рады видеть вас снова!</h1>
                <Form
                    name="basic"
                    labelCol={{
                        span: 9,
                    }}
                    wrapperCol={{
                        span: 26,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    class="ant-form ant-form-vertical"
                    layout="center"

                >

                    <Form.Item layout="center"
                        label="E-Mail"
                        name="email"
                        rules={[
                            {
                                type: 'email',
                                required: true,
                                message: 'Пожалуйста, введите вашу почту!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    {/* поле почты */}

                    <Form.Item layout="center"
                        label="Пароль"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Пожалуйста, введите ваш пароль!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    {/* поле пароли */}


                    <Form.Item
                        wrapperCol={{
                            offset: 5.5,
                            span: 5.5,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Войти
                        </Button>
                    </Form.Item>
                </Form>
                <div className='sign-inn'>
                    <Link to="/registration" className='links-routes'>
                        Зарегистрироваться
                    </Link>
                </div>
            </div>

        </div>
        </div>
    );
};

export default SignIn;