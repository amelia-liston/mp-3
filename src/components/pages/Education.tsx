import StyledMain from '../styled-components/StyledMain.tsx';
import StyledContentSection from '../styled-components/StyledContentSection';

export default function Education() {
    return(
        <>
            <StyledMain>
                <h1>Education</h1>
                <StyledContentSection>
                    <h3>Boston University, College of Arts and Sciences</h3>
                    <h4><i>Bachelor of Arts in Computer Science, with a minor in Business Administration</i></h4>
                    <h4><i>Expected Graduation in May 2026</i></h4>

                    <h4>Relevant Coursework:</h4>
                    <ul>
                        <li>Data Structures</li>
                        <li>Computer Systems</li>
                        <li>Probability in Computing</li>
                        <li>Software Engineering</li>
                        <li>UI/UX Design</li>
                        <li>Analysis of Algorithms</li>
                        <li>Web Development</li>
                        <li>Business Ethics</li>
                        <li>Introduction to Marketing</li>
                        <li>Introduction to Dynamics of Leadership</li>
                        <li>Introduction to Law</li>
                    </ul>
                </StyledContentSection>
                <br/>
                <StyledContentSection>
                    <h3>Menlo Atherton High School</h3>
                    <h4><i>Graduated in June 2022</i></h4>
                    <h4>Relevant Coursework:</h4>
                    <ul>
                        <li>AP Computer Science Principles</li>
                        <li>AP Computer Science A: Java</li>
                        <li>AP Calculus BC</li>
                        <li>AP Physics C: Mechanics</li>
                    </ul>
                </StyledContentSection>
            </StyledMain>
        </>
    );
}