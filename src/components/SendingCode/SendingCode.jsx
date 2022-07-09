import React from 'react'
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import '../Registration/Registration.scss'

const SendingCode = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className='registration-box'>

            <div className='registration-form'>

                <h1>Мы отправили одноразовый код на ваш <span className='colored-email'>email</span></h1>
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
                        label="Введите код"
                        name="code"
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

                    <div className='sign-inn'><a href="#">Отправить еще раз</a></div>



                    <Form.Item
                        wrapperCol={{
                            offset: 5.5,
                            span: 5.5,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            <Link to="/registration" className='links-routes'>
                                Зарегистрироваться
                            </Link>
                        </Button>
                    </Form.Item>
                </Form>
            </div>

        </div>

    );
};

export default SendingCode;