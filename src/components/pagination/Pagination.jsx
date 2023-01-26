import React from 'react'
import './Pagination.scss'

export default function Pagination({ productsPage, currentPage, setCurrentPage, listProduct}) {
   
    // Va a contener los numeros de la pagina.
    const pageNumbers = [];
    
    // Numero de paginas.
    for (let i = 1; i <= Math.ceil(listProduct.length/productsPage); i++) {
        pageNumbers.push(i);
    }

    // Pagina anterior.
    const onPreviusPage = () => {
        setCurrentPage(currentPage - 1)
    }
    // Pagina siguiente.
    const onNextPage = () => {
        setCurrentPage(currentPage + 1)
    }


  return (
    <>
    <nav className="pagination is-centered" >
        <button className='previous button-pagination' disabled={currentPage === 1 || currentPage <1 } onClick={onPreviusPage} >Anterior</button>
        <button className='next button-pagination' disabled={currentPage === pageNumbers.length } onClick={onNextPage} >Siguiente</button>
    </nav>
  </>
  )
}
