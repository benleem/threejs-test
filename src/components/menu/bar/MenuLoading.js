import { motion } from 'framer-motion';
import styles from './menu-loading.module.css';

const MenuLoading = ({ styleType }) => {
    return (
        <div className={styleType === 'searchTab' ? styles.loadingSearchTab : styles.loadingInfoTab }>
            <motion.img src="./img/loading.svg" alt="" 
            animate={{ rotate: 360 }}
            transition={{ ease: "linear", duration: 1, repeat: Infinity }}
            />
        </div>
    );
};

export default MenuLoading;
