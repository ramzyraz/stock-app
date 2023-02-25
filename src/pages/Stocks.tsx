import { useLocation } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import LineChart from '../components/Chart';
import Loading from '../components/Loading';

const Stocks = () => {
    const { state } = useLocation();
    const { data } = useFetch(`https://yfapi.net/v8/finance/chart/${state}?range=1mo&interval=1d`);
    const summary = data?.chart?.result[0]?.meta;
    const chartData = {
        labels: data?.chart?.result[0]?.timestamp.map((elem: number) => new Date(elem * 1000).toLocaleDateString("en-US")),
        datasets: [{
            label: 'Changes Reflected Daily',
            data: data?.chart?.result[0]?.indicators?.quote[0]?.close,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderWidth: 1
        }],
    }

    return ( 
        <>
            {
                !data ? (
                    <Loading />
                ) : (
                    <div className="stock-row">
                        <div className="stock-column-data">                            
                            <h2><span style={{ color: "black" }}><span className='summary-span'>{ summary?.exchangeName } ({summary?.symbol})</span> ${summary?.regularMarketPrice}</span></h2>
                            <div className='stock-headings'>
                                <h4><span className='summary-span'>Exchange Name:</span><span className='summary-detail'> {" "} {summary?.exchangeName}</span></h4>
                                <hr /><br />
                                <h4><span className='summary-span'>Instrument Type:</span><span className='summary-detail'>{" "} {summary?.instrumentType}</span></h4>
                                <hr /><br />
                                <h4><span className='summary-span'>Previous Close Price:</span><span className='summary-detail'>{" "} ${summary?.chartPreviousClose}</span></h4>
                                <hr /><br />
                                <h4><span className='summary-span'>Current Price:</span><span className='summary-detail'>{" "} ${summary?.regularMarketPrice}</span></h4>        
                                <hr /><br />
                            </div>
                        </div>
                        <div className="stock-column-chart">
                            <LineChart chartData={chartData} />
                        </div> 
                    </div>
                )
            }
        </>
     );
}
 
export default Stocks;