"use client";
import React, { useState } from 'react';
import { Layout, Card, Button, Typography, Row, Col, Pagination } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Search from './Search';

const { Content } = Layout;
const { Title, Text } = Typography;

const jobs = [
    { title: 'Software Deployment Executive', company: 'DigiCop Solutions', location: 'Karachi Sindh', image: '/job1.jpg', logo: '/logo/logo1.svg' },
    { title: 'Senior Staff Accountant', company: 'Almoiz Industries', location: 'Karachi Sindh', image: '/job2.jpg', logo: '/logo/logo2.svg' },
    { title: 'IT Software Engineer', company: 'Cloud Solutions', location: 'Lahore Punjab', image: '/job3.jpg', logo: '/logo/logo3.svg' },
    { title: 'Software Deployment Executive', company: 'DigiCop Solutions', location: 'Karachi Sindh', image: '/job4.jpg', logo: '/logo/logo4.svg' },
    { title: 'Software Deployment Executive', company: 'DigiCop Solutions', location: 'Karachi Sindh', image: '/job1.jpg', logo: '/logo/logo1.svg' },
    { title: 'Senior Staff Accountant', company: 'Almoiz Industries', location: 'Karachi Sindh', image: '/job2.jpg', logo: '/logo/logo2.svg' },
    { title: 'IT Software Engineer', company: 'Cloud Solutions', location: 'Lahore Punjab', image: '/job3.jpg', logo: '/logo/logo3.svg' },
    { title: 'Software Deployment Executive', company: 'DigiCop Solutions', location: 'Karachi Sindh', image: '/job4.jpg', logo: '/logo/logo4.svg' },
    { title: 'Software Deployment Executive', company: 'DigiCop Solutions', location: 'Karachi Sindh', image: '/job1.jpg', logo: '/logo/logo1.svg' },
    { title: 'Senior Staff Accountant', company: 'Almoiz Industries', location: 'Karachi Sindh', image: '/job2.jpg', logo: '/logo/logo2.svg' },
    { title: 'IT Software Engineer', company: 'Cloud Solutions', location: 'Lahore Punjab', image: '/job3.jpg', logo: '/logo/logo3.svg' },
    { title: 'Software Deployment Executive', company: 'DigiCop Solutions', location: 'Karachi Sindh', image: '/job4.jpg', logo: '/logo/logo4.svg' },
];

