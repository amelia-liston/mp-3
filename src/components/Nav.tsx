import { Link } from "react-router";

export default function Nav() {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to={"/"}>About</Link></li>
                    <li><Link to={"/employment"}>Employment</Link></li>
                    <li><Link to={"/achievements"}>Achievements</Link></li>
                    <li><Link to={"/education"}>Education</Link></li>
                    <li><Link to={"/activities"}>Activities</Link></li>
                    <li><Link to={"/projects"}>Projects</Link></li>
                </ul>
            </nav>
        </>
    )
}