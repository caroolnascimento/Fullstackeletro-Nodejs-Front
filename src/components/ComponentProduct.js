import React from 'react';

function ComponentProduct({ data }) {

    const { categoria, imagem, descricao, precoantigo, precofinal } = data;

    return (
        <div className="box_produtos bg-white" style={{ display: 'block' }} id={categoria}>
            <img className="imgs img-fluid" src={`images/${imagem}`} alt = "Refrigerador Electrolux" width = "120px" />
                <br />
                <div className="descricao">{descricao}</div>
                <hr />
                <strike className="text-danger">{precoantigo}</strike>
                <div className="preco">{precofinal}</div>
	    </div>
    )
}

export default ComponentProduct;