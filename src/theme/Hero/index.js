import React from 'react';

import styles from './hero.module.scss';

import Svg from './svg';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTagline}>Набор инструментов для автоматизации, &amp; улучшающий ваш рабочий процесс</h1>
        <p className={styles.heroDescription}>
          Используйте gulp и гибкость JavaScript, чтобы автоматизировать медленные, повторяющиеся рабочие процессы и объединить их в эффективные конвейеры сборки.
        </p>
      </div>
      <div className={styles.heroVisual}>
        <ul className={styles.techList}>
          <li className={styles.techItem}>
            <span className={styles.techName}>TypeScript</span>
            <span>Разрабатывайте на любом языке</span>
          </li>
          <li className={styles.techItem}>
            <span className={styles.techName}>PNG</span>
            <span>Создавайте ресурсы с помощью любого инструмента</span>
          </li>
          <li className={styles.techItem}>
            <span className={styles.techName}>Markdown</span>
            <span>Пишите в любом формате</span>
          </li>
        </ul>
        <Svg />
        <ul className={styles.techList}>
          <li className={styles.techItem}>
            <span className={styles.techName}>JavaScript</span>
            <span>Получите скомпилированный код</span>
          </li>
          <li className={styles.techItem}>
            <span className={styles.techName}>WebP</span>
            <span>Получите оптимизированные изображения</span>
          </li>
          <li className={styles.techItem}>
            <span className={styles.techName}>HTML</span>
            <span>Получите визуализированный контент</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Hero;
