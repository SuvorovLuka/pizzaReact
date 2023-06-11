import React from 'react';

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Pizzablock from "../components/Pizzablock";
import Skeleton from "../components/Pizzablock/Skeleton";


const Home = () => {
    const [items, setItems] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        fetch('https://64831bcef2e76ae1b95bf40f.mockapi.io/items')
            .then((res) => res.json())
            .then((arr) => {
                setItems(arr)
                setLoading(false)
            });
    }, []);

    return (

        <>
            <div className="container">
                <div className="content__top">
                    <Categories />
                    <Sort />
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {
                        loading
                            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                            : items.map((obj) => <Pizzablock key={obj.id} {...obj} />)
                    }
                    {/* {items.map((obj) => (loading ? <Skeleton /> : <Pizzablock key={obj.id} {...obj} />))} */}
                </div>
            </div>
        </>
    )
}

export default Home
