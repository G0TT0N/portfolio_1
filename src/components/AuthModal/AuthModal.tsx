import "./AuthModal.scss";
import React, {useState} from "react";
import {Modal, Form, Input, Button} from "antd";
import {sendHttpReq} from "Utils/sendHttpReq";
import {useDispatch} from "react-redux";
import {saveCurrentUser} from "Redux/actions/appActions";
import {
  IHttpSuccessResponse,
  IRegisterData,
  ILoginData,
} from "Ts/interfaces/appInterfaces/http";

type AuthModalProps = {
  visible: boolean;
  closeModal(): void;
};

export const AuthModal: React.FC<AuthModalProps> = ({visible, closeModal}) => {
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState<string>("loginTab");

  const registerHandler = (registerData: IRegisterData): void => {
    sendHttpReq("post", "/userApi/createUser", {
      email: registerData.email,
      password: registerData.password,
      name: registerData.name,
      phone: "+7" + registerData.phone,
    }).then(() => {
      loginHandler({
        email: registerData.email,
        password: registerData.password,
      });
    });
  };

  const loginHandler = (loginData: ILoginData): void => {
    sendHttpReq("post", "/authApi/login", {
      email: loginData.email,
      password: loginData.password,
    }).then((res: IHttpSuccessResponse) => {
      localStorage.removeItem("token");

      dispatch(saveCurrentUser(res.data.userId));

      localStorage.setItem("token", res.data.token);

      closeModal();
    });
  };

  return (
    <Modal
      className='loginModal__form'
      visible={visible}
      footer={null}
      destroyOnClose={true}
      onCancel={(e) => {
        e.stopPropagation();
        closeModal();
        setTimeout(() => setActiveTab("loginTab"), 1000);
      }}
    >
      {activeTab === "loginTab" ? (
        <Form onFinish={loginHandler} size='large'>
          <Form.Item
            label='Email'
            name='email'
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail",
              },
              {
                required: true,
                message: "Please input your E-mail",
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
          <Form.Item className='loginModal__controls'>
            <Button type='ghost' htmlType='submit'>
              Sign In
            </Button>
            <span style={{marginLeft: "20px"}}>or</span>
            <span
              className='loginModal__controls_signUp'
              onClick={() => setActiveTab("registerTab")}
            >
              Sign Up
            </span>
          </Form.Item>
        </Form>
      ) : (
        <Form onFinish={registerHandler} size='large'>
          <Form.Item
            label='Name'
            name='name'
            rules={[
              {
                required: true,
                message: "Please input your name",
              },
            ]}
            className='loginModal__input'
          >
            <Input type='text' />
          </Form.Item>
          <Form.Item
            label='Email'
            name='email'
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail",
              },
              {
                required: true,
                message: "Please input your E-mail",
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
          <Form.Item
            name='confirm'
            label='Confirm Password'
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password",
              },
              ({getFieldValue}) => ({
                validator(rule, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    "The two passwords that you entered do not match",
                  );
                },
              }),
            ]}
            className='loginModal__input'
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name='phone'
            label='Phone Number'
            rules={[
              {
                required: true,
                message: "Incorrect phone number",
                max: 10,
                min: 10,
              },
            ]}
            className='loginModal__input'
          >
            <Input addonBefore={"+7"} type='number' />
          </Form.Item>
          <Form.Item className='loginModal__controls'>
            <Button type='ghost' htmlType='submit'>
              Register
            </Button>
            <span style={{marginLeft: "20px"}}>or</span>
            <span
              className='loginModal__controls_signUp'
              onClick={() => setActiveTab("loginTab")}
            >
              Sign In
            </span>
          </Form.Item>
        </Form>
      )}
    </Modal>
  );
};
