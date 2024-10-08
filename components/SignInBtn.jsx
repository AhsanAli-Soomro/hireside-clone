"use client"
import React, { useState } from 'react';
import { Modal, Button, Form, Input, Row, Col, Divider } from 'antd';
import Image from 'next/image';
import SignIpM from './SignInM';


const SignIpBtn = ({ title }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    // const onFinish = (values) => {
    //     console.log('Received values:', values);
    //     setIsModalVisible(false);
    // };

    return (
        <>
            <div style={{border:'none', backgroundColor: 'transparent', color: '#1964ae', }} onClick={showModal}>
                {title}
            </div>

            <Modal
                title={null}
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
                afterClose={handleCancel}
            >
                <SignIpM />
                {/* <div style={{ padding: '40px' }}>
                    <div style={styles.title}>Reconnect and Explore</div>
                    <div style={styles.subtitle}>Log In Now!</div>

                    <Form
                        name="sign_in"
                        onFinish={onFinish}
                        layout="vertical"
                    >
                        <Form.Item
                            name="email"
                            label="Email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input
                                placeholder="Email"
                                variant='filled'
                                style={styles.inputStyle}
                            />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            label="Password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password
                                placeholder="Password"
                                style={styles.inputStyle}
                                variant="filled"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button style={{ backgroundColor: '#1964ae', color: 'white', fontSize: '18px', padding: '12px 0' }} htmlType="submit" block>
                                Log In
                            </Button>
                        </Form.Item>

                        <Row style={styles.modalFooter}>
                            <Col>
                                <a href="/signup">Don't have an account yet?</a>
                            </Col>
                            <Col>
                                <a href="/forgot-password">Forgot Password?</a>
                            </Col>
                        </Row>
                    </Form>

                    <Divider style={{ border: 'black' }}>OR</Divider>

                    <Button style={styles.googleButton} block>
                        <Image src="/google.png" width={20} height={20} style={{ marginRight: '8px' }} /> Continue with Google
                    </Button>
                </div> */}
            </Modal>
        </>
    );
};

export default SignIpBtn;
