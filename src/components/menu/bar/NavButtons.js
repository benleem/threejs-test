import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from './nav-buttons.module.css';

const NavButtons = ({rotation, setRotation, setLatitude, setLongitude, searchActive, setSearchActive, pinActive, setPinActive, infoActive, setInfoActive, pinX, pinY, pinZ, camera}) => {
    // click variable for dice roll animation
    const [isClicked, setIsClicked] = useState(false);

    const randomize = () => {
        setIsClicked(!isClicked);

        // setting min/max to limit possible random values to be viable coordinates
        const lat = {min:-90.0000, max:90.0000};
        const lon = {min:-180.0000, max:180.0000};

        // getting random numbers
        const randomLat = Math.floor(Math.random() * (lat.max - lat.min + 1) + lat.min);
        const randomLon = Math.floor(Math.random() * (lon.max - lon.min + 1) + lon.min);

        // update lat/lon state
        setLatitude(randomLat);
        setLongitude(randomLon);
    }

    const resetCamera = () => {
        //reset camera to pin position if info tab isn't open
        if (infoActive === false) {
            camera.current.position.x = pinX;
            camera.current.position.y = pinY;
            camera.current.position.z = pinZ;  
        }
    }

    return (
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
            <button className={styles.navButton} onClick={() => {setInfoActive(!infoActive);resetCamera()}}>
                <img src="./img/info.svg" alt="place info" />
            </button>
        </div>
    )
}

export default NavButtons