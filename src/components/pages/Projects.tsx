import StyledMain from '../styled-components/StyledMain.tsx';
import StyledContentSection from '../styled-components/StyledContentSection';

export default function Projects() {
    return(
        <>
            <StyledMain>
                <h1>Technical Projects</h1>
                <StyledContentSection>
                    <h3>AccessiScan</h3>
                    <h4>Tech Stack: React, TypeScript, Next.js, MongoDB, Flask, Python, HTML, CSS, JavaScript, Git </h4>
                    <p>
                        Developed a website and Chrome extension on a team with 3 technical teammates and one UI/UX
                        designer to teach students
                        about accessibility, and to scan their websites to determine how accessible it is based on 4 key
                        accessibility types.
                    </p>
                </StyledContentSection>
                <br/>
                <StyledContentSection>
                    <h3>Spark! Bytes Website</h3>
                    <h4>Tech Stack: React, TypeScript, Git</h4>
                    <p>
                        Developed and implemented secure login and signup features using Node.js and JWT, and Ant Design
                        implementing robust user
                        authentication and authorization ensuring seamless user experience with real-time input
                        validation and error handling.
                    </p>
                </StyledContentSection>
                <br/>
                <StyledContentSection>
                    <h3>BUGH</h3>
                    <h4>Tech Stack: React Remix, HTML, CSS, Figma</h4>
                    <p>
                        On October 7, 2023 I participated in Spark!'s Mini-Hack event. The event lasted from 9 am to 9 pm
                        beginning with forming teams,
                        and ending with the awards ceremony. Upon entering the event, I met 5 other participants
                        (Clarissa Chen, Rina Tsegay, Catherine Liu,
                        Naomy Bopela, and Hannah Finn) who would become my incredible team members. The prompts for the
                        hackathon were to build a project
                        that addressed sustainability, food access, or education. Our team immediately became drawn to
                        the idea of building a project related
                        to sustainability and began brainstorming ideas that connected to reducing food waste on our
                        college campus. We eventually landed
                        on the idea of an app that is connected to GrubHub at BU that both allows students to deliver
                        food for one another and allowed students
                        to resell their orders when they were unable to pick up their orders. Our idea touched on two
                        sustainability issues 1) students often
                        order food through DoorDash or other delivery services when they do not have time to pick up
                        their own food, thus creating more carbon
                        emissions, and 2) students often order food on their way to class but are unable to pick up
                        their food because their orders take longer
                        than anticipated to be ready, leading to food waste.
                        Our app offers features such as ordering for delivery which cost an extra delivery fee for
                        students to deliver the food to them. On the
                        other hand, students can deliver food. Let's say one student is near Starbucks and another has
                        ordered from Starbucks to be delivered to
                        their dorm, that student can opt to deliver that order and get paid for it, thus creating more
                        student jobs on campus. Additionally, students
                        can choose to resell their orders for 50% discount. When a student re-lists their orders, other
                        students can see that listing on our other
                        feature labelled "Discounts" where they can pay 50% for another order that has been untouched.
                        We developed our prototype for our project on Figma, and began coding a website version of the
                        app using HTML and CSS in the limited time
                        we had. We also developed a presentation for the judges in Canva. When we were awarded Best Hack
                        Overall, we presented our project on stage
                        in front of the entire event.
                    </p>
                </StyledContentSection>
                <br/>
                <StyledContentSection>
                    <h3>Space News</h3>
                    <h4>Tech Stack: React</h4>
                    <p>
                        During the spring semester of my sophomore year at BU, I took CS391 Software Engineering. In this
                        class, one of the assignments was
                        this project called Space News. We were given the code for general structure of the website, and
                        were tasked with adding a News page and
                        About page. The news page focused on space-related news using Next.js and Ant Design components.
                        The website fetches and displays articles from a public API, and I used various components like
                        article cards, lists, and tables to organize the content. Additionally, I implemented features
                        such as pagination, search functionality, and summary statistics.
                    </p>
                </StyledContentSection>
            </StyledMain>
        </>
    );
}