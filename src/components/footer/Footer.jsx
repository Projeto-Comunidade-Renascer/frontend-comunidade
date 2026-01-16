import "./footer.css";

const Footer = () => {

  let data = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="top">
        <div className="contatos">
          <h3 className="nome_logo">Renascer Mulher</h3>
          <p className="texto_logo">Conectando mulheres através de um clique.</p>
        </div>

        <div className="contatos">
          <h4>Links Rápidos</h4>
          <ul className="links">
            <li><a href="#">Como Funciona</a></li>
            <li><a href="#">Regras da Comunidade</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </div>

        <div className="contatos">
          <h4>Suporte</h4>
          <ul className="links">
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Termos de Uso</a></li>
            <li><a href="#">Privacidade</a></li>
            <li><a href="#">Ajuda</a></li>
          </ul>
        </div>

        <div className="contatos">
          <h4>Redes Sociais</h4>
          <p className="texto_redes">Siga-nos para novidade e dicas de maternidade!</p>
        </div>
      </div>

      <div className="bottom">
        <p>
          &copy; {data} Renascer Mulher. Todos os direitos reservados. Feito com 🤎
          para uma maternidade acolhedora.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
