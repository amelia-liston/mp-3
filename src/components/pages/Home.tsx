import StyledMain from '../styled-components/StyledMain.tsx';
import styled from 'styled-components';
import StyledParagraph from '../styled-components/StyledParagraph';
import StyledHeader1 from "../styled-components/StyledHeader1.tsx";

const StyledImage=styled.img`
    max-width: 50%;
    margin: 1vh 1vw;
`;

const StyledRowContainer=styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
`;

export default function Home() {
    return(
        <>
            <StyledMain>
                <StyledHeader1>About Me</StyledHeader1>
                <StyledRowContainer>
                    <StyledImage src={"/amelia-headshot.jpeg"} alt="amelia"/>
                    <StyledParagraph>
                        My name is Amelia Liston, I'm a junior at <strong>Boston University</strong> pursuing a major in Computer Science and minor in Business
                        Administration. Outside of my classes, I'm President of the <strong>Girls Who Code</strong> chapter at BU, a JEDI Ambassador at BU Spark!,
                        and Secretary for BU <strong>PMReady</strong>. I completed a summer Software Engineering internship for the <strong>Notes App team at Apple</strong> last summer,
                        and will return for the summer of 2025 as well. In addition to Software Engineering, I'm interested in Product and Program
                        Management.
                    </StyledParagraph>
                </StyledRowContainer>
                <StyledParagraph>
                    Welcome to my website, here you will find my <i><strong>Educational</strong></i> and <i><strong>Employment</strong></i> history;
                    as well as other information that may be of interest to you.
                </StyledParagraph>
            </StyledMain>
        </>
    )
}