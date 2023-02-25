const Loading = () => {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card rounded shadow-lg m-2 chart-true">
                        <p className="error-message" style={{ padding: "9px" }}>Loading Data...</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Loading;