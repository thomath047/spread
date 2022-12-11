import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <nav className="overflow-hidden flex bg-white shadow px-12 py-5">
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                    <NavLink to="/sets"
                        className="px-3 py-2 flex pointer items-center text-xs uppercase font-bold leading-snug text-black-700 hover:opacity-75"
                    >  Sets
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/favorites"
                        className="px-3 py-2 flex pointer items-center text-xs uppercase font-bold leading-snug text-black-700 hover:opacity-75"
                    > Favorites
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}