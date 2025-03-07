import styled from 'styled-components';
// import {Link} from "react-router";

const StyledFooter=styled.footer`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(1px + 1vw);
    background-color: lightblue;
`;

export default function Footer(){
    return(
        <>
            <StyledFooter>
                {/*<p>All rights reserved by Amelia Liston <Link to={`/credits`}>Credits</Link> &#169;</p>*/}
                <p>All rights reserved by Amelia Liston &#169;</p>
            </StyledFooter>
        </>
    );
}