import styles from './index.module.css'
interface Props {
    icon: string
}

const Card: React.FC<Props> = ({icon}) => {
    return (
        <div className={styles.card}>
            <h1>{icon.toLocaleUpperCase()}</h1>
            <div className={icon === 'cog' ?  styles.rotation : ''}>
                <i className={`icon-${icon}`}></i>
            </div>
        </div>
    )
}

export default Card;