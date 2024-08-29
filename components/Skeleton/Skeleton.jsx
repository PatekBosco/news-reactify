import styles from './styles.module.css'

const Skeleton = ({count=1, type='banner'}) => {
    return (
       <>
       {count > 1 ? (
        <ul>
            {[Array(count)].map((_, index) => (
                <li key={index} className={typr === "banner" ? styles.banner : styles.item}>

                </li>
            ))}
        </ul>
       ) : ( 
       <li className={typr === "banner" ? styles.banner : styles.item}></li>
       )}
       </>
    );
};

export default Skeleton;