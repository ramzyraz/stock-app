import { useFetch } from "../hooks/useFetch"
import Card from "./Card";

type Props = {
    searchString: string
}

type Stocks = {
    symbol: string
}

const Cards = (props: Props) => {
    const findValue = (elem: string) => elem.toLowerCase().includes(props.searchString.toLowerCase());
    const { data } = useFetch('https://yfapi.net/v1/finance/trending/US');

    return (
        <div className="cards">
            <div className="cards-title"><h2>Trending Indexes</h2></div>
            {
                data ? (
                    <div className="container-fluid">
                        <div className="row text-center wrapper">
                            {
                                data && data?.finance?.result.length > 0 && data?.finance?.result[0].quotes.map((stocks: Stocks) => {
                                    if (findValue(stocks.symbol)) {
                                        return (
                                            <Card
                                                key={stocks.symbol}
                                                symbol={stocks.symbol}
                                            />
                                        )
                                    }
                                    else {
                                        return null
                                    }
                                })
                            }
                        </div>
                    </div>
                ) : (
                    <div>Loading...</div>
                )
            }            
        </div>
    )
}

export default Cards;