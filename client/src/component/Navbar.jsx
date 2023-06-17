import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="flex justify-between px-10 py-5">
            <span className="text-xl">Shrinky</span>
            <ul className="flex space-x-10">
                <li className="cursor-pointer ">
                    <Link to="/">Home</Link> 
                </li>
                <li className="cursor-pointer ">
                    <Link to='/allUrl'>All Links</Link>
                </li>
            </ul>
        </nav>
    );
}
