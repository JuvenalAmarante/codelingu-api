import React from "react";
import "./SignUp.css";
import logo from "./imagens/logo  1.jpg";

const SignUp = () => {
    return (
        <div className="Conta">
            <div className="Imagem">
                <img
                    src={logo}
                    alt="Logotipo da empresa"
                    title="Logo da empresa"
                />
            </div>

            <div className="Dados">
                <div className="containerDados">
                    <h1 className="Codelingu"> CODELINGU </h1>
                    <h3 className="texto">Crie sua conta</h3>

                    <div className="email">
                        <p className="emailtexto">Usuario</p>
                        <input
                            type="email"
                            name="email"
                            placeholder="Digite seu nome de Usuario"
                            autocomplete="off"
                        />
                    </div>

                    <div className="email">
                        <p className="emailtexto">E-mail</p>
                        <input
                            type="email"
                            name="email"
                            placeholder="Digite seu e-mail"
                            autocomplete="off"
                        />
                    </div>


                    <div className="Senha">
                        <p className="senhatexto">Senha</p>
                        <input
                            className="SenhaInput"
                            type="password"
                            name="senha"
                            placeholder="Escolha sua senha"
                        />
                    </div>

                    <div className="Senha">
                        <p className="senhatexto">Confirmar Senha</p>
                        <input
                            className="SenhaInput"
                            type="password"
                            name="senha"
                            placeholder="Repita sua senha"
                        />
                    </div>

                    <a href="/Home" className="button">
                        Criar
                    </a>

                    <div className="ContaNova">
                        <a className="SemConta" href="#">
                            Ja tem conta?
                        </a>
                        <br></br>
                        <a className="Inscrito" href="/">
                            Realize o Login
                        </a>
                    </div>

                    
                </div>
            </div>
        </div>
    );
};

export default SignUp;