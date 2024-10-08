import { BankTwoTone, SearchOutlined } from '@ant-design/icons'
import { Button, Col, Input, Row } from 'antd'
import React from 'react'

const styles = {
    searchBarContainer: {
        borderRadius: '5px',
        maxWidth: '1300px',
        width: '100%',
        // margin: '20px 30px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        border: "none",
        height: '60px',
        width: '100%',
        paddingLeft: '10px',
    },
    inputContainer: {
        flex: 1,
        marginRight: '20px',
    },
    searchButton: {
        backgroundColor: '#0070c0',
        borderColor: '#0070c0',
        borderRadius: '7px',
        padding: '10px 20px',
    },
    icon: {
        width: '20px',
        height: '20px',
        fill: '#1964ae',
    },
}
const CompSearch = () => {
    return (
        <div>
            <Row justify="center" style={{padding:'25px 2%'}}>
                <Col xs={24} md={20}>
                    <div style={styles.searchBarContainer}>
                        <div style={styles.inputContainer}>
                            <Input
                                size="large"
                                placeholder="Search Companies "
                                prefix={<BankTwoTone twoToneColor="#0070c0" />}
                                style={styles.input}
                            />
                        </div>

                        <Button
                            type="primary"
                            size="large"
                            icon={<SearchOutlined />}
                            style={styles.searchButton}
                        >
                            Search
                        </Button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default CompSearch
