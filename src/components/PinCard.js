import { useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import './pin-card.css'
import { isVisible } from '@testing-library/user-event/dist/utils';

const PinCard = ({ setPinActive, setRotation, setLatitude, setLongitude}) => {
    const form = useRef();
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        setLongitude(e.target.longitude.value);
        setLatitude(e.target.latitude.value);
        setRotation(false);
        setPinActive(false)
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div className='pin-wrapper'
                initial={{ x: '-100vw', opacity: 1 }}
                animate={{ x:0, opacity: 1 }}
                exit={{ x:'-100vw', opacity: 1 }}
                transition={{type: 'spring', duration: 0.3, bounce: 0}}
                >
                    <form className='coordinate-form' ref={form} onSubmit={(e) => handleSubmit(e)}>
                        <input type="number" step='0.0001' name='latitude' placeholder='Latitude'/>
                        <input type="number" step='0.0001' name='longitude' placeholder='Longitude'/>
                        <button type='submit'>Submit</button>
                    </form>
                </motion.div>
            )}  
        </AnimatePresence>
    );
};

export default PinCard;