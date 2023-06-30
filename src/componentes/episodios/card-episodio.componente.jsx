import "./card-episodio.css";
/**
 * Componente CardEpisodio - exibe detalhes do episódio.
 *
 * @component
 * @param {any} episodio - O episódio a ser exibido.
 */
const CardEpisodio = ({ episodio }) => {
  return (
    <div className="card-episodio">
      <h4>{episodio.name}</h4>
      <div>
        <span>{episodio.episode}</span>
        <span>Lançado em: {episodio.air_date}</span>
      </div>
    </div>
  );
};

export default CardEpisodio;
