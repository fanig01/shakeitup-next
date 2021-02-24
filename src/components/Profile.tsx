import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/4106608?s=400&u=4906ee63db8ebc6363f1a8c21c86a8f5f07f5a44&v=4" alt="Fagner Rodrigues"/>
      <div>
        <strong>Fagner Rodrigues</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </div>
  );
}