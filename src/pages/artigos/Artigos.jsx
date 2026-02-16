import artigoImg from "../../assets/img/artigo.png";
import "./artigos.css";

function Artigos() {
  return (
    <main className="conteudo-principal">
      <div className="artigo-comunidade">
        <div className="img-artigo-sec">
          <img src={artigoImg} alt="grávida" className="artigo-img" />
        </div>
        <div className="sec-artigo-nossa-comunidade">
          <h2>Artigos da Comunidade</h2>
          <p>
            Um espaço criado para informar, acolher e apoiar mulheres em
            diferentes fases da vida. Aqui você encontra conteúdos confiáveis
            sobre maternidade, saúde e bem-estar, pensados para ajudar na
            compreensão do corpo, das emoções e das transformações que fazem
            parte dessa jornada. Informação com sensibilidade, para você se
            sentir segura e acompanhada.
          </p>
        </div>
      </div>

      <div className="carrosel-artigo" id="art">
        <h2>Artigos Mais Recentes</h2>
      </div>
    </main>
  );
}

export default Artigos;
