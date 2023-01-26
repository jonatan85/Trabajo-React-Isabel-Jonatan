
import { useContext, useState, useEffect } from 'react';

// import { UserContext } from '../../context/UserContext.jsx';
import Pagination from '../pagination/Pagination.jsx';
import './Card.scss'
import getDataApi from '../../services/api.js';
import {Carrito} from '../carrito/carrito'

export const Card = () => {

    const[productsPage, setProductsPaga] = useState(4);
    // Pagina de inicio.
    const [currentPage, setCurrentPage] = useState(1);     
    const [listProduct, setListProduct] = useState([]);     

    // Paginación
    const lastIndex = currentPage * productsPage;
    const firsIndex = lastIndex - productsPage; 

    // Carrito

    const [quantityProducts, setQuantityProducts] = useState(0) 
    const [carritoList, setCarritoList] = useState([])                               
    

    useEffect(() => {
        getDataApi().then((res) => {
            const withAmount = res.data.map(product => {
                return {
                    ...product,
                    amount: 1
                }
            })
            setListProduct(withAmount);
        });
      },[])

    // Carrito.
    // Handel para añadir al carrito.
    const onAddProduct = (card) => {
       
        setQuantityProducts(quantityProducts + 1)

        const existProduct = carritoList.find(product => product.id === card.id)
        
        if(existProduct) {
            let newItem = {...card, amount: existProduct.amount + 1}
            const newCarrito = carritoList.filter(product => {
                return product.id !== card.id
            })
            newCarrito.push(newItem)
            setCarritoList(newCarrito)
        } else {
            let newItem = {...card}
            const newCarrito = [...carritoList, newItem]
            setCarritoList(newCarrito)
        }
    };
    
    return (
        <>
            <Carrito quantityProducts={quantityProducts} carritoList={carritoList} setCarritoList={setCarritoList} setQuantityProducts={setQuantityProducts}/>
            <div className="container-card">
                {listProduct.map((card) => {
                    return(
                        <div className='item' key={card.id}>
                        <img src={card.image} alt='descripcion de imagen'/>
                        <h2>{card.title}</h2>
                        <p className='price'>{card.price}</p>
                        <p><button onClick={() => onAddProduct(card)} >Añadir al Carrito</button></p>
                        </div>
                    )
                    
                }).slice(firsIndex, lastIndex)}
            </div>
            <Pagination 
                productsPage={productsPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                listProduct={listProduct}
             />
        </>
    )
}