import "./LoginModal.scss";
import React from "react";
import {Modal, Form, Input, Button} from "antd";
import axios from "axios";

interface LoginModalProps {
  visible: boolean;
  closeModal(): void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  visible,
  closeModal,
}) => {
  const loginHandle = (userData: {email?: string; password?: string}) => {
    axios.post("/authApi/login", {
      email: userData.email,
      password: userData.password,
    });
  };

  return (
    <Modal
      className='loginModal__form'
      visible={visible}
      footer={null}
      onCancel={(e) => {
        e.stopPropagation();
        closeModal();
      }}
    >
      <Form
        initialValues={{remember: true}}
        onFinish={loginHandle}
        size='large'
      >
        <Form.Item
          label='Email'
          name='email'
          rules={[
            {
              type: "email",
              required: true,
              message: "Incorrect email",
            },
          ]}
          className='loginModal__input'
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Password'
          name='password'
          rules={[{required: true, message: "Please input your password"}]}
          className='loginModal__input'
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type='ghost' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
