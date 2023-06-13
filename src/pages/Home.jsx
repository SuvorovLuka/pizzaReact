import React from 'react';

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Pizzablock from "../components/Pizzablock";
import Skeleton from "../components/Pizzablock/Skeleton";


const Home = () => {
    const [items, setItems] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [categoryID, setCategoryID] = React.useState(0);
    const [sortType, setSortType] = React.useState({
        name: 'популярности',
        sortProperty: 'rating'
    });

    React.useEffect(() => {
        setLoading(true)

        fetch(`https://64831bcef2e76ae1b95bf40f.mockapi.io/items?
        ${categoryID > 0 ? `category=${categoryID}` : ''}&sortBy=${sortType.sortProperty}&order=desc`
        )
            .then((res) => res.json())
            .then((arr) => {
                setItems(arr)
                setLoading(false)
            });
        window.scroll(0, 0)
    }, [categoryID,sortType]);

    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryID} onClickCategory={(id) => setCategoryID(id)} />

                <Sort
                    value={sortType} onChangeSort={(property) => setSortType(property)}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    loading
                        ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                        : items.map((obj) => <Pizzablock key={obj.id} {...obj} />)
                }
            </div>
        </div>
    )

}


export default Home
