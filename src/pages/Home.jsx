import React from 'react';

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Pizzablock from "../components/Pizzablock";
import Skeleton from "../components/Pizzablock/Skeleton";
import Pagination from '../components/Pagination';
import { AppContext } from '../App';


const Home = () => {
    const {searchValue}=React.useContext(AppContext)
    const [items, setItems] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [categoryID, setCategoryID] = React.useState(0);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [sortType, setSortType] = React.useState({
        name: 'популярности',
        sortProperty: 'rating'
    });

    React.useEffect(() => {
        setLoading(true)

        const sortBy = sortType.sortProperty;
        const category = categoryID > 0 ? `category=${categoryID}` : '';
        const search = searchValue ? `&search=${searchValue}` : '';

        fetch(`https://64831bcef2e76ae1b95bf40f.mockapi.io/items?page=${currentPage}&limit=4${category}&sortBy=${sortBy}&order=desc${search}`
        )
            .then((res) => res.json())
            .then((arr) => {
                setItems(arr)
                setLoading(false)
            });
        window.scroll(0, 0)
    }, [categoryID, sortType, searchValue,currentPage]);

    const pizzas = items.map((obj) => <Pizzablock key={obj.id} {...obj} />)
    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />)

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
                        ? skeletons
                        : pizzas
                }
            </div>
            <Pagination onChangePage={page => setCurrentPage(page)} />
        </div>
    )

}


export default Home
