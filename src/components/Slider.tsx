import { useFetch }  from "../hooks/useFetch";

type StockAttributesTypes = {
  cryptoTradeable: boolean,
  customPriceAlertConfidence: string,
  exchange: string,
  exchangeDataDelayedBy: number,
  exchangeTimezoneName: string,
  exchangeTimezoneShortName: string,
  firstTradeDateMilliseconds: number,
  fullExchangeName: string,
  gmtOffSetMilliseconds: number,
  language: string,
  market: string,
  marketState: string,
  priceHint: number,
  quoteSourceName: string,
  quoteType: string,
  region: string,
  regularMarketChange: any,
  regularMarketChangePercent: any,
  regularMarketPreviousClose: any,
  regularMarketPrice: any,
  regularMarketTime: any,
  shortName: string,
  sourceInterval: number,
  symbol: string,
  tradeable: boolean,
  triggerable: boolean,
  typeDisp: string
}

const Slider = () => {
  const { data } = useFetch('https://yfapi.net/v6/finance/quote/marketSummary');
  return (
    <div className="slider">
      <div>
      {
        data && data?.marketSummaryResponse?.result.map((item: StockAttributesTypes, idx: number) => {
          return item.regularMarketChange.raw > 0 ?
          (
            <span className='slider-market-raw' key={idx}>
              <span className='slider-name'>{ item.shortName }</span>  
                  {" "}
                  {item.regularMarketPrice.fmt}
              <span style={{ color: "green" }}>{" "} +{item.regularMarketChange.fmt} {" "} (+{item.regularMarketChangePercent.fmt})</span>
            </span>
          ) :
          (
            <span className='slider-market-raw' key={idx}>
              <span className='slider-name'>{ item.shortName }</span>  
                  {" "}
                  {item.regularMarketPrice.fmt}
              <span style={{ color: "red" }}>{" "} {item.regularMarketChange.fmt} {" "} ({item.regularMarketChangePercent.fmt})</span>
            </span>
          )
        })
      }
    </div>
    </div>
  );
};

export default Slider;