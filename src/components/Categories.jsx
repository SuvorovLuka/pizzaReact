import React from 'react';

function Categories({ value, onClickCategory }) {

  const categoiries = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];



  return (
    <div className="categories">
      <ul>
        {
          categoiries.map((categoryName, i) =>
            <li key={categoryName}
              onClick={() => onClickCategory(i)}
              className={value == i ? 'active' : ''}>{categoryName}
            </li>)
        }
      </ul>
    </div>);
}

export default Categories
{/* <li onClick={() => onClickIndex(1)} className={activeId == 1 ? 'active' : ''}>Все</li> */ }