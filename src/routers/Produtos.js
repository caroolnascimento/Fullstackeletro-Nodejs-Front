import React, { useState, useEffect } from 'react';
import ComponentCategory from '../components/ComponentCategory';
import ComponentProduct from '../components/ComponentProduct';

// import { Container } from './styles';

function Produtos() {

    const [useFixedProduct, setFixedProduc] = useState([]);
    const [produtos, setProdutos] = useState([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const resposta = await fetch("http://localhost:3006/")
        const dados = await resposta.json()
        setProdutos(dados);
        setFixedProduc(dados);
    }, []);

    return (
        <React.Fragment>
            <header>
                
            </header>
            <ComponentCategory {...{ produtos, setProdutos, useFixedProduct, setFixedProduc }} />
            <main>
                <section className="produtos bg-white">
                    {produtos.map((data, i) => <ComponentProduct key={i} {...{ data }} />)}
                </section>
            </main>
        </React.Fragment>
    )
}

export default Produtos;