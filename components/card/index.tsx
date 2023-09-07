import styles from './index.module.css'
interface Props {
    icon: string,
    title: string,
    animation: boolean,
}

const Card: React.FC<Props> = ({icon, title, animation}) => {
    return (
        <div className={styles.card}>
            <h1>{title}</h1>
            <div className={animation ?  styles.rotation : ''}>
                <i className={`icon-${icon}`}></i>
            </div>
        </div>
    )
}

export default Card;