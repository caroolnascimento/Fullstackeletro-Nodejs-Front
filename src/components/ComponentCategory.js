import React from 'react';

function ComponentCategory({ produtos, setProdutos, useFixedProduct, setFixedProduc }) {

    const altAndSenderFilter = val => {
        setProdutos(useFixedProduct.filter(data => data.categoria === val))
    }

    const altFilter = val => {
        return useFixedProduct.filter(data => data.categoria === val)
    }

    return (
        <div className="categorias">
            <h3>Categorias</h3>
            <ul>
                <li>
                    <button type="button" onClick={() => setProdutos(useFixedProduct)}>Todos ({useFixedProduct.length})</button>
                </li>
                <li>
                    <button type="button" onClick={() => altAndSenderFilter('geladeira')}>Geladeiras ({altFilter('geladeira').length})</button>
                </li>
                <li>
                    <button type="button" onClick={() => altAndSenderFilter('fogao')}>Fogões ({altFilter('fogao').length})</button>
                </li>
                <li>
                    <button type="button" onClick={() => altAndSenderFilter('microondas')}>Fogões ({altFilter('microondas').length})</button>
                    </li>
                <li>
                    <button type="button" onClick={() => altAndSenderFilter('Lavadora de Roupas')}>Lavadora de roupas ({altFilter('Lavadora de Roupas').length})</button>
                </li>
                <li>
                    <button type="button" onClick={() => altAndSenderFilter('Lavadoura de Louças')}>Lavadora de Louças ({altFilter('Lavadoura de Louças').length})</button>
                </li>
            </ul>
        </div>
    )
}

export default ComponentCategory;