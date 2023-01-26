

import {React, useState, useContext} from 'react';
import './carrito.css'

export const Carrito = ({ quantityProducts, carritoList, setCarritoList, setQuantityProducts }) => {

    const [showCarrito, setShowCarrito] = useState(false)

    function putCarritoVisible () {
        if(showCarrito === true) {
            setShowCarrito(false)
        } else {
            setShowCarrito(true)
        }
    }
 
    function onDeleteProduct (productCard) {
        setQuantityProducts(quantityProducts - 1)
        let copia = [...carritoList]
        const elementDelete = copia.find(product => product.id === productCard.id)
        if(elementDelete.amount === 1) {
            copia = copia.filter(product => product.id !== productCard.id)
            setCarritoList(copia)
        } else {
            copia = copia.filter(product => product.id !== productCard.id)
            elementDelete.amount = elementDelete.amount - 1
            copia.push(elementDelete)
            setCarritoList(copia)
        }

    }

    return (
    <div>
         <div className='carrito-container'>
        <div className='total-products' onClick={() => putCarritoVisible() }>{ quantityProducts }</div>
       { showCarrito &&  <div className='carrito-list'>{
            carritoList.map(card => 
                (<div key={card.id} className="cart-product">

                <div className="info-cart-product">
                    <span className="cantidad-producto-carrito">{card.amount}</span>
                    <p className="titulo-producto-carrito">{card.title}</p>
                    <span className="precio-producto-carrito">{card.price}</span>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="icon-close"
                    onClick={() => onDeleteProduct(card)}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
                </div>)
            )

        }
        </div>}
</div>
</div>
    )
}

