import { useState } from 'react';
import { Rate } from 'antd';
import styles from './RatingStars.module.css'

const RatingStars = () => {
  const [value, setValue] = useState(0); 

  const handleChange = (value) => {
    setValue(value);
  };

  return (
    <div className={styles.ratingContainer}>
      <Rate 
        onChange={handleChange} 
        value={value} 
        className={styles.customRate} 
      />
      <span className={styles.valueText}>{value ? `${value} stars` : 'No rating'}</span>
    </div>
  );
};

export default RatingStars;
