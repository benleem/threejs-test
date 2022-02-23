import { useState, useRef } from 'react';

import { AnimatePresence } from "framer-motion";

import NavButtons from './NavButtons'
import PinTab from '../pin/PinTab';
import SearchTab from '../search/SearchTab';
import InfoTab from '../info/InfoTab';

import styles from './menu-bar.module.css';

const MenuBar = ({ wikiLoading, wikiData, rotation, setRotation, setLatitude, setLongitude, pinX, pinY, pinZ, camera}) => {
    // menu tabs mounting state
    const [pinActive, setPinActive] = useState(false);
    const [searchActive, setSearchActive] = useState(false);
    const [infoActive, setInfoActive] = useState(false);

    const searchInputBar = useRef();
    const pinInputBar = useRef()

    return (
        <div  className={styles.menuBar}>
            <NavButtons rotation={rotation} 
            setRotation={setRotation} 
            setLatitude={setLatitude} 
            setLongitude={setLongitude} 
            pinActive={pinActive} 
            setPinActive={setPinActive} 
            searchActive={searchActive} 
            setSearchActive={setSearchActive} 
            infoActive={infoActive} 
            setInfoActive={setInfoActive}
            pinX={pinX} 
            pinY={pinY} 
            pinZ={pinZ} 
            camera={camera}
            searchInputBar={searchInputBar}
            pinInputBar={pinInputBar}
            />
            {pinActive ?
                <PinTab setPinActive={setPinActive} 
                setLatitude={setLatitude} 
                setLongitude={setLongitude}
                pinInputBar={pinInputBar}
                />: 
                null
            }
            {searchActive ?
                <SearchTab setInfoActive={setInfoActive} 
                setSearchActive={setSearchActive} 
                setLatitude={setLatitude} 
                setLongitude={setLongitude}
                searchInputBar={searchInputBar}
                />: 
                null
            }
            <AnimatePresence initial={false}
            exitBeforeEnter={true}
            >
                {infoActive ?
                    <InfoTab wikiLoading={wikiLoading} 
                    wikiData={wikiData} 
                    />:
                    null
                }
            </AnimatePresence>
        </div>
    );
};

export default MenuBar;
