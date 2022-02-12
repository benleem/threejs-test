import { useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import './search-card.css';
import { isVisible } from '@testing-library/user-event/dist/utils';

const SearchCard = () => {
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('hello');
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div className='search-card'
                initial={{ x: '-100vw', opacity: 1 }}
                animate={{ x:0, opacity: 1 }}
                exit={{ x:'-100vw', opacity: 1 }}
                transition={{type: 'spring', duration: 0.3, bounce: 0}}
                >
                    <form className='search-form' ref={form} onSubmit={(e) => handleSubmit(e)}>
                        <input type="text" name='latitude' placeholder='Search for location...'/>
                        <button>Submit</button>
                    </form>
                </motion.div>
            )}     
        </AnimatePresence>
    );
};

export default SearchCard;
