import { useState} from 'react';
import axios from 'axios';
import { motion } from "framer-motion";
import SearchCard from './SearchCard';
import MenuLoading from '../MenuLoading';
import './search-tab.css';

const SearchTab = ({ setSearchLoading, searchLoading, setInfoActive, setSearchActive, setLatitude, setLongitude }) => {
    const [cards, setCards] = useState([]);

    const checkLoading = () => {
        if(searchLoading === true){
            return(
                <MenuLoading/>
            )
        }else{
            return(
                <div className='search-cards-container'>
                    {cards.map(card => 
                        <SearchCard 
                        setInfoActive={setInfoActive} 
                        setSearchActive={setSearchActive}  
                        setLatitude={setLatitude} 
                        setLongitude={setLongitude} 
                        card={card} 
                        key={card.geonameId}/>
                    )}
                </div>   
            )
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        let search = e.target.search.value;
        try {
            setSearchLoading(true);
            const data = await axios.get(`http://api.geonames.org/search?q=${search}&maxRows=25&type=json&username=${process.env.REACT_APP_ACCOUNT_KEY}`);
            setCards(data.data.geonames);
            setSearchLoading(false);
        } catch (error) {
            console.log(error)
        }
        e.target.reset();
    }
    
    return (
        <motion.div className='search-tab'
        initial={{ x: '-100vw', opacity: 1 }}
        animate={{ x:0, opacity: 1 }}
        exit={{ x:'-100vw', opacity: 0 }}
        transition={{type: 'spring', duration: 0.3, bounce: 0}}
        >
            <form className='search-form' onSubmit={(e) => handleSubmit(e)}>
                <input autoComplete='off' type="text" name='search' placeholder='City/Country name'/>
                <button>Submit</button>
            </form>
            {checkLoading()}
        </motion.div>
    );
};

export default SearchTab;
