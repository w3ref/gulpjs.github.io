import React from 'react';
import ExternalLink from '@theme/ExternalLink';

import styles from './backers.module.scss';

function BackerSection() {
  return (
    <div className={styles.backers}>
      <div className={styles.backersText}>
        <h2>Индивидуальные сторонники</h2>
        <p>
          С 2013 года gulp стал популярным выбором как для разработчиков, так и для дизайнеров. У нас есть не только сообщества, которые полагались на нас с самого начала, но и постоянный поток новых пользователей, которые узнают, насколько хорош их рабочий процесс с помощью gulp.
        </p>
        <p>
          Gulp нужна твоя помощь! Мы хотим продолжать расширять нашу команду и находить еще больше участников из всех областей, чтобы поддерживать и улучшать любимый проект!
        </p>
      </div>
      <div className={styles.tier}>
        <h3 className={styles.tierTitle}>$2 в месяц</h3>
        <p>Спасибо за поддержку. Каждый вклад помогает нам поддерживать и улучшать gulp!</p>
        <ExternalLink href="https://github.com/sponsors/gulpjs?tier_id=24679" className={styles.tierButton}>Пожертвовать $2</ExternalLink>
      </div>
      <div className={styles.tier}>
        <h3 className={styles.tierTitle}>$5 в месяц</h3>
        <p>Мы будем чередовать ваш аватар с помощью баннера отдельных участников ниже.</p>
        <ExternalLink href="https://github.com/sponsors/gulpjs?tier_id=24680" className={styles.tierButton}>Пожертвовать $5</ExternalLink>
      </div>
      <div className={styles.tier}>
        <h3 className={styles.tierTitle}>$10 в месяц</h3>
        <p>Мы благодарим вас в Твиттере и размещаем ваш аватар на баннере отдельных авторов ниже.</p>
        <ExternalLink href="https://github.com/sponsors/gulpjs?tier_id=24681" className={styles.tierButton}>Пожертвовать $10</ExternalLink>
      </div>
    </div>
  )
}

export default BackerSection;
