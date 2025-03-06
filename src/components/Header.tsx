import styled from 'styled-components';

const HeaderWrapper=styled.header`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(2px + 2vw);
    background-color: gray;
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