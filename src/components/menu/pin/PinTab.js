import { motion } from "framer-motion";

import PinForm from "./PinForm";

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
            <div className={styles.pinTip}>
                <p>Tips</p>
                <p className={styles.validLat}>- <span className={styles.highLight}>Valid latitude</span> values: <span className={styles.highLight}>-90</span> to <span className={styles.highLight}>90</span></p>
                <p className={styles.validLon}>- <span className={styles.highLight}>Valid longitude</span> values: <span className={styles.highLight}>-180</span> to <span className={styles.highLight}>180</span></p>
                <p className="tip01">- <span className={styles.highLight}>Negative latitude</span> values correspond to <span className={styles.highLight}>South</span> and positive to <span className={styles.highLight}>North</span>.</p>
                <p className={styles.tip02}>- <span className={styles.highLight}>Negative longitude</span> values correspond to <span className={styles.highLight}>West</span> and positve to <span className={styles.highLight}>East</span>.</p>
                <p>Example:</p>
                <p>On Google, Mexico's coordinates are labeled as 23.6345° N, 102.5528° W.</p>
                <p>To use it here simply input the latitude as 23.6345 and the longitude as -102.5528.</p>
            </div>
        </motion.div>
    );
};

export default PinTab;