import styles from './search-card.module.css';

const SearchCard = ({ setInfoActive, setSearchActive, setLatitude, setLongitude, card }) => {
    const handlePinChange = () => {
        setLatitude(card.lat);
        setLongitude(card.lng);
        setSearchActive(false);
        setInfoActive(true);
    }

    return (
        <button onClick={handlePinChange} className={styles.searchCard}>
            <h3 className={styles.placeName}>
                {card.name}
                {(card.adminName1 === undefined || card.adminName1.length < 1) ? null : `, ${card.adminName1}` }
                {(card.countryName === undefined || card.countryName.length < 1) ? null : `, ${card.countryName}`}
            </h3> 
            <p className={styles.placeLat}>Lat: {card.lat}</p>
            <p className={styles.placeLon}>Lon: {card.lng}</p>
            {card.population < 1 ? null : <p className='place-population'>Pop: {card.population.toLocaleString()}</p>}
        </button>
    );
};

export default SearchCard;
