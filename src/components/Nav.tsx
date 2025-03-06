import { Link } from "react-router";
import styled from "styled-components";

const StyledNav = styled.nav`
    width: 30%;
`;



export default function Nav() {
    return (
        <>
            <StyledNav>
                <ul>
                    <li><Link to={"/"}>About</Link></li>
                    <li><Link to={"/employment"}>Employment</Link></li>
                    <li><Link to={"/achievements"}>Achievements</Link></li>
                    <li><Link to={"/education"}>Education</Link></li>
                    <li><Link to={"/activities"}>Activities</Link></li>
                    <li><Link to={"/projects"}>Projects</Link></li>
                </ul>
            </StyledNav>
        </>
    )
}