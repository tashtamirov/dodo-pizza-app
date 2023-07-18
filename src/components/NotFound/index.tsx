import React from 'react'
import styles from './NotFound.module.scss'

const NotFound: React.FC = () => {
    return (
        <div className={styles.not_found}>
            <h1>Ничего не найдено :(</h1>
            <p>Такая страница в нашем магазине не найдена</p>
        </div>
    )
}
export default NotFound
