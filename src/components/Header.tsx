import styled from 'styled-components';

const HeaderWrapper=styled.header`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-size: calc(2px + 2vw);
    background-color: gray;

    @media screen and (max-width: 750px){
        align-items: center;
    }
`;

export default function Header() {
    return(
        <>
            <HeaderWrapper>
                <h1>Amelia Liston</h1>
                <p>My online resume</p>
            </HeaderWrapper>
        </>
    )
}