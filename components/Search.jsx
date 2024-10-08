import { SearchOutlined } from '@ant-design/icons'
import { Button, Col, Divider, Flex, Input, Row } from 'antd'
import React from 'react'

const styles = {
    searchBarContainer: {
        borderRadius: '5px',
        padding: '10px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    },
    input: {
        border: 'none',
        fontSize: '16px',
        padding: '12px',
    },
    searchButton: {
        border: 'none',
        backgroundColor: '#0070c0',
        borderRadius: '7px',
        padding: '25px',
    },
    icon: {
        border: 'none',
        width: '20px',
        height: '20px',
        fill: '#1964ae',
    },
    divider: {
        height: '40px',
        borderLeft: '1px solid #d9d9d9',
    },
}
const Search = () => {
    return (
        <Flex justify="center" align="middle" style={styles.searchBarContainer}>
            <Input
                placeholder="Job Title or Keywords"
                prefix={
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Layer_1"
                        data-name="Layer 1"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        style={styles.icon}
                    >
                        <path d="M11.349,24H0V3C0,1.346,1.346,0,3,0h12c1.654,0,3,1.346,3,3v5.059c-.329-.036-.662-.059-1-.059s-.671.022-1,.059V3c0-.552-.448-1-1-1H3c-.552,0-1,.448-1,1v19h7.518c.506.756,1.125,1.429,1.831,2Zm0-14h-7.349v2h5.518c.506-.756,1.125-1.429,1.831-2Zm-7.349,7h4c0-.688.084-1.356.231-2h-4.231v2Zm20,0c0,3.859-3.141,7-7,7s-7-3.141-7-7,3.141-7,7-7,7,3.141,7,7Zm-2,0c0-2.757-2.243-5-5-5s-5,2.243-5,5,2.243,5,5,5,5-2.243,5-5ZM14,5H4v2h10v-2Zm5.589,9.692l-3.228,3.175-1.63-1.58-1.393,1.436,1.845,1.788c.314.315.733.489,1.179.489s.865-.174,1.173-.482l3.456-3.399-1.402-1.426Z" />
                    </svg>
                }
                style={styles.input}
            />
            <Divider type="vertical" style={styles.divider} />
            <Input
                placeholder="Location"
                prefix={
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        style={styles.icon}
                    >
                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                    </svg>
                }
                style={styles.input}
            />
            <Button
                type="primary"
                icon={<SearchOutlined />}
                style={styles.searchButton}
            />
        </Flex>
    )
}

export default Search
