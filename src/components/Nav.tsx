import { Link } from "react-router";

export default function Nav() {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to={"/"}>About</Link></li>
                    <li><Link to={"/employment"}>Employment</Link></li>
                </ul>
            </nav>
        </>
    )
}