import Image from 'next/image';
import React from 'react';
import { GlobalOutlined } from '@ant-design/icons';
import Link from 'next/link';
import SignInModal from './SignInBtn';
import SignUpModal from './SignupBtn';

const styles = {
    navbar: {
        display: 'flex',
        position: 'fixed',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: '1px 9%', // Reduced from 10% to 5% to avoid overflow
        fontSize: '16px',
        boxShadow: '0 1px 0px rgba(0, 0, 0, 0.1)',
        flexWrap: 'wrap',
        zIndex: 2000,
        boxSizing: 'border-box', // Add this to prevent overflow due to padding
        overflow: 'hidden', // Ensure the content stays inside the viewport
    }, // To ensure the navbar stays on top
    logo: {
        height: '40px',
    },
    menu: {
        display: 'flex',
        marginLeft: '10px',
        flexGrow: 1,
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    menuItem: {
        color: 'black',
        marginRight: '20px',
        textDecoration: 'none',
        padding: '5px 0',
    },
    buttonContainer: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    button: {
        marginLeft: '10px',
        padding: '10px 20px',
        borderRadius: '8px',
        fontSize: '16px',
        border: '2px solid #1964ae',
        cursor: 'pointer',
        minWidth: '120px',
        outline: 'none',
    },
    globalButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
        padding: '8px 15px',
        borderRadius: '20px',
        color: 'black',
        marginRight: '20px',
        cursor: 'pointer',
    },
    button: {
        padding: '8px 15px',
        borderRadius: '8px',
        fontSize: '16px',
        border: '1px solid #1964ae',
        cursor: 'pointer',
        outline: 'none',
    },
    employerText: {
        color: 'black',
        marginRight: '20px',
    },
    '@media (max-width: 768px)': {
        navbar: {
            flexDirection: 'column',
            paddingLeft: '20px',
            paddingRight: '20px',
        },
        menu: {
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginLeft: '0px',
        },
        menuItem: {
            marginRight: '0px',
            padding: '10px 0',
        },
        buttonContainer: {
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginTop: '10px',
        },
        button: {
            width: '100%',
            marginLeft: '0px',
            marginBottom: '10px',
        },
        globalButton: {
            marginBottom: '10px',
        },
    }
};

const Navbar = () => {
    return (
        <div style={styles.navbar}>
            <div className="logo">
                <Link href="/">
                    <Image src="/Logos/Logo.svg" alt="Logo" style={styles.logo} width={200} height={20} />
                </Link>
            </div>
            <div style={styles.menu}>
                <Link href="/Jobs" style={styles.menuItem}>Jobs</Link>
                <Link href="/Companies" style={styles.menuItem}>Companies</Link>
            </div>
            <div style={styles.buttonContainer}>
                <div style={styles.globalButton}>
                    <GlobalOutlined /> <span style={{ marginLeft: '5px' }}>Global</span>
                </div>
                <div style={styles.employerText}>
                    Employer / Post a Job
                </div>
                <SignInModal title={<p style={styles.button}>Sign In</p>} />
                <SignUpModal title="Sign Up" />
            </div>
        </div>
    );
};

export default Navbar;
