import StyledMain from '../styled-components/StyledMain';
import styled from 'styled-components';

const StyledAwardSection=styled.div`
    border-left: 6px solid green;
    text-align: left;
    margin: 0 1vw;
    padding: 0 2vw;
`;

const StyledList=styled.ul`
    text-align: left;
`;

export default function Achievements() {
    return(
        <>
            <StyledMain>
                <h2>Awards</h2>
                <StyledAwardSection>
                    <h3><i>Judges Choice: Innovation Award</i></h3>
                    <p>Won the Innovation Award after presenting the project to judges for the impressive idea, technical execution, and UI/UX design.</p>
                </StyledAwardSection>
                <br/>
                <StyledAwardSection>
                    <h3><i>Best Hack Overall</i></h3>
                    <p>Won Best Overall Hack for project created with 5 team members in response to solving sustainability issues in food waste.</p>
                </StyledAwardSection>
                <h2>Other Achievements</h2>
                <StyledAwardSection>
                    <h3><i>Dean's List for 5 Semesters</i></h3>
                </StyledAwardSection>
                <h2>Skills</h2>
                <StyledList>
                    <li>Swift</li>
                    <li>Objective-C</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>HTML</li>
                    <li>JavaScript</li>
                    <li>CSS</li>
                    <li>TypeScript</li>
                    <li>Unix</li>
                    <li>Excel</li>
                    <li>Next.js</li>
                    <li>Express</li>
                    <li>Flask</li>
                </StyledList>
            </StyledMain>
        </>
    );
}