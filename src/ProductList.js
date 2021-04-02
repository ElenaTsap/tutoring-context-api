import React from 'react'

export default function () {
    let products = [
        {
            name: 'Toothbrush',
            price: '40',
            id: '01'
        },
        {
            name: 'Soap',
            price: '20',
            id: '02'
        },
        {
            name: 'Shampoo',
            price: '50',
            id: '03'
        },
        {
            name: 'Conditioner',
            price: '80',
            id: '04'
        },
        {
            name: 'Body cream',
            price: '120',
            id: '05'
        }
    ]

    let productList = products.map (product => <h3>{product.name}</h3>)

    return (
        <div>
            {productList}
        </div>
    )
}