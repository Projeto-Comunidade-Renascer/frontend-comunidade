import { FaRegHeart, FaRegComment } from 'react-icons/fa';
import '../postagem/post.css'

const Postagem = () => {
  return (
    <article className="post-card">
      {/* Cabeçalho: Foto, Nome e Horário */}
      <div className="post-header">
        <div className="user-meta">
          <img 
            src="https://i.pravatar.cc/150?u=maria" 
            alt="Usuário" 
            className="post-avatar" 
          />
          <span className="post-author">Maria Silva</span>
        </div>
      </div>

      {/* Texto do Post */}
      <div className="post-body">
        <p>
          Compartilhando minhas experiências: o sono é essencial! Aqui vão algumas 
          dicas práticas para sobreviver ao primeiro mês.
        </p>
      </div>

      {/* Área da Imagem */}
      <div className="post-media">
        <img 
          src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9" 
          alt="Conteúdo do post" 
          className="content-img" 
        />
      </div>

      {/* Rodapé: Ícones à esquerda e Tempo à direita */}
      <div className="post-footer">
        <div className="post-interactions">
          <FaRegHeart className="post-icon" />
          <FaRegComment className="post-icon" />
        </div>
        <span className="post-timestamp">Há 3 minutos</span>
      </div>
    </article>
  );
};

export default Postagem;