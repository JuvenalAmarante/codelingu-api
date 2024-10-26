import React from "react";
import "./Login.css";
import logo from "./imagens/logo  1.jpg";

const LoginPage = () => {
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
                    <h3 className="texto">Acesse sua conta</h3>

                    <div className="email">
                        <p className="emailtexto">E-mail ou Usuario</p>
                        <input
                            type="email"
                            name="email"
                            placeholder="Seu e-mail"
                            autocomplete="off"
                        />
                    </div>

                    <div className="Senha">
                        <p className="senhatexto">Senha</p>
                        <input
                            className="SenhaInput"
                            type="password"
                            name="senha"
                            placeholder="Sua senha"
                        />
                    </div>

                    <a className="SemSenha" href="#">
                        Esqueceu a senha
                    </a>

                    <a href="/home" className="button">
                        Entrar
                    </a>

                    <div className="ContaNova">
                        <a className="SemConta" href="#">
                            Não tem Conta?
                        </a>
                        <br></br>
                        <a className="Inscrito" href="/SignUp">
                            Se inscreva gratuitamente
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
