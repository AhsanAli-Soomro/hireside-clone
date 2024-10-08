"use client";

import React from 'react';
import { Row, Col, Typography } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import CompSearch from './CompSearch';

const styles = {
    card: {
        padding: '10px',
        margin: '10px',
        borderRadius: '15px',
        overflow: 'hidden',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        cursor: 'pointer',
        border: '1px solid #f0f0f0',
    },
    cardImageWrapper: {
        width: '100%',
        height: '90px',
        position: 'relative',
        borderRadius: '15px',
        overflow: 'hidden',
    },
    cardImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    cardContent: {
        textAlign: 'center',
        padding: '5px',
    },
    rating: {
        padding: '5px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardFooter: {
        padding: '5px',
        borderTop: '1px solid #f0f0f0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
};
const { Title, Text } = Typography;

const companies = [
    { id: '1', name: 'Bazaar Technologies', jobs: 0, rating: 2, image: '/comp1.jpeg', logo: '/logo.jpg' },
    { id: '2', name: 'TPS Worldwide', jobs: 22, rating: 4, image: '/comp2.jpeg', logo: '/logo.jpg' },
    { id: '3', name: 'Wateen Telecom Limited', jobs: 13, rating: 5, image: '/comp3.jpeg', logo: '/logo.jpg' },
    { id: '4', name: 'CreditBook', jobs: 5, rating: 3, image: '/comp4.jpeg', logo: '/logo.jpg' },
    { id: '5', name: 'Bazaar Technologies', jobs: 0, rating: 2, image: '/comp3.jpeg', logo: '/logo.jpg' },
    { id: '6', name: 'TPS Worldwide', jobs: 22, rating: 4, image: '/comp4.jpeg', logo: '/logo.jpg' },
    { id: '7', name: 'Wateen Telecom Limited', jobs: 13, rating: 5, image: '/comp1.jpeg', logo: '/logo.jpg' },
    { id: '8', name: 'CreditBook', jobs: 5, rating: 3, image: '/comp2.jpeg', logo: '/logo.jpg' },
    { id: '9', name: 'Bazaar Technologies', jobs: 0, rating: 2, image: '/comp1.jpeg', logo: '/logo.jpg' },
    { id: '10', name: 'TPS Worldwide', jobs: 22, rating: 4, image: '/comp2.jpeg', logo: '/logo.jpg' },
    { id: '11', name: 'Wateen Telecom Limited', jobs: 13, rating: 5, image: '/comp3.jpeg', logo: '/logo.jpg' },
    { id: '12', name: 'CreditBook', jobs: 5, rating: 3, image: '/comp4.jpeg', logo: '/logo.jpg' },
];

const CompaniesLists = () => {
    const renderRatingStars = (rating) => {
        const totalStars = 5;
        return (
            <>
                {[...Array(totalStars)].map((_, index) => (
                    <span key={index} style={{ color: index < rating ? '#fadb14' : '#d9d9d9' }}>★</span>
                ))}
            </>
        );
    };

    return (
        <div style={{paddingTop:'70px'}}>
            <CompSearch/>
            <Row justify="center" style={{ backgroundColor: '#f5f5f5', paddingLeft: '10%', paddingRight: '10%' }}>
                {companies.map((company) => (
                    <Col xs={24} sm={12} md={6} key={company.id}>
                        <Link href={`/Companies/${company.id}`}>
                            <div style={styles.card}>
                                <div style={styles.cardImageWrapper}>
                                    <Image
                                        src={company.image}
                                        alt={company.name}
                                        layout="fill"
                                        objectFit="cover"
                                        style={styles.cardImage}
                                    />
                                </div>
                                <div style={styles.cardContent}>
                                    <div style={{ paddingTop: '10px' }}>
                                        <Image src={company.logo} width={40} height={40} alt="logo" />
                                    </div>
                                    <Title level={5}>{company.name}</Title>
                                    <div style={styles.rating}>
                                        <Text>Rating</Text>
                                        <div>{renderRatingStars(company.rating)}</div>
                                    </div>
                                </div>
                                <div style={styles.cardFooter}>
                                    <Text strong>Jobs</Text>
                                    <Text>{company.jobs}</Text>
                                </div>
                            </div>
                        </Link>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default CompaniesLists;
