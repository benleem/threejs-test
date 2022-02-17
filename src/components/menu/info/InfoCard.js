import styles from './info-card.module.css';

const InfoCard = ({ article }) => {
    return (
        <div className={styles.infoCard}>
            <p className={styles.infoCardTitle}>{article.title}</p>
            <p className={styles.infoCardSummary}>{article.summary}</p>
            <a className={styles.infoCardUrl} href={`https://${article.wikipediaUrl}`} target='_blank'>Learn more</a>
        </div>
    );
};

export default InfoCard;
