import React from 'react';
import classnames from 'classnames';

import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './benefits.module.scss';

function BenefitSection(props) {
  return (
    <div className={styles.benefits}>
      <div className={classnames('card', styles.benefitCard)}>
        <div className="card__image">
          <img
            src={useBaseUrl('img/flexible.png')}
            alt="Flexible sample"
          />
        </div>
        <div className="card__header">
          <h2>Гибкий</h2>
        </div>
        <div className="card__body">
          <p>
            Используя код вместо конфигурации, используйте весь JavaScript для создания вашего gulpfile, где задачи могут быть написаны с использованием вашего собственного кода или связанных одноцелевых подключаемых модулей.
          </p>
        </div>
      </div>
      <div className={classnames('card', styles.benefitCard)}>
        <div className="card__image">
          <img
            src={useBaseUrl('img/composable.png')}
            alt="Composable sample"
          />
        </div>
        <div className="card__header">
          <h2>Сборный</h2>
        </div>
        <div className="card__body">
          <p>
            Напишите отдельные целенаправленные задачи и объедините их в более крупные операции, что обеспечит вам скорость и точность, уменьшив повторение.
          </p>
        </div>
      </div>
      <div className={classnames('card', styles.benefitCard)}>
        <div className="card__image">
          <img
            src={useBaseUrl('img/efficient.png')}
            alt="Efficient sample"
          />
        </div>
        <div className="card__header">
          <h2>Эффективный</h2>
        </div>
        <div className="card__body">
          <p>
            Используя потоки gulp, вы можете применять множество преобразований к файлам, находящимся в памяти, прежде чем что-либо будет записано на диск, что значительно ускоряет процесс сборки.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BenefitSection;
