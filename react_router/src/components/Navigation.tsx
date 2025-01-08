import { Link } from "react-router";
import "../assets/Navigation.css";

export function Navigation() {
    return (
        <>
            <header className="bg-sky-200/100 shadow-lg">
                <nav className="px-4 py-3">
                    <div className="flex justify-between items-center">
                        <Link className="custom-link" to="/">Home</Link>
                        <div className="flex space-x-10">
                            <Link className="custom-link" to="/add">Add Customer</Link>
                            <Link className="custom-link" to="/update">Update Customer</Link>
                            <Link className="custom-link" to="/delete">Delete Customer</Link>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}