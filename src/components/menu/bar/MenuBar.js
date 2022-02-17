import { useState, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import PinTab from '../pin/PinTab';
import SearchTab from '../search/SearchTab';
import InfoTab from '../info/InfoTab';
import styles from './menu-bar.module.css';

const MenuBar = ({ wikiLoading, wikiData, rotation, setRotation, setLatitude, setLongitude }) => {
    const [pinActive, setPinActive] = useState(false);
    const [searchActive, setSearchActive] = useState(false);
    const [infoActive, setInfoActive] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const randomize = () => {
        setIsClicked(!isClicked);

        // setting min/max to limit possible random values to be viable coordinates
        let lat = {min:-90.0000, max:90.0000};
        let lon = {min:-180.0000, max:180.0000};

        // getting random rumbers
        let randomLat = Math.floor(Math.random() * (lat.max - lat.min + 1) + lat.min);
        let randomLon = Math.floor(Math.random() * (lon.max - lon.min + 1) + lon.min);

        setLatitude(randomLat);
        setLongitude(randomLon);
    }
    
    return (
        <div  className={styles.menuBar}>
            <div className={styles.navButtons}>
                <button className={styles.navButton} onClick={() => setRotation(!rotation)}>
                    <img src={rotation === true ? "./img/pause.svg" : "./img/play.svg"} alt="pause/play" />
                </button>
                <button className={styles.navButton} onClick={() => {setSearchActive(!searchActive);setPinActive(false);}}>
                    <img src="./img/search.svg" alt="search" />
                </button>
                <button className={styles.navButton} onClick={() => {setPinActive(!pinActive);setSearchActive(false)}}>
                    <img src="./img/pin.svg" alt="pin" />
                </button>
                <motion.button className={styles.navButton} onClick={() => {randomize();setPinActive(false);setSearchActive(false)}}
                animate={isClicked ? {rotate:360} : {rotate:0} }
                transition={{duration: 0.3}}

                >
                    <img src="./img/dice.svg" alt="random" />
                </motion.button>
                <button className={styles.navButton} onClick={() => setInfoActive(!infoActive)}>
                    <img src="./img/info.svg" alt="place info" />
                </button>
            </div>
            {pinActive ?
            <PinTab setPinActive={setPinActive} setLatitude={setLatitude} setLongitude={setLongitude}/> : 
            null}
            {searchActive ?
            <SearchTab setInfoActive={setInfoActive} setSearchActive={setSearchActive} setLatitude={setLatitude} setLongitude={setLongitude}/> : 
            null}
            <AnimatePresence
            initial={false}
            exitBeforeEnter={true}
            >
                {infoActive ?
                <InfoTab wikiLoading={wikiLoading} wikiData={wikiData} infoActive={infoActive} setInfoActive={setInfoActive}/> :
                null}
            </AnimatePresence>
        </div>
    );
};

export default MenuBar;
