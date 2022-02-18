import { useState } from 'react';

import { AnimatePresence } from "framer-motion";

import NavButtons from './NavButtons'
import PinTab from '../pin/PinTab';
import SearchTab from '../search/SearchTab';
import InfoTab from '../info/InfoTab';

import styles from './menu-bar.module.css';

const MenuBar = ({ wikiLoading, wikiData, rotation, setRotation, setLatitude, setLongitude }) => {
    // menu tabs mounting state
    const [pinActive, setPinActive] = useState(false);
    const [searchActive, setSearchActive] = useState(false);
    const [infoActive, setInfoActive] = useState(false);

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
            />

            {pinActive ?
                <PinTab setPinActive={setPinActive} setLatitude={setLatitude} setLongitude={setLongitude}/> : 
                null
            }
            {searchActive ?
                <SearchTab setInfoActive={setInfoActive} setSearchActive={setSearchActive} setLatitude={setLatitude} setLongitude={setLongitude}/> : 
                null
            }
            <AnimatePresence
            initial={false}
            exitBeforeEnter={true}
            >
                {infoActive ?
                    <InfoTab wikiLoading={wikiLoading} wikiData={wikiData} infoActive={infoActive} setInfoActive={setInfoActive}/> :
                    null
                }
            </AnimatePresence>
        </div>
    );
};

export default MenuBar;
