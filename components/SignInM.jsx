import { Button, Col, Divider, Form, Input, Row } from 'antd';
import Image from 'next/image';
import React from 'react'
const styles = {
    button: {
        marginLeft: '10px',
        padding: '17px 15px',
        borderRadius: '8px',
        fontSize: '16px',
        border: '2px solid #1964ae',
        cursor: 'pointer',
        outline: 'none',
    },
    googleButton: {
        backgroundColor: 'white',
        color: '#000',
        border: '1px solid #d9d9d9',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '20px',
    },
    modalFooter: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    title: {
        textAlign: 'center',
        fontSize: '28px',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    subtitle: {
        textAlign: 'center',
        fontSize: '18px',
        color: '#0070c0',
        marginBottom: '30px',
    },
    inputStyle: {
        border: 'none',
        fontSize: '16px',
        padding: '12px',
    }
};
const SignIpM = () => {
    const onFinish = (values) => {
        console.log('Received values:', values);
        setIsModalVisible(false);
    };
    return (
        <div style={{ padding: '40px' }}>
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
        </div>
    )
}

export default SignIpM
