import React from 'react'

type CategoriesProps = {
    value: number,
    onChangeCategory: (index: number) => void
}

const Categories: React.FC<CategoriesProps> = ({ value, onChangeCategory }) => {

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

    return (
        <div className="categories">
            <ul>
                {
                categories.map((category, i) =>
                    <li 
                        key={i}
                        onClick={() => onChangeCategory(i)} 
                        className={value === i ? 'active' : ''}>
                        {category}
                    </li>)
                }
            </ul>
        </div>
    )
}

export default Categories