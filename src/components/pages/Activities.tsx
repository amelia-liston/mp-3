import StyledMain from '../styled-components/StyledMain.tsx';
import StyledContentSection from '../styled-components/StyledContentSection';
import StyledHeader1 from "../styled-components/StyledHeader1.tsx";
import StyledUL from "../styled-components/StyledUL";


export default function Activities(){
    return(
        <>
            <StyledMain>
                <StyledHeader1>Activities</StyledHeader1>
                <StyledContentSection>
                    <h3>Girls Who Code E-Board | January 2023 - Present</h3>
                    <h4><i>President / Vice President / Bytes Lead</i></h4>
                    <ul>
                        <li>Managed and facilitated the Bits & Bytes program with 1 other lead to supervise 18
                            undergraduate student facilitators and 60+
                            students to teach students in grades 3-12 how to code in Python and Scratch through 6 weekly
                            workshops.
                        </li>
                        <li>Organized 10+ events with an attendance of 60+ students, taught Figma and coding workshops,
                            and curated weekly newsletter.
                        </li>
                    </ul>
                </StyledContentSection>
                <br/>
                <StyledContentSection>
                    <h3>PMReady E-Board | May 2023 - Present</h3>
                    <h4><i>Secretary</i></h4>
                    <ul>
                        <li>Creates and distributes a bi-weekly engaging newsletter and other communication materials to
                            keep members informed and
                            engaged throughout the semester, and as a result boosting email click-through rate by 15%.
                        </li>
                        <li>Supervises and mentors team of 5 students through the product lifecycle for a semester-long
                            project of a mobile application.
                        </li>
                    </ul>
                </StyledContentSection>
                <br/>
                <StyledContentSection>
                    <h3>Girls Who Code Bits & Bytes Program | Fall 2022</h3>
                    <h4><i>Bits Facilitator</i></h4>
                    <ul>
                        <li>Led hour-long lessons in Scratch to 10-15 elementary students to promote students’ interest
                            in coding.
                        </li>
                        <li>Guided and assisted fellow facilitators in lessons; initiated and designed 6 coding
                            practices for students.
                        </li>
                    </ul>
                </StyledContentSection>
                <h2>Activities</h2>
                <StyledUL>
                    <li>Grace Hopper Convention | October 2024</li>
                    <li>Spark! Civic Tech Hackathon | Spring 2024</li>
                    <li>Boston Hacks | Fall 2023</li>
                    <li>Spark! Mini-Hackathon | October 2023</li>
                    <li>Cal Hacks | June 2023</li>
                </StyledUL>
            </StyledMain>
        </>
    );
}