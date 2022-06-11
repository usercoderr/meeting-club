import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import ButtonReg from '../Landing/ButtonReg';

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
            span: 16,
        }}
        initialValues={{
            remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
      <Form.Item
        label="Username"
        name="username"
        rules={[
            {
                required: true,
                message: 'Please input your username!',
            },
        ]}
        >
        <Input />
      </Form.Item>
      

      <Form.Item
        label="Password"
        name="password"
        rules={[
            {
                required: true,
                message: 'Please input your password!',
            },
        ]}
        >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="Username"
        name="username"
        rules={[
            {
                required: true,
                message: 'Please input your username!',
            },
        ]}
        >
        <Input />
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
            span: 16,
        }}
        initialValues={{
            remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
      <Form.Item
        label="Username"
        name="username"
        rules={[
            {
                required: true,
                message: 'Please input your username!',
            },
        ]}
        >
        <Input />
      </Form.Item>
      

      <Form.Item
        label="Password"
        name="password"
        rules={[
            {
                required: true,
                message: 'Please input your password!',
            },
        ]}
        >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="Username"
        name="username"
        rules={[
            {
                required: true,
                message: 'Please input your username!',
            },
        ]}
        >
        <Input />
      </Form.Item>

      
      
        
            </Form>
          </div>
          </div>
          <div className="confirm">
            <ButtonReg
            text='Сохранить изменения'/>
          </div>
        </div>
  );
};

export default Forma;