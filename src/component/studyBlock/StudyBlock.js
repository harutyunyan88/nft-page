import styles from "./studyBlock.module.scss";

export default function StudyBlock({ img, description }) {
  return (
    <div className={styles.studyBlock}>
      <div className={styles.studyEmoji}>
        <img alt="" src={img} />
      </div>
      <div className={styles.studyDescription}>
        <p>{description}</p>
      </div>
    </div>
  );
}
