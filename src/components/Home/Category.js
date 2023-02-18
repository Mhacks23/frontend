import React from "react";
import styles from "../../styles/Category.module.css";
import Link from "next/link";

const Category = () => {
  return (
    <div className={styles.category}>
      <p>Browse Categories</p>
      <div className={styles.subcat}>
        <Link href="/transcript">
          <div className={`${styles.cat} ${styles.red}`}>Get Notes</div>
        </Link>
        <Link href="/transcript">
          <div className={`${styles.cat} ${styles.blue}`}>OCR</div>
        </Link>
        <Link href="/transcript">
          <div className={`${styles.cat} ${styles.purple}`}>Cat 3</div>
        </Link>
        <Link href="/transcript">
          <div className={`${styles.cat} ${styles.red}`}>Cat 4</div>
        </Link>
      </div>
    </div>
  );
};

export default Category;
