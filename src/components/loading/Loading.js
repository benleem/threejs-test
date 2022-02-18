import styles from './loading.module.css'

const Loading = () => {
    return(
        <div className={styles.assetsLoading}>
            <p className='assets-loading'>Loading...</p>
        </div>
    );
};

export default Loading;
