import React from 'react';

// import { Container } from './styles';

function Contato() {
    return (
        <React.Fragment>

            <header>
            <br /> 
                <h2 className="display-5 text-dark font-weight-bold"><center>ENTRE EM CONTATO CONOSCO </center></h2>
                <hr />
            </header>
            <div className="container">
                <div className="email row">
                    <div className="zap col text-center text-dark font-weight-bold">
                        <img className="logo" src="images/email.png" alt="Email" />
                        <p>contato@fullstackeletro.com</p>
                    </div>
                    <div className="whatsapp col text-center text-dark font-weight-bold">
                        <img className="logo" src="images/whatsapp.png" alt="Whatsapp" />
                        <p>(11) 99999-9999</p>
                    </div>
                </div>
            </div>

            <br /> 
            <div className="container">
                <center>
                <form action='' method='get' >
                    <div className="mb-1">
                        <label for="nome" className="form-label text-dark font-weight-bold">NOME</label>
                        <input type="nome" className="form-control" id="nome" name="nome" />
                    </div>
                    <div className="mb-1">
                        <div className="form- text-dark font-weight-bold">
                            <label for="msg">MENSAGEM</label>
                            <textarea className="form-control" id="msg" name='msg' rows="5" cols="100"></textarea>
                        </div>
                    </div>
                    <div className="ml-auto mt-4">
                        <button type="submit" className="btn btn-danger text-white font-weight-bold">ENVIAR</button>
                    </div>
                </form>
                </center>
            </div>

            <br /><br /><br />
            <hr />
        </React.Fragment>
    )
}

export default Contato;