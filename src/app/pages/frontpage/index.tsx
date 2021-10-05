import React from "react";

import {
    Container,
    Grid,
    Header,
    Label,
    List,
    Segment,
} from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAddressCard,
    faChalkboardTeacher,
    faExternalLinkSquareAlt,
    faTools,
} from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
    faMedium,
    faSpeakerDeck,
    faTwitch,
    faTwitter,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import styles from "./styles.module.scss";

function Frontpage() {
    return (
        <>
            <Container>
                {/* <Responsive minWidth={Responsive.onlyComputer.minWidth}> */}
                <Header as="h1" className={styles.homeHeader}>Eser Ozvataf</Header>
                {/* </Responsive> */}

                <Grid>
                    <Grid.Column mobile={16} tablet={16} computer={9}>
                        <Segment>
                            <Label ribbon>
                                <FontAwesomeIcon icon={faAddressCard} /> About
                            </Label>
                            <Container className={styles.boxed}>
                                As a technical generalist who believes his organizational
                                skills, abstraction and out-of-the-box-thinking are his
                                strengths, I have taken various professional roles in the
                                IT field since 2001.
                                <br /><br />
                                I have started my career as a Software Developer and
                                continued with many duties such as Software Architect,
                                Delivery Manager, Engineering Manager and Director. In
                                years, I had gained experience in leading value delivery of
                                multiple product groups no matter how they are specialized,
                                located and distributed.
                                <br /><br />
                                Currently, -undoubtedly, due to the effect of the pandemic-
                                I am working for a consulting company named "Açık Yazılım"
                                which is founded by me and delivers consultancy and software
                                development work to its contracted customers.
                            </Container>
                        </Segment>

                        <Segment>
                            <Label ribbon as="a" href="https://medium.com/@eserozvataf">
                                <FontAwesomeIcon icon={faTools} /> Technologies, Platforms and Concepts I expertised
                            </Label>
                            <Container className={styles.boxed}>
                                <Header as="h4">Programming Languages:</Header>
                                <div>
                                    JavaScript, Python, PHP, C#, Java, C++, C, Pascal, Basic
                                </div>

                                <Header as="h4">Application and Virtualization Platforms:</Header>
                                <div>
                                    Kubernetes, Docker, AWS Lambda, AWS ECS,{" "}
                                    AWS Elasticbeanstalk, Azure AppServices
                                </div>

                                <Header as="h4">Cloud Platforms:</Header>
                                <div>
                                    Amazon Web Services (AWS), Microsoft Azure, Google Cloud{" "}
                                    Platform (GCP)
                                </div>

                                <Header as="h4">Runtimes:</Header>
                                <div>
                                    .NET, JVM, node.js, Deno
                                </div>

                                <Header as="h4">Databases:</Header>
                                <div>
                                    Postgres, MySQL, MariaDB, Mongodb, SQL Server, Oracle
                                </div>

                                <Header as="h4">Frontend Tools, Libraries and Frameworks:</Header>
                                <div>
                                    React, jQuery, Knockout.js, Backbone, React Hooks,{" "}
                                    Redux, webpack
                                </div>

                                <Header as="h4">Architectural Concepts:</Header>
                                <div>
                                    FaaS, Serverless, Microservices, Domain Driven Design{" "}
                                    (DDD)
                                </div>
                            </Container>
                        </Segment>
                    </Grid.Column>

                    <Grid.Column mobile={16} tablet={16} computer={7}>
                        <Segment>
                            <Label ribbon="right">
                                Content Creation and Speaking{" "}
                                <FontAwesomeIcon icon={faChalkboardTeacher} />
                            </Label>
                            <Container className={`${styles.boxed} ${styles.linksWithIcons}`}>
                                I stream about software development on{" "}
                                <a href="https://twitch.tv/laroux">
                                    <FontAwesomeIcon icon={faTwitch} /> Twitch
                                </a>.
                                Past recordings can be found at{" "}
                                <a
                                    href="https://www.youtube.com/channel/UCS3eVZDirUNTFrteoJsLP4g"
                                >
                                    <FontAwesomeIcon icon={faYoutube} /> YouTube
                                </a>
                                .
                                <br /><br />

                                As highly contributing{" "}
                                <a href="https://github.com/eserozvataf">
                                    <FontAwesomeIcon icon={faGithub} /> GitHub
                                </a>{" "}
                                user, I try to contibute and create new open source projects
                                (had approximately 120 repositories last time I checked).

                                <br /><br />

                                As long as I get invited I try to attend conferences and meetups
                                as a speaker. Presentations of my speeches can be found at{" "}
                                <a href="https://speakerdeck.com/eser">
                                    <FontAwesomeIcon icon={faSpeakerDeck} /> SpeakerDeck
                                </a>
                                .

                                <br /><br />

                                I write articles for my personal blog on{" "}
                                <a href="https://medium.com/@eserozvataf">
                                    <FontAwesomeIcon icon={faMedium} /> Medium
                                </a>{" "}
                                and for{" "}
                                <a href="https://acik-kaynak.org/">
                                    <FontAwesomeIcon icon={faExternalLinkSquareAlt} /> açık-kaynak.org
                                </a>{" "}
                                which is a open-source related newsletter.
                                {" "}
                                Also I share my personal opinions and experiences on{" "}
                                <a href="https://twitter.com/eserozvataf">
                                    <FontAwesomeIcon icon={faTwitter} /> Twitter
                                </a>
                                .
                                <br />
                                <br />
                            </Container>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </Container>
        </>
    );
}

export { Frontpage as default };
