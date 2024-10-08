"use client"
import { useParams } from 'next/navigation';
import { Button, Col, Row, Typography } from 'antd';
import Image from 'next/image';

import CompSearch from '@/components/CompSearch';
import { FacebookOutlined, HeartOutlined, LinkedinOutlined, StarFilled, TwitterOutlined } from '@ant-design/icons';
import CompanyDesc from '@/components/CompanyDesc';
import SignUpBtn from '@/components/SignupBtn';
import SignIpBtn from '@/components/SignInBtn';
import RatingStars from '@/components/RatingStarts/RatingStars';

const styles = {
    header: {
        backgroundColor: 'white'
    },
    container: {
        padding: '20px',
        backgroundColor: '#f5f5f5',
        paddingLeft: '10%',
        paddingRight: '10%',
    },
    socialDetails: {
        padding: '20px',
        backgroundColor: 'white',
        marginTop: '20px',
        borderRadius: '5px',
    },
    imageWrapper: {
        width: '100%',
        height: '150px',
        position: 'relative',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        marginBottom: '20px',

    },
    image: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        height: '100%',
        objectFit: 'cover',
    },
    logoWrapper: {
        position: 'absolute',
        bottom: '-50px',
        left: '11%',
        transform: 'translateX(-50%)',
        width: '100px',
        height: '100px',
        border: '3px solid white',
        overflow: 'hidden',
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    },
};

const { Title, Text } = Typography;

const companies = [
    { id: '1', name: 'Bazaar Technologies', jobs: 0, rating: 2, image: '/comp1.jpeg', logo: '/logo.jpg' },
    { id: '2', name: 'TPS Worldwide', jobs: 22, rating: 4, image: '/comp2.jpeg', logo: '/logo.jpg' },
    { id: '3', name: 'Wateen Telecom Limited', jobs: 13, rating: 5, image: '/comp3.jpeg', logo: '/logo.jpg' },
    { id: '4', name: 'CreditBook', jobs: 5, rating: 3, image: '/comp4.jpeg', logo: '/logo.jpg' },
    { id: '5', name: 'Bazaar Technologies', jobs: 0, rating: 2, image: '/comp1.jpeg', logo: '/logo.jpg' },
    { id: '6', name: 'TPS Worldwide', jobs: 22, rating: 4, image: '/comp2.jpeg', logo: '/logo.jpg' },
    { id: '7', name: 'Wateen Telecom Limited', jobs: 13, rating: 5, image: '/comp3.jpeg', logo: '/logo.jpg' },
    { id: '8', name: 'CreditBook', jobs: 5, rating: 3, image: '/comp4.jpeg', logo: '/logo.jpg' },
    { id: '9', name: 'Bazaar Technologies', jobs: 0, rating: 2, image: '/comp1.jpeg', logo: '/logo.jpg' },
    { id: '10', name: 'TPS Worldwide', jobs: 22, rating: 4, image: '/comp2.jpeg', logo: '/logo.jpg' },
    { id: '11', name: 'Wateen Telecom Limited', jobs: 13, rating: 5, image: '/comp3.jpeg', logo: '/logo.jpg' },
    { id: '12', name: 'CreditBook', jobs: 5, rating: 3, image: '/comp4.jpeg', logo: '/logo.jpg' },
];

const CompanyDetails = () => {
    const params = useParams();
    const companyId = params.id;

    const company = companies.find((comp) => comp.id === companyId);

    if (!company) {
        return <div>Company not found</div>;
    }

    return (    
        <div style={{paddingTop:'70px'}}>
            <CompSearch />
            <div style={styles.container}>
                <div style={styles.header}>
                    <div style={styles.imageWrapper}>
                        <Image
                            src={company.image}
                            alt={company.name}
                            fill
                            objectFit="cover"
                            style={styles.image}
                        />0
                        <div style={styles.logoWrapper}>
                            <Image src={company.logo} width={100} height={100} alt={company.name} />
                        </div>
                    </div>
                    <div style={{ paddingLeft: "200px" }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Title style={{ margin: 0 }} level={3}>{company.name}</Title>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    width="15"
                                    height="15"
                                    fill='#1964ae'
                                    style={{ marginLeft: '8px' }}>
                                    <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8l0 378.1C394 378 431.1 230.1 432 141.4L256 66.8s0 0 0 0z" />
                                </svg>
                            </div>
                            <div style={{ marginRight: '40px', }}>
                                <RatingStars/>
                            </div>
                        </div>
                    </div>

                    <div style={{
                        marginTop: '65px',
                        paddingLeft: '40px',
                        paddingRight: '40px',
                        paddingBottom: '20px',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Button style={{ backgroundColor: "#f4f9ff", border: 'none', color: '#1964ae' }}>
                            22 Open Jobs
                        </Button>
                        <Image src='/pk.png' width={30} height={30} style={{ marginLeft: '30px' }} />
                        <Button style={{ backgroundColor: "#f4f9ff", border: 'none', color: '#1964ae', marginLeft: '5px' }}>
                            Karachi
                        </Button>
                    </div>
                    <div style={{
                        paddingLeft: '40px',
                        paddingRight: '40px',
                        paddingBottom: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <div>
                            <Button style={{ backgroundColor: "#eff2f3", border: 'none', color: '#1964ae' }}>
                                Websites
                            </Button>
                            <Button style={{ backgroundColor: "#eff2f3", border: 'none', color: '#1964ae', marginLeft: '5px' }}>
                                600 Employees
                            </Button>
                            <Button style={{ backgroundColor: "#eff2f3", border: 'none', color: '#1964ae', marginLeft: '5px' }}>
                                Financial Services
                            </Button>
                        </div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                        }}>
                            <SignIpBtn title={ <HeartOutlined style={{ fontSize: '25px', color: '#b3b3b3',cursor:'pointer' }} />}/>
                            <SignUpBtn title="+  Add a Review"/>
                        </div>
                    </div>

                </div>
                <Row gutter={2}>
                    <Col span={18}>
                        <CompanyDesc />
                    </Col>
                    <Col span={6}>
                        <div style={styles.socialDetails}>
                            <Row style={{ marginBottom: "20px" }}>
                                Social Links
                            </Row>
                            <Row gutter={20}>
                                <Col>
                                    <FacebookOutlined style={{ fontSize: '28px', color: '#3b5998' }} />
                                </Col>
                                <Col>
                                    <LinkedinOutlined style={{ fontSize: '28px', color: '#3f73eb' }} />
                                </Col>
                                <Col>
                                    <TwitterOutlined style={{ fontSize: '28px', color: '#00acee' }} />
                                </Col>
                            </Row>
                        </div>

                    </Col>
                </Row>
            </div>
        </div>
    );


};

export default CompanyDetails;
