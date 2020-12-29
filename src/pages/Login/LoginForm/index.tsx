import React from 'react';
import { InboxOutlined, LockOutlined } from '@ant-design/icons';
import { Button, Form, Input, Spin } from 'antd';
import { CombinedError } from '@urql/core';

import AlertError from 'ui/Alert/AlertError';

type onLoginType = (email: string, password: string) => void;
interface LoginFormProperties {
  doLogin: onLoginType;
  fetching: boolean;
  error?: CombinedError;
  onForgotPassword: () => void;
  onSingUp: () => void;
}

const LoginForm: React.FC<LoginFormProperties> = (
  { doLogin, fetching, error, onForgotPassword, onSingUp },
) => {
  const onSubmit = ({ email, password }: {
    email: string;
    password: string;
  }) => {
    doLogin(email, password);
  };

  const initialValues = { email: 'admin@albertcito.com', password: 'Hola12345' };

  return (
    <Spin spinning={fetching}>
      <div className='modal session-form'>
        <h2 className='modal-title'>
          Login
        </h2>
        {error && <AlertError error={error} />}
        <Form onFinish={onSubmit} initialValues={initialValues}>
          <Form.Item
            name='email'
            rules={[
              {
                required: true,
                message: 'Please input your email',
              },
              {
                type: 'email',
                message: 'The input is not valid E-mail',
              },
            ]}
            hasFeedback
          >
            <Input
              autoComplete='email'
              placeholder='Email'
              size='large'
              type='email'
              prefix={<InboxOutlined />}
            />
          </Form.Item>

          <Form.Item
            name='password'
            rules={[{
              required: true,
              message: 'Please input your password',
            }]}
            hasFeedback
          >
            <Input.Password
              autoComplete='password'
              size='large'
              placeholder='Password'
              prefix={<LockOutlined />}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              className='session-form-button'
            >
              Submit
            </Button>
            <Button type='link' className='login-form-forgot' onClick={onForgotPassword}>
              Forgot Password
            </Button>
          </Form.Item>
        </Form>
        <p className='session-form-already'>
          Don&#39;t have an account?
          {' '}
          <Button type='link' className='link-button' onClick={onSingUp}>
            <b>Singup</b>
          </Button>
        </p>
      </div>
    </Spin>
  );
};

export default LoginForm;
