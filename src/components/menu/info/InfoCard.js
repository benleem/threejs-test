import './info-card.css';

const InfoCard = ({ article }) => {
    return (
        <div className='info-card'>
            <p className='info-card-title'>{article.title}</p>
            <p className='info-card-summary'>{article.summary}</p>
            <a className='info-card-url' href={`https://${article.wikipediaUrl}`} target='_blank'>Learn more</a>
        </div>
    );
};

export default InfoCard;
