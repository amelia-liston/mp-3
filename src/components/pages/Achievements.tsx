import StyledMain from '../styled-components/StyledMain';
import StyledContentSection from "../styled-components/StyledContentSection.tsx";
import StyledHeader2 from "../styled-components/StyledHeader2.tsx";
import StyledUL from "../styled-components/StyledUL";

export default function Achievements() {
    return(
        <>
            <StyledMain>
                <StyledHeader2>Awards</StyledHeader2>
                <StyledContentSection>
                    <h3><i>Judges Choice: Innovation Award</i></h3>
                    <p>Won the Innovation Award after presenting the project to judges for the impressive idea, technical execution, and UI/UX design.</p>
                </StyledContentSection>
                <br/>
                <StyledContentSection>
                    <h3><i>Best Hack Overall</i></h3>
                    <p>Won Best Overall Hack for project created with 5 team members in response to solving sustainability issues in food waste.</p>
                </StyledContentSection>
                <StyledHeader2>Other Achievements</StyledHeader2>
                <StyledContentSection>
                    <h3><i>Dean's List for 5 Semesters</i></h3>
                </StyledContentSection>
                <StyledHeader2>Skills</StyledHeader2>
                <StyledUL>
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
                </StyledUL>
            </StyledMain>
        </>
    );
}