const JobListing = () => {
    const [selectedJob, setSelectedJob] = useState(jobs[0]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;

    const currentJobs = jobs.slice((currentPage - 1) * pageSize, currentPage * pageSize);



    const styles = {
        main: {
            padding: '0 10%',
            backgroundColor: '#f5f5f5'
        },
        layout: {
            minHeight: '100vh',
        },
        content: {
            margin: '20px',
            padding: '20px',
            backgroundColor: '#fff',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            borderRadius: '10px',
        },
        imageWrapper: {
            position: 'relative',
            width: '100%',
            height: '150px',
            borderRadius: '10px',
            overflow: 'hidden',
        },

        companyLogo: {
            position: 'absolute',
            bottom: '110px',
            left: '35px',
            width: '50px',
            height: '50px',
            border: '2px solid white',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
            zIndex: '10',
            backgroundColor: '#fff'
        },

        scrollableContainer: {
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            overflowY: 'scroll',
            '&::-webkit-scrollbar': {
                display: 'none',
            },
            maxHeight: '120vh',
            padding: '10px',
            paddingTop: '20px'
        },
        card: {
            marginBottom: '20px',
            border: 'none',
        },

        jobDetails: {
            padding: '20px',
        },
        jobTitle: {
            fontSize: '28px',
            fontWeight: 'bold',
        },
        jobCompany: {
            fontSize: '20px',
            color: '#888',
        },
        applyButton: {
            marginTop: '20px',
            backgroundColor: '#1964ae',
            color: '#fff',
            padding: '10px 20px',
        },
        listItem: {
            cursor: 'pointer',
            backgroundColor: 'white',
            borderRadius: '10px',
            padding: "20px",
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        },
        paginationContainer: {
            textAlign: 'center',
            marginTop: '20px',
        },
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div style={{paddingTop:'70px'}}>
            <div style={{ padding: "30px 10%" }}>
                <Search />
                <Row>
                    <h1 style={{ color: 'gray', font: 'normal' }}>Recent Jobs</h1>
                </Row>
            </div>
            <div style={styles.main}>
                <Layout style={styles.layout}>
                    <Row gutter={16}>
                        <Col xs={24} md={8}>
                            <div style={styles.scrollableContainer}>
                                <Row gutter={[16, 16]}>
                                    {currentJobs.map((job, index) => (
                                        <Col xs={24} key={index}>
                                            <div
                                                hoverable
                                                style={styles.listItem}
                                                onClick={() => setSelectedJob(job)}
                                            >
                                                <Row align="middle">
                                                    <Col span={4}>
                                                        <Image
                                                            src={job.logo}
                                                            width={50}
                                                            height={50}
                                                            alt={`${job.company} Logo`}
                                                        />
                                                    </Col>
                                                    <Col span={20}>
                                                        <Text style={{ fontSize: '16px' }}>{job.title}</Text><br />
                                                        <Text style={{ fontSize: '12px' }}>{job.company}</Text><br />
                                                        <div
                                                            style={{ display: 'flex', alignItems: 'center' }}
                                                        >
                                                            <Image src="/flag.png" width={14} height={14} /><Text style={{ fontSize: '12px', marginLeft: '6px' }}>{job.location}</Text>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                            <div style={styles.paginationContainer}>
                                <Pagination
                                    current={currentPage}
                                    pageSize={pageSize}
                                    total={jobs.length}
                                    onChange={handlePageChange}
                                />
                            </div>
                        </Col>
                        <Col xs={24} md={16}>
                            <Content style={styles.content}>
                                <Card style={styles.card}>
                                    <div style={{ height: '150px' }}>
                                        <div style={styles.imageWrapper}>
                                            <Image
                                                src={selectedJob.image}
                                                layout="fill"
                                                objectFit="cover"
                                                alt={selectedJob.title}
                                            />
                                        </div>
                                        <Image
                                            src={selectedJob.logo}
                                            width={50}
                                            height={50}
                                            style={styles.companyLogo}
                                            alt={`${selectedJob.company} Logo`}
                                        />
                                    </div>
                                    <Row>
                                        <Col xs={24} md={16}>
                                            <Title level={2} style={styles.jobTitle}>
                                                {selectedJob.title}
                                            </Title>
                                            <Text style={styles.jobCompany}>{selectedJob.company}</Text>
                                        </Col>
                                        <Col xs={24} md={8} style={{ textAlign: 'right', marginTop: '10px' }}>
                                            <Button style={styles.applyButton}>Apply Now</Button>
                                        </Col>
                                    </Row>
                                </Card>
                                <div style={styles.jobDetails}>
                                    <Title level={3}>Job Description</Title>
                                    <Text>
                                        We are currently seeking a detail-oriented and dedicated individual to join our Implementation Team.
                                        <br /><br />
                                        <strong>Responsibilities:</strong>
                                        <ul>
                                            <li>Execute software and hardware deployment processes</li>
                                            <li>Manage the configuration of new and existing deployments</li>
                                            <li>Collaborate with technical support teams to address configuration issues</li>
                                        </ul>
                                        <br />
                                        <strong>Qualification:</strong>
                                        <ul>
                                            <li>Bachelor's in IT or related field</li>
                                            <li>Experience with deployment processes</li>
                                        </ul>
                                    </Text>
                                </div>
                            </Content>
                        </Col>
                    </Row>
                </Layout>
            </div>
        </div>
    );
};

export default JobListing;
