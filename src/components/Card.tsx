import { useNavigate } from 'react-router-dom';

type Props = {
    symbol: string
}

const Card = (props: Props) => {
    const navigate = useNavigate();

    return (
      <div className="card">
        <div className="card__body">
          <h2 className="card__title">{props.symbol}</h2>
        </div>
        <button className="card__btn" onClick={() => navigate(`/stocks/:${props.symbol}`, { state: props.symbol})}>View Details</button>
      </div>
    );
}

export default Card;