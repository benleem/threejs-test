import { useState } from 'react';
import { AnimatePresence } from "framer-motion";
import PinTab from './pin/PinTab';
import SearchTab from './search/SearchTab';
import InfoTab from './info/InfoTab';
import './menu-bar.css';

const MenuBar = ({ setSearchLoading, searchLoading, wikiLoading, wikiData, rotation, setRotation, setLatitude, setLongitude }) => {
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
        <div  className='menu-bar'>
            <div className='nav-buttons'>
                <button className='rotation-control' onClick={() => setRotation(!rotation)}>
                    <img src={rotation === true ? "./img/pause.svg" : "./img/play.svg"} alt="pause/play" />
                </button>
                <button className='search-button' onClick={() => {setSearchActive(!searchActive);setPinActive(false)}}>
                    <img src="./img/search.svg" alt="search" />
                </button>
                <button className='pin-button' onClick={() => {setPinActive(!pinActive);setSearchActive(false)}}>
                    <img src="./img/pin.svg" alt="pin" />
                </button>
                <button className={isClicked ? 'roll-dice' : 'roll-dice active'}
                onClick={() => {randomize();setPinActive(false);setSearchActive(false)}}>
                    <img src="./img/dice.svg" alt="random" />
                </button>
                <button className='info-button' onClick={() => setInfoActive(!infoActive)}>
                    <img src="./img/info.svg" alt="place info" />
                </button>
            </div>
            {pinActive ?
            <PinTab setPinActive={setPinActive} setLatitude={setLatitude} setLongitude={setLongitude}/> : 
            null}
            {searchActive ?
            <SearchTab setSearchLoading={setSearchLoading} searchLoading={searchLoading} setInfoActive={setInfoActive} setSearchActive={setSearchActive} setLatitude={setLatitude} setLongitude={setLongitude}/> : 
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
