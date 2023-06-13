import React from 'react'
import logoSvg from '../../assets/img/pizza-logo.svg'
import trashSvg from '../../assets/img/trash.svg'
import styles from './search.module.scss'
import { AppContext } from '../../App'

const Search = () => {
    const { searchValue, setSearchValue } = React.useContext(AppContext)

    return (
        <div className={styles.root}>
            <img className={styles.icon_pizza} width="38" src={logoSvg} alt="Pizza logo" />
            <input
                value={searchValue}
                onChange={event => setSearchValue(event.target.value)}
                className={styles.input} placeholder='Search Pizza' type="text" />
            {searchValue && (
                <img onClick={() =>
                    setSearchValue('')
                }
                    className={styles.icon_trash} width="38" src={trashSvg} alt="Pizza logo" />
            )
            }

        </div>
    )
}

export default Search;