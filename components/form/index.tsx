'use client'
import {useRef} from 'react'
import styles from './index.module.css'
interface Props {
    handleAddNewCard : (icon:string, title:string, animation: boolean)=>void
}

const Form: React.FC<Props> = ({handleAddNewCard}) => {
    const title = useRef<HTMLInputElement | null>(null)
    const icon = useRef<HTMLInputElement | null>(null)
    const animation = useRef<HTMLSelectElement | null>(null)
    const description = useRef<HTMLTextAreaElement | null>(null)

    const handleSubmit = (e:React.FormEvent)=> {
        e.preventDefault()
        if(title.current && icon.current && animation.current && description.current) {
            handleAddNewCard(icon.current.value, title.current.value,animation.current.value === 'true');
            title.current.value = '';
            icon.current.value = ''
            description.current.value = ''
            animation.current.value = 'true'
        }
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <h4>Titulo:</h4>
            <input placeholder='Title' required ref={title}></input>
            <h4>Icon:</h4>
            <input placeholder='Icon' required ref={icon}></input>
            <h4>Animacion:</h4>
            <select placeholder='Rotation' required ref={animation}>
                <option value='true'>True</option>
                <option value='false'>False</option>
            </select>
            <h4>Descripcion:</h4>
            <textarea placeholder='Description' required className={styles.textarea} ref={description}></textarea>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Form;