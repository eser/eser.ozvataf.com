import React from "react";
import ReactMarkdown from "react-markdown";

function Cv() {
  return (
    <ReactMarkdown
      children={`
## Experience
-------------

### Director, Açık Yazılım

Nov 2020 - Present

An IT project delivery and outsource contractor initiative which provides engineering know-how and work force for its customers.

Achievements:
- Delivered and maintained a contracted work which is a marketplace specialized on holistic wellbeing services
- Provided consultancy to a well-known Turkish Unicorn during their transition to product-based agile teams

Technologies, Platforms and Concepts experienced during the period:
- JavaScript, Python
- Amazon Web Services (AWS), Google Cloud Provider (GCP), Cloudflare
- Kubernetes, Docker, AWS ECS, GCP GKE Autopilot, Cloudflare Pages
- React, React Hooks, Graphene GraphQL, Django


### Coordinator of Projects, Turkish Open Source Platform

Dec 2020 - May 2021

An establishment under the auspices of the Ministry of Industry and Technology of the Turkish state, Turkey Open Source Platform aims to increase the number of software developers Turkey needs, to increase the qualifications of existing software developers and to develop the open source ecosystem. In this respect, the platform performs a similar function to CNCF (CloudNative Foundation) and Linux Foundation.

Achievements:
- Established and facilitated weekly meetings of project groups under five different project topics in order to produce the software needed by the public and private sectors in Turkey with open source software (These topics were Natural Language Processing, Cloud and Database Systems, Mobility, Linux (Pardus) and Digital Badges.)
- Formed collaborations between platform stakeholders
- Planned and kicked off online a webinar series and two hackathons
- Designed an architecture and developed project analysis of a digital badge and verification project
- Assisted and reviewed technical output related with projects


### Software Manager, Setur

Sep 2018 - Nov 2020

Setur is the tourism and duty-free merchandising company of Koç Holding Group of Companies, which is on the Fortune 500 list.

Achievements:
- Led and coached the management during Agile and DevOps transformation
- Redesigned software and product development processes
- Formed and facilitated 9 agile product teams, led 30+ people with various functions (UX, QA, SE, BA etc.)
- Designed company-wide prioritization flow and how product teams function in daily basis. Maintained source and delivery planning of product teams
- Transformed Windows & .NET only ecosystem into polyglot-enabled, linux-containerized, orchestrated and multi-regional infrastructure runs on Kubernetes
- Established software quality assurance and delivery metrics with monitoring, tracing and alerting mechanisms
- Improved IT recruitment processes, attended 300+ recruitment meetings
- Enabled remote and multi-regional development culture
- Organized meetup and training sessions

Technologies, Platforms and Concepts experienced during the period:
- JavaScript, .NET, Java
- Microsoft Azure
- Kubernetes, Docker, Azure AKS, Azure AppServices
- Linux, Windows, macOS - React, React Native
- node.js, Postgres, SQL Server
- Microservices, Domain Driven Design (DDD)
- CloudNative, OpenSource


### Lead Software Developer, KoçSistem

May 2016 - Sep 2018

KoçSistem is the information technology company of Koç Holding Group of Companies, which is on the Fortune 500 list. They offers a wide range of products and services in areas such as Internet of Things, Big Data & Analytics, Security, Corporate Cloud, Corporate Mobility, Business Solutions, Digital Workforce and RPA.

Achievements:
- Kicked off company's main application framework and was first member of the company's DevOps and Software Architecture teams
- Helped other teams to embrace Agile and DevOps practices,
- Took parts of analysis and decisions of company's product choices (such as CMSes, orchestration tools, etc)
- Delivered company's first serverless project runs on AWS Lambda
- Delivered and maintained 3 enterprise solutions to customers
- Attended recruitment meetings as a technical interviewer

Technologies, Platforms and Concepts experienced during the period:
- JavaScript, .NET
- Amazon Web Services (AWS)
- Docker, MongoDB
- node.js, AWS S3, AWS Lambda, AWS Cognito
- FaaS, Domain Driven Design (DDD)


### Software Architect, Mobilex

Sep 2015 - Apr 2016


### E-Commerce Software Consultant, Zaimoglu Holding

Sep 2014 - Aug 2015


### Social Media Oriented Web Development and Research Assistant, Eastern Mediterranean University

Sep 2013 - Sep 2014


### Team Lead, Goldsoft Trading

Jun 2012 - Aug 2013


### Head of Software Development, CMFNet

Jun 2008 - May 2012


### Software Design Engineer, DevBiz

Apr 2006 - Jan 2007


### Backend Developer and System Administrator, Ispro

Mar 2005 - Apr 2006


### Web Developer, Egebilgi

Jun 2004 - Feb 2005


### Web Developer, Sis Hosting

Jan 2001 - Aug 2002



## Education
------------

### Master's Degree - Information and Communication Technologies in Education

2013 - 2019

Eastern Mediterranean University, CGPA: 3.44 / 4.00


### Bachelor of Science - Information Technology

2010 - 2012

Eastern Mediterranean University, CGPA: 3.12 / 4.00


### Associate's Degree - Computer Programming

2002 - 2004

Celal Bayar University, CGPA: 78.77/100



## Certificates and Exams
-------------------------

### LEAD Execution Program - Personal Branding, Reputation and Perception Management Training for Leaders

Sep 2019

Issuer: Koç Holding HR - Koç University


### LEAD Execution Program - Customer Experience

Sep 2019

Issuer: Koç Holding HR - Koç University


### Assessment Center

Aug 2019

Issuer: TAG


### Applied Entrepreneurship Training

Apr 2016

Issuer: KOSGEB


### edx CS-169.1x: Software as a Service

Aug 2013

Issuer: Berkeley (University of California)

[https://verify.edx.org/cert/da723362e8b74500992fc4bc84e5324c](https://verify.edx.org/cert/da723362e8b74500992fc4bc84e5324c)


### edx 6.00x: Introduction to Computer Science and Programming

Jun 2013

Issuer: The Massachusetts Institute of Technology

[https://verify.edx.org/cert/4b90bae7e00a4d94b9793c93339334ba](https://verify.edx.org/cert/4b90bae7e00a4d94b9793c93339334ba)


### Academic Personnel and Graduate Education Exam

May 2012

Issuer: OSYM


### General English (EFL) - Upper-Intermediate (Council of Europe B2)

Jun 2011

Issuer: UKLA


### Project Management Methodologies and Practices

Jun 2011

Issuer: Turkcell Akademi


### MCTS - Microsoft Windows Mobile Application Development

May 2010

Issuer: Microsoft


### MCTS - Microsoft Windows Mobile Designing, Implementing and Managing

May 2010

Issuer: Microsoft

`}
    />
  );
}

export { Cv as default };
