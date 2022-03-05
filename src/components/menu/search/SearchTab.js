import { useState} from 'react';
import axios from 'axios';
import { motion } from "framer-motion";
import SearchCard from './SearchCard';
import MenuLoading from '../bar/MenuLoading';
import styles from './search-tab.module.css';

const SearchTab = ({ setInfoActive, setSearchActive, setLatitude, setLongitude, searchInputBar }) => {
    const [searchLoading, setSearchLoading] = useState();
    const [cards, setCards] = useState([]);

    const checkLoading = () => {
        // if search api call is loading, return loading component
        if(searchLoading === true){
            return(
                <MenuLoading styleType='searchTab'/>
            )
        }

        // else return map of cards or error message based on cards.length
        else{
            return(
                <div className={styles.searchCardContainer}>
                    {(cards.length < 1 && searchLoading === false)?
                        <p className={styles.searchError}>We do not have this location on record</p>:
                        cards.map(card => 
                            <SearchCard setInfoActive={setInfoActive} 
                            setSearchActive={setSearchActive}  
                            setLatitude={setLatitude} 
                            setLongitude={setLongitude} 
                            card={card} 
                            key={card.geonameId}/>
                        )
                    }
                </div>   
            )
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        let search = e.target.search.value;
        try {
            // get data for cards from search variable
            setSearchLoading(true);
            const data = await axios.get(`https://secure.geonames.org/search?q=${search}&maxRows=25&type=json&username=${process.env.REACT_APP_ACCOUNT_KEY}`);
            setCards(data.data.geonames);
            setSearchLoading(false);
        } catch (error) {
            console.log(error)
        }
        e.target.reset();
    }
    
    return (
        <motion.div className={styles.searchTab}
        initial={{ x: '-100vw', opacity: 1 }}
        animate={{ x:0, opacity: 1 }}
        exit={{ x:'-100vw', opacity: 0 }}
        transition={{type: 'spring', duration: 0.3, bounce: 0}}
        >
            <form className={styles.searchForm} onSubmit={(e) => handleSubmit(e)}>
                <input ref={searchInputBar} autoComplete='off' type="text" name='search' placeholder='City/Country name'/>
                <button>Submit</button>
            </form>
            {checkLoading()}
        </motion.div>
    );
};

export default SearchTab;
