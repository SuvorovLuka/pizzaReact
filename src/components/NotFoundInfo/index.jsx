import React from 'react'
import styles from './NotFoundInfo.module.scss'

const NotFoundInfo = () => {
    return (
        <div className={styles.root}>
            <h1 >
                <span>404 </span>
                <br />
                Такой страницы не существует
            </h1>
            <p className={styles.descr}>
                Вернитесь обратно и найдете много вкусных Пиц
            </p>
        </div>
    )
}

export default NotFoundInfo
