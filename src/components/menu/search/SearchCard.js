import './search-card.css';

const SearchCard = ({ setInfoActive, setSearchActive, setLatitude, setLongitude, card }) => {
    const handlePinChange = () => {
        setLatitude(card.lat);
        setLongitude(card.lng);
        setSearchActive(false);
        setInfoActive(true);
    }

    return (
        <button onClick={handlePinChange} className="search-card">
            <h3 className='place-name'>
                {card.name}
                {(card.adminName1 === undefined || card.adminName1.length < 1) ? null : `, ${card.adminName1}` }
                {(card.countryName === undefined || card.countryName.length < 1) ? null : `, ${card.countryName}`}
            </h3> 
            <p className='place-lat'>Lat: {card.lat}</p>
            <p className='place-lon'>Lon: {card.lng}</p>
            {card.population < 1 ? null : <p className='place-population'>Pop: {card.population.toLocaleString()}</p>}
        </button>
    );
};

export default SearchCard;
