import { motion } from "framer-motion";

import PinForm from "./PinForm";
import PinTips from "./PinTips";

import styles from './pin-tab.module.css';

const PinTab = ({ setPinActive, setLatitude, setLongitude, pinInputBar}) => {
    return (
        <motion.div className={styles.pinWrapper}
        initial={{ x: '-100vw', opacity: 1 }}
        animate={{ x:0, opacity: 1 }}
        exit={{ x:'-100vw', opacity: 1 }}
        transition={{type: 'spring', duration: 0.3, bounce: 0}}
        >   
            <PinForm setPinActive={setPinActive} 
            setLatitude={setLatitude} 
            setLongitude={setLongitude} 
            pinInputBar={pinInputBar}
            />
            <PinTips/>
        </motion.div>
    );
};

export default PinTab;