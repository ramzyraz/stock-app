import { Link } from "react-router-dom";

const Page404 = () => {
    return (  
        <div className="page404">
            <h1 style={{ paddingBottom: "20px" }}>404 / Page Not Found</h1>
            <h4>Go back to <Link to="/">Homepage</Link></h4>
        </div>
    );
}
 
export default Page404;