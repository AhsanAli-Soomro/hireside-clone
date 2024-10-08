import { Col, Typography } from 'antd';
import React, { useState } from 'react';

const { Title, Text } = Typography;

const styles = {
    jobDetails: {
        padding: '20px',
        backgroundColor: 'white',
        marginTop: '20px',
        marginRight: '20px',
        borderRadius: '5px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        color: '#333',
    },
    stepperNav: {
        display: 'flex',
        borderRadius: '5px',
        marginBottom: '20px',
        borderBottom: '2px solid #f5f5f5',
    },
    stepperButton: (isActive) => ({
        cursor: 'pointer',
        padding: '10px 20px',
        fontWeight: 'bold',
        color: isActive ? '#0070c0' : '#000',
        border: 'none',
        background: 'none',
        outline: 'none',
        borderBottom: isActive ? '2px solid #0070c0' : 'none',
    }),
};

const CompanyDesc = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const steps = [
        {
            title: 'Overview',
            content: (
                <Text>
                    <h1>Tagline</h1>
                    We are currently seeking a detail-oriented and dedicated individual to join our Implementation Team.
                    <br /><br />
                    <strong>Responsibilities:</strong>
                    <ul style={{ paddingLeft: '20px', margin: '10px 0' }}>
                        <li>Execute software and hardware deployment processes</li>
                        <li>Manage the configuration of new and existing deployments</li>
                        <li>Collaborate with technical support teams to address configuration issues</li>
                    </ul>
                    <br />
                    <strong>Qualification:</strong>
                    <ul style={{ paddingLeft: '20px', margin: '10px 0' }}>
                        <li>Bachelor’s in IT or related field</li>
                        <li>Experience with deployment processes</li>
                    </ul>
                </Text>

            ),
        },
        {
            title: 'Reviews',
            content: <Text>Here are the company reviews.</Text>,
        },
        {
            title: 'Jobs',
            content: (
                <Text>
                    TPS is the payment partner of choice for banks who want to create value within their digital payment infrastructures.
                </Text>
            ),
        },
        {
            title: 'News',
            content: <Text>Latest company news and updates.</Text>,
        },
    ];

    return (
        <div>

            <div style={styles.jobDetails}>
                <div style={styles.stepperNav}> 
                    {steps.map((step, index) => (
                        <button
                            key={index}
                            style={styles.stepperButton(currentStep === index)}
                            onClick={() => setCurrentStep(index)}
                        >
                            {step.title}
                        </button>
                    ))}
                </div>
                {steps[currentStep].content}
            </div>

        </div>
    );
};

export default CompanyDesc;
