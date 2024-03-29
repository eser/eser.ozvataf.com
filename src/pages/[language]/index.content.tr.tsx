import React from "react";
import { Container, Grid, Header, Label, Segment } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faChalkboardTeacher,
  faExternalLinkSquareAlt,
  faTools,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faHashnode,
  faSpeakerDeck,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import styles from "./page.module.css";

const HomePageContentTurkish = function HomePageContentTurkish() {
  return (
    <Grid>
      <Grid.Column mobile={16} tablet={16} computer={9}>
        <Segment>
          <Label ribbon className={styles["label-left"]}>
            <FontAwesomeIcon icon={faAddressCard} /> Hakkımda
          </Label>
          <Container className={styles.boxed}>
            As a <strong>technical generalist</strong>{" "}
            who believes my organizational skills, abstraction and
            out-of-the-box-thinking are my strengths, I have taken various
            professional roles in the IT field <strong>since 2001</strong>.
            <br />
            <br />
            I have started my career as a <strong>Developer</strong>{" "}
            and continued with many duties as{" "}
            <strong>Software Architect</strong>,{" "}
            <strong>Delivery Manager</strong>,{" "}
            <strong>Engineering Manager / Director</strong>, and{" "}
            <strong>DevRel</strong>. Over the years, I have gained experience in
            leading value delivery of multiple product groups no matter how they
            are specialized, located and distributed.
            <br />
            <br />
            Currently, -undoubtedly, due to the effect of the pandemic- I am
            working for &ldquo;Açık Yazılım&rdquo; which is founded by myself
            and delivers <strong>consultancy and software development</strong>
            {" "}
            work to its contracted customers.
          </Container>
        </Segment>

        <Segment>
          <Label ribbon className={styles["label-left"]}>
            <FontAwesomeIcon icon={faTools} /> Uzmanlaştığım Tech Stackler
          </Label>
          <Container className={styles.boxed}>
            <Header as="h4">Programming Languages</Header>
            <div>
              JavaScript, Python, PHP, C#, Java, C++, C, Pascal, Basic
            </div>

            <Header as="h4">
              Application and Virtualization Platforms
            </Header>
            <div>
              Kubernetes, Docker, AWS Lambda, AWS ECS,{" "}
              AWS Elasticbeanstalk, Azure AppServices, Azure AKS,{" "}
              GCP GKE Autopilot
            </div>

            <Header as="h4">Cloud Providers</Header>
            <div>
              Amazon Web Services (AWS), Microsoft Azure, Google{" "}
              Cloud Platform (GCP)
            </div>

            <Header as="h4">Runtimes</Header>
            <div>
              .NET, JVM, Node.js, Deno
            </div>

            <Header as="h4">Databases</Header>
            <div>
              Postgres, MySQL, MariaDB, Mongodb, SQL Server, Oracle
            </div>

            <Header as="h4">
              Frontend Tools, Libraries and Frameworks
            </Header>
            <div>
              React, Next.js, jQuery, Knockout.js, Backbone,{" "}
              React Hooks, Redux, Apollo, webpack
            </div>

            <Header as="h4">
              Backend Tools, Libraries and Frameworks
            </Header>
            <div>
              Serverless Framework, Express, Django, Graphene GraphQL
            </div>

            <Header as="h4">
              DevOps Tools, Libraries and Frameworks
            </Header>
            <div>
              Istio, Linkerd, Prometheus, Grafana, Helm, Terraform
            </div>
          </Container>
        </Segment>
      </Grid.Column>

      <Grid.Column mobile={16} tablet={16} computer={7}>
        <Segment>
          <Label ribbon="right" className={styles["label-right"]}>
            İçerik Üretimi ve Konuşmalar{" "}
            <FontAwesomeIcon icon={faChalkboardTeacher} />
          </Label>
          <Container
            className={`${styles.boxed} ${styles["links-with-icons"]}`}
          >
            I stream and publish some videos about software development on{" "}
            <a href="https://youtube.com/EserOzvataf">
              <FontAwesomeIcon icon={faYoutube} /> YouTube
            </a>
            .
            <br />
            <br />

            As a highly contributing{" "}
            <a href="https://github.com/eserozvataf">
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>{" "}
            user, I try to contibute and create new open source projects (had
            approximately 140 public repositories last time I checked).

            <br />
            <br />

            As long as I get invited, I attend conferences and meetups as a
            speaker. Presentations of my speeches can be found at{" "}
            <a href="https://speakerdeck.com/eser">
              <FontAwesomeIcon icon={faSpeakerDeck} /> SpeakerDeck
            </a>
            .

            <br />
            <br />

            I write articles for my personal blog on{" "}
            <a href="https://eser.hashnode.dev">
              <FontAwesomeIcon icon={faHashnode} /> Hashnode
            </a>{" "}
            and for{" "}
            <a href="https://acik-kaynak.org/">
              <FontAwesomeIcon icon={faExternalLinkSquareAlt} /> açık-kaynak.org
            </a>{" "}
            which is a open-source related newsletter.{" "}
            Also I share my personal opinions and experiences on{" "}
            <a href="https://twitter.com/eserozvataf">
              <FontAwesomeIcon icon={faTwitter} /> Twitter
            </a>
            .
          </Container>
        </Segment>

        <Segment>
          <Label ribbon="right" className={styles["label-right"]}>
            <FontAwesomeIcon icon={faUserGraduate} />{" "}
            Soft ve Senior Seviye Beceriler
          </Label>
          <Container className={styles.boxed}>
            <Header as="h4">Architectural Concepts</Header>
            <div>
              Functions as a Service (FaaS), Serverless, Microservices, Domain
              Driven Design (DDD)
            </div>

            <Header as="h4">Cultural Adoptations</Header>
            <div>
              Agile, Kaizen, DevOps, Software Craftsmanship, Data-Driven
              Decision-Making (DDDM), Cross-Functional Product Teams
            </div>

            <Header as="h4">Planning</Header>
            <div>
              User Story Mapping, Release Roadmaps, Objectives and Key Results
              (OKR)
            </div>

            <Header as="h4">Project Management Frameworks</Header>
            <div>
              SCRUM, Kanban
            </div>
          </Container>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export { HomePageContentTurkish, HomePageContentTurkish as default };
