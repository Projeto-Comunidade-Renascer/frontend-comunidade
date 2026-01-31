import Header from "./../../components/header/Header.jsx";
import './index.css';
import comunidadeImg from '../../assets/img/gravida.png';

function Index() {

    return (
        <>
            <Header />

            <main className="conteudo-principal">
                <div className="sobre-comunidade">
                    <div className="img-comunidade-sec">
                    <img src={comunidadeImg} alt="grávida" className="comunidade-img" />
                    </div>
                    <div className="sec-sobre-nossa-comunidade">
                        <h2>Sobre Nossa Comunidade</h2>
                        <p>Nosso objetivo é criar um espaço acolhedor para compartilhar informações e experiências sobre as dificuldades da gravidez, desafios e dicas da maternidade. Queremos oferecer apoio para que você se sinta ouvida e encorajada a enfrentar os altos e baixos dessa fase tão especial. Além disso, disponibilizamos conteúdos sobre cuidados com a saúde durante a gestação e orientações práticas para o dia a dia com o bebê</p>
                        <button>Participe da comunidade!</button>
                    </div>
                    
                </div>
                
            </main>
        </>
        )

}

export default Index;