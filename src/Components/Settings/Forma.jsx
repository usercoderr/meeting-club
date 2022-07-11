import { Form, Input } from 'antd';
import React from 'react';
import ButtonReg from '../Landing/ButtonReg';
import './Forma.css'

const Forma = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='forma'>
      <div className="inputs">
        <div className="left-forms">
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 30,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout='center'
          >
            <div className='label-set'>Сменить логин</div>
            <Form.Item

              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input className='input-class' />
            </Form.Item>

            <div className='label-set'>Сменить пароль</div>
            <Form.Item className='item-label'
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password className='input-class' />
            </Form.Item>
            <div className='label-set'>E-mail</div>
            <Form.Item

              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your Email!',
                },
              ]}
            >
              <Input className='input-class' />
            </Form.Item>





          </Form>
        </div>
        <div className="right-forms">
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 30,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout='center'
          >
            <div className='label-set'>Вставить ссылку</div>
            <Form.Item

              name="username"

            >
              <Input className='input-class' />
            </Form.Item>

            <div className='label-set'>Вставить ссылку</div>
            <Form.Item

              name="links"

            >
              <Input className='input-class' />
            </Form.Item>
            <div className='label-set'>Вставить ссылку</div>
            <Form.Item

              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input className='input-class' />
            </Form.Item>




          </Form>
        </div>
      </div>
      <div className="confirm">
        <ButtonReg
          text='Сохранить изменения' />
      </div>
    </div>
  );
};

export default Forma;