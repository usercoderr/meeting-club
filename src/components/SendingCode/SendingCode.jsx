import React from 'react'
import { Button, Form, Input } from 'antd';
import './SendingCode.scss'


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
                                message: 'Please input your password!',
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
                            Зарегистрироваться
                        </Button>
                    </Form.Item>
                </Form>
            </div>

        </div>

    );
};

export default SendingCode;