import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '@components/EmailBox.module.scss';

const EmailInput: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [key, setKey] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (submitted || !isValid) {
      timer = setTimeout(() => {
        if (submitted) {
          setEmail('');
          setIsSubmitted(false);
        }
        setIsValid(true);
        setSubmitted(false);
      }, 1000);  // Reduced to 1000ms (1 second)
    }
    return () => clearTimeout(timer);
  }, [submitted, isValid]);

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const handleSubmit = () => {
    const valid = validateEmail(email);
    setIsValid(valid);
    if (!valid) {
      setKey(prevKey => prevKey + 1);
    } else {
      setIsSubmitted(true);
      setSubmitted(true);
    }
    console.log('Email submitted:', email, 'Valid:', valid);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className={styles.emailBox}>
      <div className={styles.inputButtonWrapper}>
        <motion.div
          key={key}
          className={styles.inputWrapper}
          animate={isValid ? {} : {rotate: [0, -10, 0, 10, 0]}}
          transition={{ duration: 0.25 }}
        >
          <motion.input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleKeyDown}
            className={`${styles.input} ${!isValid ? styles.invalid : ""} ${isSubmitted ? styles.submitted : ""}`}
            placeholder="Enter your email"
            animate={{
              scale: email ? 1.038 : 1,
              color: email ? '#000' : '#999',
            }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>
        <div className={styles.submitButton} onClick={handleSubmit}>
          Join the Waitlist
        </div>
      </div>
    </div>
  );
};

export default EmailInput;
