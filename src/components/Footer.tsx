import styled from 'styled-components';

const StyledFooter=styled.footer`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(1px + 1vw);
`;

export default function Footer(){
    return(
        <>
            <StyledFooter>
                <p>All rights reserved by Amelia Liston</p>
            </StyledFooter>
        </>
    );
}