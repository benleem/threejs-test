import { motion } from "framer-motion";
import InfoCard from './InfoCard';
import MenuLoading from '../bar/MenuLoading'
import styles from'./info-tab.module.css';

const InfoTab = ({ wikiLoading, wikiData }) => {
    const checkLoading = () => {
        // check if loading state is active, if so return loading component
        if(wikiLoading === true){
            return(
                <MenuLoading styleType='infoTab'/>
            )
        }
        // else return map of info cards or error message based on wikiData length
        else{
            return(
                wikiData.length < 1 ? 
                <p className={styles.noWikiInfo}>There is no Wiki information on this location</p> : 
                wikiData.map(article => <InfoCard key={article.wikipediaUrl} article={article}/>)
            )
        }
    }

    return (
        <motion.div className={styles.infoTab}
        initial={{y: '-100vh', opacity: 0}}
        animate={{y:0, opacity: 1}}
        exit={{y:'-100vh', opacity: 0}}
        transition={{type: 'spring', duration: 0.5, bounce: 0}}
        >
            {checkLoading()}
        </motion.div>
    );
};

export default InfoTab;
