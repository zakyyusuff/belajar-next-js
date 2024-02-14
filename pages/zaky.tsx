// zaky.tsx

import React from 'react';
import styles from './zaky.module.css'; // Import file CSS module

const Zaky: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Zaky Belajar Next.js</h1>
      <p className={styles.paragraph}>Selamat datang di Zaky Next.js!</p>
      <img src="/images/zaky.jpg" alt="Zaky" className={styles.image} />
    </div>
  );
};

export default Zaky;
