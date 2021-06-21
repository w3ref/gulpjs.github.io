import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ExternalLink from '@theme/ExternalLink';

import styles from './plugins.module.scss';

function PluginSection() {
  return (
    <div className={styles.plugins}>
      <div className={styles.pluginsText}>
        <h2>Подключение плагинов</h2>
        <p>
          Использование плагинов, созданных сообществом, - это быстрый способ начать работу с gulp. Каждый плагин выполняет небольшой объем работы, поэтому вы можете соединять их как строительные блоки. Объедините плагины из различных технологий, чтобы достичь желаемого результата.
        </p>
        <p className={styles.pluginsCTA}>
          Просмотрите <Link to="plugins">плагины сообщества</Link>, чтобы узнать, что доступно!
        </p>
      </div>
      <div className={styles.pluginsGrid}>
        <ExternalLink href="https://www.npmjs.com/package/gulp-babel" className={styles.pluginCard}>
          <img className={styles.pluginLogo} src={useBaseUrl('img/babel.svg')} alt="Babel logo" />
          <span className={styles.pluginName}>Babel</span>
        </ExternalLink>
        <ExternalLink href="https://www.npmjs.com/package/gulp-sass" className={styles.pluginCard}>
          <img className={styles.pluginLogo} src={useBaseUrl('img/sass.png')} alt="SASS logo" />
          <span className={styles.pluginName}>SASS</span>
        </ExternalLink>
        <ExternalLink href="https://www.npmjs.com/package/gulp-typescript" className={styles.pluginCard}>
          <img className={styles.pluginLogo} src={useBaseUrl('img/typescript.png')} alt="TypeScript logo" />
          <span className={styles.pluginName}>TypeScript</span>
        </ExternalLink>
        <ExternalLink href="https://www.npmjs.com/package/gulp-autoprefixer" className={styles.pluginCard}>
          <img className={styles.pluginLogo} src={useBaseUrl('img/autoprefixer.png')} alt="Autoprefixer logo" />
          <span className={styles.pluginName}>Autoprefixer</span>
        </ExternalLink>
        <ExternalLink href="https://www.npmjs.com/package/gulp-imagemin" className={styles.pluginCard}>
          <img className={styles.pluginLogo} src={useBaseUrl('img/imagemin.png')} alt="Imagemin logo" />
          <span className={styles.pluginName}>Imagemin</span>
        </ExternalLink>
        <ExternalLink href="https://www.npmjs.com/package/gulp-pug" className={styles.pluginCard}>
          <img className={styles.pluginLogo} src={useBaseUrl('img/pug.svg')} alt="Pug logo" />
          <span className={styles.pluginName}>Pug</span>
        </ExternalLink>
      </div>
    </div>
  )
}

export default PluginSection;
