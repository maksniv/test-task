import FormInput from '../../components/FormInput/FormInput';
import Users from '../../components/Users/Users';
import styles from './Home.module.scss';
import { getDescription } from '../../utils/textAPI';
import { useEffect, useState } from 'react';

const Home = () => {
  const [text, setText] = useState('');

  const loadingDescription = async () => {
    const description = await getDescription();
    setText(description);
  };

  useEffect(() => {
    loadingDescription();
  }, []);

  return (
    <div className={styles.home__wrapper}>
      <div className={styles.home__content}>
        <div className={styles.home__title_wrapper}>
          <div className={styles.home__title}>
            Now Buy Your PIN or <span>Top Up</span>
          </div>
          <div className={styles.home__title2}>With Bank Transfer</div>
        </div>
        <div className={styles.home__description}>{text}</div>
        <button className={styles.home__button}>Get Started</button>
        <FormInput />
        <Users />
      </div>
      <div className={styles.home__images_block}>
        <div className={styles.home__image_woman}></div>
        <div className={styles.home__image_circle}></div>
        <div className={styles.home__image_langs}>
          <div className={styles.home__image_lang_IND1}></div>
          <div className={styles.home__image_lang_ENG}></div>
          <div className={styles.home__image_lang_ITL}></div>
          <div className={styles.home__image_lang_IND2}></div>
          <div className={styles.home__image_lang_IND3}></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
