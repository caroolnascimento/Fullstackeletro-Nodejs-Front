import React from 'react';

// import { Container } from './styles';

function Lojas() {
    return (
        <React.Fragment>
            <header>
                <br />
                <h2 className="display-6 font-weight-bold"><center>NOSSAS LOJAS</center></h2>
                <hr />
            </header>
            <nav>
                <section>

                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card text-white bg-danger mb-3">
                                <div class="card-body">
                                    <h5 class="card-title font-weight-bold">SÃO PAULO</h5>
                                    <p class="card-text">
                                        <p>Rua São Dário, 257</p>
                                        <p>11 ºandar</p>
                                        <p>Butantã</p>
                                        <p>(11) 0000-0000</p>
                                    </p>
                                </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="card text-white bg-danger mb-3">
                                    <div class="card-body">
                                        <h5 class="card-title font-weight-bold">RIO DE JANEIRO</h5>
                                        <p class="card-text">
                                            <p>Avenida Nossa Senhora de Copacabana, 897</p>
                                            <p>9 ºandar</p>
                                            <p>Copacabana</p>
                                            <p>(21) 3333-3333</p>
                                            </p>
                                            
                                    </div>
                                    </div>
                                </div>
                            </div>
                </section>

                        <br /><br /><br /><br /><br />
            </nav>
        </React.Fragment >
    )
}

export default Lojas;