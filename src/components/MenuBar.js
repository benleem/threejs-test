import { useState } from 'react';
import { motion } from "framer-motion";
import PinCard from './PinCard';
import SearchCard from './SearchCard';
import './menu-bar.css';

const MenuBar = ({ rotation, setRotation, setLatitude, setLongitude }) => {
    const [pinActive, setPinActive] = useState(false);
    const [searchActive, setSearchActive] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const randomize = () => {
        setIsClicked(!isClicked);

        // setting min/max to limit possible random values to be viable coordinates
        let lat = {min:-90.0000, max:90.0000};
        let lon = {min:-180.0000, max:180.0000};

        let randomLat = Math.floor(Math.random() * (lat.max - lat.min + 1) + lat.min);
        let randomLon = Math.floor(Math.random() * (lon.max - lon.min + 1) + lon.min);
        setLatitude(randomLat);
        setLongitude(randomLon);
        setRotation(false);
    }

    return (
        <div  className='menu-bar'>
            <div className='nav-buttons'>
                <button className='rotation-control' onClick={() => setRotation(!rotation)}>
                    <img src={rotation === true ? "./img/pause.svg" : "./img/play.svg"} alt="pause/play" />
                </button>
                <button className='search-button' onClick={() => (setSearchActive(!searchActive),setPinActive(false))}>
                    <img src="./img/search.svg" alt="search" />
                </button>
                <button className='pin-button' onClick={() => (setPinActive(!pinActive),setSearchActive(false))}>
                    <img src="./img/pin.svg" alt="pin" />
                </button>
                <motion.button className='roll-dice' onClick={() => (randomize(), setPinActive(false), setSearchActive(false))}
                animate={isClicked ? {rotate:360}: {rotate:0}}
                transition={{type: 'spring', duration: 1, bounce: 0.5}}
                >
                    <img src="./img/dice.svg" alt="random" />
                </motion.button>
                <button className='map-button'>
                    <img src="./img/map.svg" alt="map type" />
                </button>
            </div>
            {pinActive ? <PinCard setPinActive={setPinActive} setRotation={setRotation} setLatitude={setLatitude} setLongitude={setLongitude}/> : null}
            {searchActive ? <SearchCard/> : null}
        </div>
    );
};

export default MenuBar;
