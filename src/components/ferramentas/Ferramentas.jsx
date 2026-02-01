// 1. Importação das imagens (ajuste os caminhos conforme sua pasta assets)
import imgOvulacao from '../../assets/img/Vector.png';
import imgGravidez from '../../assets/img/calendariogravidez.png';
import imgConcepcao from '../../assets/img/concepcao.png';
import imgSexoBbe from '../../assets/img/sexo-bebe.png';
import imgPeso from '../../assets/img/peso.png';
import './ferramentas.css';

// 2. O "Array de Dados": Aqui fica o conteúdo. 
// Se precisar mudar um nome ou trocar uma imagem, você mexe apenas aqui.
const LISTA_FERRAMENTAS = [
  { id: 1, nome: "Calculadora Ovulação", icone: imgOvulacao },
  { id: 2, nome: "Calculadora da Gravidez", icone: imgGravidez },
  { id: 3, nome: "Calculadora da data da Concepção", icone: imgConcepcao },
  { id: 4, nome: "Calculadora chinesa do sexo do bebê", icone: imgSexoBbe },
  { id: 5, nome: "Calculadora do ganho de peso na gravidez", icone: imgPeso },
];

// 3. Componente de Item (O "molde" do li)
// Ele recebe os dados via props e decide como exibi-los.
function ItemFerramenta({ nome, icone }) {
  return (
    <li className="ferramenta-item">
      <div className="icone-wrapper">
        <img src={icone} alt={nome} />
      </div>
      <h3>{nome}</h3>
    </li>
  );
}

// 4. Componente Principal
export default function Ferramentas() {
  return (

    <section className="ferramentas-container">
      <h2 className="titulo-secao">Ferramentas</h2>
      
      <ul className="ferramentas-lista">
        {/* O .map percorre o array e para cada objeto cria um <ItemFerramenta /> */}
        {LISTA_FERRAMENTAS.map((ferramenta) => (
          <ItemFerramenta 
            key={ferramenta.id} 
            nome={ferramenta.nome} 
            icone={ferramenta.icone} 
          />
        ))}
      </ul>
    </section>
  );
}