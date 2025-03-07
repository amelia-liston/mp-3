import { Link } from "react-router";
import styled from "styled-components";

const StyledLink = styled(Link)`
    padding: 0.25rem;
    margin: 0.25rem;
    text-decoration: none;
    color: rebeccapurple;
`;

const StyledNav=styled.nav`
    justify-content: space-between;
    width: 30%;
    background-color: lavender;

    @media screen and (max-width: 750px){
        width: 100%;
    }
`;

const StyledList=styled.ul`
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: lavender;
    text-align: center;
    
    @media screen and (max-width: 750px){
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        list-style: none;
        padding-left: 0;
    }
`;

const StyledListItem=styled.li`
    font-size: calc(2px + 1.5vw);
    width: 80%;
    background-color:rgb(206, 206, 247);
    padding: 2vh 0;
    margin: 5vh auto;
    border-radius: 7%;
    
    @media screen and (max-width: 750px){
        font-size: calc(2px + 1.5vw);
        padding: 1% .5%;
        margin: 1% .5%;
    }
`;

export default function Nav() {
    return (
        <>
            <StyledNav>
                <StyledList>
                    <StyledListItem><StyledLink to={"/"}>About</StyledLink></StyledListItem>
                    <StyledListItem><StyledLink to={"/employment"}>Employment</StyledLink></StyledListItem>
                    <StyledListItem><StyledLink to={"/achievements"}>Achievements</StyledLink></StyledListItem>
                    <StyledListItem><StyledLink to={"/education"}>Education</StyledLink></StyledListItem>
                    <StyledListItem><StyledLink to={"/activities"}>Activities</StyledLink></StyledListItem>
                    <StyledListItem><StyledLink to={"/projects"}>Projects</StyledLink></StyledListItem>
                </StyledList>
            </StyledNav>
        </>
    )
}