import {Link} from "react-router";

export function Navigation() {
    return (
    <>
        <header>
            <nav>
                <div style={{"position": "sticky", "top": "0px","border": "1px solid white"}}>
                    <Link to="/" style={{"margin":"1rem"}}>Home</Link>
                    <Link to="/add" style={{"margin":"1rem"}}>Add Customer</Link>
                    <Link to="/update" style={{"margin":"1rem"}}>Update Customer</Link>
                    <Link to="/delete" style={{"margin":"1rem"}}>Delete Customer</Link>
                </div>
            </nav>
        </header>
    </>
)
}