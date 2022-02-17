import { motion } from "framer-motion";
import styles from './pin-tab.module.css';

const PinTab = ({ setPinActive, setLatitude, setLongitude}) => {
    const handleSubmit = (e) =>{
        e.preventDefault();
        setLongitude(e.target.longitude.value);
        setLatitude(e.target.latitude.value);
        setPinActive(false)
    }

    return (
        <motion.div className={styles.pinWrapper}
        initial={{ x: '-100vw', opacity: 1 }}
        animate={{ x:0, opacity: 1 }}
        exit={{ x:'-100vw', opacity: 1 }}
        transition={{type: 'spring', duration: 0.3, bounce: 0}}
        >
            <form className={styles.coordinateForm} onSubmit={(e) => handleSubmit(e)}>
                <input className="latitude-input" type="number" autoComplete='off' min={-90} max={90} step='any' name='latitude' placeholder='Latitude'/>
                <input className="longitude-input" type="number" autoComplete='off' min={-180} max={180} step='any' name='longitude' placeholder='Longitude'/>
                <button type='coordinate-submit'>Submit</button>
            </form>
            <div className={styles.pinTip}>
                <p>Tips</p>
                <p className={styles.validLat}>Valid latitude values: -90 to 90</p>
                <p className={styles.validLon}>Valid longitude values: -180 to 180</p>
                <p className="tip01">Negative latitude values correspond to South and positive to North.</p>
                <p className={styles.tip02}>Negative longitude values correspond to West and positve to East.</p>
                <p>Example:</p>
                <p>On Google, Mexico's coordinates are labeled as 23.6345° N, 102.5528° W.</p>
                <p>To use it here simply input the latitude as 23.6345 and the longitude as -102.5528.</p>
            </div>
        </motion.div>
    );
};

export default PinTab;