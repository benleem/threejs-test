import { useState, useEffect} from 'react';
import { motion } from 'framer-motion';

import styles from './nav-buttons.module.css';

const NavButtons = ({rotation, setRotation, setLatitude, setLongitude, searchActive, setSearchActive, pinActive, setPinActive, infoActive, setInfoActive, pinX, pinY, pinZ, camera, pinInputBar, searchInputBar}) => {
    const [focus, setFocus] = useState('');

    // click variable for dice roll animation
    const [isClicked, setIsClicked] = useState(false);

    // const getUserLocation = async() => {
    //     const getPosition = () => {
    //         return new Promise((resolve, reject) => 
    //             navigator.geolocation.getCurrentPosition(resolve, reject)
    //         );
    //     }

    //     try {
    //         setUserLocationLoading(true);
    //         const position = await getPosition();
    //         console.log(position.coords);
    //         setLatitude(position.coords.latitude);
    //         setLongitude(position.coords.longitude);
    //         setUserLocationLoading(false);
    //     } catch (err) {
    //         console.error(err.message);
    //         setUserLocationLoading(false);
    //     }
    // }

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

    useEffect(() => {
        if (focus === 'search' && searchActive === true) {
            searchInputBar.current.focus();
        }
        else if (focus === 'pin' && pinActive === true) {
            pinInputBar.current.focus();
        }
    }, [searchActive, pinActive, focus])
    

    return (
        <div className={styles.navButtons}>
            <button className={styles.navButton} onClick={() => setRotation(!rotation)}>
                <img src={rotation === true ? "./img/pause.svg" : "./img/play.svg"} alt="pause/play" />
            </button>
            <button className={styles.navButton} onClick={() => {setSearchActive(!searchActive);setPinActive(false);setFocus('search')}}>
                <span className={styles.toolTip}>Search for place</span>
                <img src="./img/search.svg" alt="search" />
            </button>
            <button className={styles.navButton} onClick={() => {setPinActive(!pinActive);setSearchActive(false);setFocus('pin')}}>
                <span className={styles.toolTip}>Set pin coordinates</span>
                <img src="./img/pin.svg" alt="pin" />
            </button>
            <button className={styles.navButton} onClick={() => {randomize();setPinActive(false);setSearchActive(false)}}>
                <span className={styles.toolTip}>Feeling lucky?</span>
                <motion.img src="./img/dice.svg" alt="random"
                animate={isClicked ? {rotate:360} : {rotate:0} }
                transition={{duration: 0.3}}
                />
            </button>
            <button className={styles.navButton} onClick={() => {setInfoActive(!infoActive);resetCamera()}}>
                <span className={styles.toolTip}>Place information</span>
                <img src="./img/info.svg" alt="place info" />
            </button>
        </div>
    )
}

export default NavButtons