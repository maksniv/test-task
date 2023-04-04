import styles from './Users.module.scss';

const About = () => {
  return (
    <div className={styles.home__users_wrapper}>
      <div className={styles.home__users_avatars}>
        <span className={styles.home__users_avatar}>
          <img
            src="https://sun9-71.userapi.com/impg/k6ZczZNmGyMbywy9BZycKRbonHoYxwU-iRDbaQ/nWlu9PnJG2U.jpg?size=35x35&quality=96&sign=45565a8a4d6c1d50a21757b5933e5944&type=album"
            className={styles.home__users_pouring}
            alt="plus"
          />
        </span>
        <span className={styles.home__users_avatar}>
          <img
            src="https://sun9-9.userapi.com/impg/qbEe00IxobYo5NNk8Se0QTI20NjnOHaqOmUMAw/7zYfQEd4vqM.jpg?size=38x38&quality=96&sign=36b25da42189a7ffa493b20c5c6cf773&type=album"
            alt="user avatar"
          />
        </span>
        <span className={styles.home__users_avatar}>
          <img
            src="https://sun9-16.userapi.com/impg/KwvNy5ap4Q5ag_HSSKglnRE-jxZSQgD9heojAw/M7fTWtkicXs.jpg?size=38x38&quality=96&sign=a505b275274cfa389b8f02106d088fa4&type=album"
            alt="user avatar"
          />
        </span>
        <span className={styles.home__users_avatar}>
          <img
            src="https://sun9-37.userapi.com/impg/xgmhXAiJyCend5kqulV375HIg5yUil3iii79cw/Y46jeiHn9C0.jpg?size=38x38&quality=96&sign=0bb51ce3ec341f02ae5edde6d0db3e3b&type=album"
            alt="user avatar"
          />
        </span>
      </div>
      <div className={styles.home__users_text}>
        45k+ Regular User. <span>View Price Plan</span>
      </div>
    </div>
  );
};

export default About;
