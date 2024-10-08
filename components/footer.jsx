"use client"
import React from 'react';
import { Layout, Row, Typography, Space, Col } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';

const { Footer } = Layout;
const { Text, Title, Link } = Typography;

const CustomFooter = () => {
    return (
        <div style={{ backgroundColor: '#2d3136', margin: 0 }}>

            <Footer style={{ backgroundColor: '#495057', padding: '8.5%', color: '#fff' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <Row gutter={[32, 32]} justify="space-between">

                        <Col xs={24} md={10}>
                            <img src="/Logos/logo-white.svg" alt="HireSide Logo" style={{ width: '200px' }} />
                            <div>
                                <p style={{ color: '#CCCCCC', fontSize: '14px', lineHeight: '1.6', textAlign: 'justify' }}>
                                    HireSide is cloud based software developed by Verge.Inc. It is a revolutionary platform that seamlessly connects talented individuals with dynamic companies. HireSide is not just a job portal; it's a vibrant ecosystem where employers and candidates converge to unlock unprecedented opportunities in the ever-evolving professional landscape.
                                </p>
                            </div>
                            <div style={{ marginTop: '16px' }}>
                                <Space direction="vertical" size="small">
                                    <Text style={{ color: '#CCCCCC', fontSize: '12px' }}>
                                        <EnvironmentOutlined /> Address: 39111 Paseo Padre Parkway, Suite 202, Fremont, California, 94538, USA
                                    </Text>
                                    <Text style={{ color: '#CCCCCC', fontSize: '12px' }}>
                                        <PhoneOutlined /> Phone: +1-800-801-4801
                                    </Text>
                                    <Text style={{ color: '#CCCCCC', fontSize: '12px' }}>
                                        <MailOutlined /> Email: info@hireside.com
                                    </Text>
                                </Space>
                            </div>
                        </Col>

                        <Col xs={24} md={4}>
                            <Title level={5} style={{ color: '#fff' }}>General Links</Title>
                            <Space direction="vertical" size="middle">
                                <Link href="#" style={{ color: '#CCCCCC' }}>Jobs</Link>
                                <Link href="#" style={{ color: '#CCCCCC' }}>About</Link>
                                <Link href="#" style={{ color: '#CCCCCC' }}>Contact Us</Link>
                                <Link href="#" style={{ color: '#CCCCCC' }}>Privacy</Link>
                                <Link href="#" style={{ color: '#CCCCCC' }}>Terms & Conditions</Link>
                            </Space>
                        </Col>

                        <Col xs={24} md={4}>
                            <Title level={5} style={{ color: '#fff' }}>Resources</Title>
                            <Space direction="vertical" size="middle">
                                <Link href="#" style={{ color: '#CCCCCC' }}>
                                    <img src="/footericons/android.svg" alt="Android Icon" style={{ width: '16px', marginRight: '8px' }} /> Android App
                                </Link>
                                <Link href="#" style={{ color: '#CCCCCC' }}>
                                    <img src="/footericons/apple.svg" alt="Apple Icon" style={{ width: '16px', marginRight: '8px' }} /> iOS App
                                </Link>
                            </Space>
                        </Col>

                        <Col xs={24} md={4}>
                            <Title level={5} style={{ color: '#fff' }}>Social Links</Title>
                            <Space direction="vertical" size="middle">
                                <Link href="#" style={{ color: '#CCCCCC' }}>
                                    <img src="/footericons/X.svg" alt="Twitter Icon" style={{ width: '16px', marginRight: '8px' }} /> Twitter
                                </Link>
                                <Link href="#" style={{ color: '#CCCCCC' }}>
                                    <img src="/footericons/facebook.svg" alt="Facebook Icon" style={{ width: '16px', marginRight: '8px' }} /> Facebook
                                </Link>
                                <Link href="#" style={{ color: '#CCCCCC' }}>
                                    <img src="/footericons/linkedin.svg" alt="LinkedIn Icon" style={{ width: '16px', marginRight: '8px' }} /> LinkedIn
                                </Link>
                            </Space>
                        </Col>

                    </Row>
                </div>
            </Footer>

            <div style={{ textAlign: 'center', padding: '12px', borderTop: '1px solid #CCCCCC' }}>
                <Text style={{ color: '#CCCCCC' }}>Copyright &copy; 2024 - All Rights Reserved. A Product of Verge Inc.</Text>
            </div>

        </div>
    );
};

export default CustomFooter;
