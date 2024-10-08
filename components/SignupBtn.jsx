"use client"
import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import SignUpM from './SignUpM';

const styles = {
    button: {
        padding: '8px 15px',
        marginLeft:'15px',
        borderRadius: '8px',
        fontSize: '16px',
        border: '1px solid #1964ae',
        cursor: 'pointer',
        outline: 'none',
    },
};

const SignUpBtn = ({title}) => {
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

    return (
        <>
            <div style={{ ...styles.button, backgroundColor: '#0070c0', color: 'white', }} onClick={showModal}>
                {title}
            </div>
            <Modal
                title={null}
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
                afterClose={handleCancel}
                style={styles.modelContainer}
            >
                <SignUpM/>
                {/* <div style={{ padding: '40px' }}>
                    <div style={styles.title}>Get Started Today</div>
                    <div style={styles.subtitle}>Sign Up in Seconds!</div>

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

                        <Form.Item>
                            <Button style={{ backgroundColor: '#1964ae', color: 'white', fontSize: '18px', padding: '12px 0' }} htmlType="submit" block>
                                Log In
                            </Button>
                        </Form.Item>
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

export default SignUpBtn;
