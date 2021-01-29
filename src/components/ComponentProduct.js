import React from 'react';

function ComponentProduct({ data }) {

    const { categoria, imagem, descricao, precoantigo, precofinal } = data;

    return (
        <div className=" font-weight-bold box_produtos text-white bg-dark" style={{ display: 'block' }} id={categoria}>
            <img className="imgs img-fluid" src={`images/${imagem}`} alt = "Refrigerador Electrolux" width = "120px" />
                <br />
                <div className="descricao">{descricao}</div>
                <hr />
                <strike className="text-danger">{precoantigo}</strike>
                <div className="preco">{precofinal}</div>
                <button type="button" class="btn btn-danger">COMPRAR</button>
	    </div>
    )
}

export default ComponentProduct;