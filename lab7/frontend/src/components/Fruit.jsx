import React from 'react'

const products = [
    {title: "Cabbage", id: 1, isFruit: false},
    {title: "Potato", id: 2, isFruit: false},
    {title: "Banana", id: 3, isFruit: true},
    {title: "Apple", id: 4, isFruit: true},
];

const ListItem = products.map((item)=> (
    <li key={item.id} style={{ color: "red"}}>{item.title}</li>
));
console.log(ListItem);


const Fruit = () => {
    //const {picUrl,name,price} = props.fruits;
    return (
    <ul >
        {ListItem}
    </ul>
    // <div>
    //     <img src={picUrl} alt={name} />
    //     <h2>{name}</h2>
    //     <h3>Rs. {price}</h3>
    // </div>
    )
}

export default Fruit
