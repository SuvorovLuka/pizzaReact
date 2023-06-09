import React from 'react';

function Categories() {
  const [activeId, setactiveId] = React.useState(1);

  const categoiries = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

  const onClickIndex = (count) => {
    setactiveId(count);
  }


  return (
    <div className="categories">
      <ul>
        {
          categoiries.map((value, i) => <li key={value} onClick={() => onClickIndex(i)} className={activeId == i ? 'active' : ''}>{value}</li>)
        }
      </ul>
    </div>);
}

export default Categories
{/* <li onClick={() => onClickIndex(1)} className={activeId == 1 ? 'active' : ''}>Все</li> */ }