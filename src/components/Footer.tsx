import styled from 'styled-components';
import { Link } from 'react-router';

const StyledFooter=styled.footer`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(5px + 1vw);
    background-color: lavender;
    color: black;
    padding: 1vh 1vw;
`;

export default function Footer(){
    return(
        <>
            <StyledFooter>
                <p>All rights reserved by Amelia liston <Link to={`/credits`}>Credits</Link> &#169; </p>
            </StyledFooter>
        </>
    );
}