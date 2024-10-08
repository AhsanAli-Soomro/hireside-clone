import React from 'react';
import TypewriterText from './Typewriter';
import Search from './Search';

const styles = {
    heroContainer: {
        textAlign: 'center',
        padding: '100px 55px',
    },
    headingContainer: {
        display: 'flex',
        fontSize: '76px',
        justifyContent: 'start',
        gap: '21px',
        alignItems: 'center',
    },
    heading: {
        color: '#535353',
    },
    blueText: {
        color: '#0070c0',
    },
};

const Hero = () => {
    return (
        <div style={styles.heroContainer}>
            <div style={styles.headingContainer}>
                <p style={styles.heading}>
                    Find the job you
                </p>
                <span style={styles.blueText}>
                    <TypewriterText />
                </span>
            </div>
            <Search />
        </div>
    );
};

export default Hero;
