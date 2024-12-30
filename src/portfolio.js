/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Danielson's Portfolio",
  description:
    "Passionate about data engineering, I strive to transform complex sets of information into simple, innovative solutions. Throughout my career, I have explored many facets of this fascinating field. Discover my world with this portfolio",
  og: {
    title: "Danielson RASOAVELONIRINA Portfolio",
    type: "website",
    url: "http://rasdanielson.com/",
  },
};

//Home Page
const greeting = {
  title: "R. Danielson",
  logo_name: "Rasoa Danielson",
  nickname: "Tadiny",
  subTitle:
    "Passionate about data engineering, I strive to transform complex sets of information into simple, innovative solutions. Throughout my career, I have explored many facets of this fascinating field. Discover my world with this portfolio",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository: "https://github.com/Rasoavelonirina/Rasoavelonirina.github.io",
  githubProfile: "https://github.com/Rasoavelonirina",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Rasoavelonirina",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rasoavelonirina-danielson-16399a11b",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:alxe.inadel@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/DanielsonInadel",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/inadel.jkh/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/danielson_inadel",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Egineering",
      fileName: "DataEngineerImg",
      skills: [
        "⚡ Create and maintain data pipelines that automate data extraction, transformation and loading (ETL or ELT).",
        "⚡ Design data storage solutions, such as data warehouses, data lakes or hybrid systems.",
        "⚡ Extract and load data from a variety of sources (databases, APIs, files, IoT systems, etc.).",
        "⚡ Work with data scientists to ensure that the data provided meets their needs."
      ],
      softwareSkills: [
        {
          skillName: "Kafka",
          imageSrc: "kafka-logo.png",
        },
        {
          skillName: "Apache Spark",
          imageSrc: "Apache_Spark_logo.svg.png",
        },
        {
          skillName: "Apache Nifi",
          imageSrc: "apache_nify.webp",
        },
        {
          skillName: "Apache Airflow",
          imageSrc: "apache-airflow.png",
        },
        {
          skillName: "Talend",
          imageSrc: "TalendLogoCoral.png",
        },
        {
          skillName: "Visual TOM",
          imageSrc: "logo-visual-tom.png",
        },
        {
          skillName: "Apache Hadoop",
          imageSrc: "apache_hadoop.webp",
        },
      ],
    },
    {
      title: "Data Visualization",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Translate business needs into key performance indicators (KPIs) and visual objectives.",
        "⚡ Create intuitive graphical representations",
        "⚡ Develop interactive dashboards for end-users.",
      ],
      softwareSkills: [
        {
          skillName: "PowerBI",
          imageSrc: "Power-BI-Logo.png",
        },
        {
          skillName: "QlikView",
          imageSrc: "qlikview-logo.png",
        },
        {
          skillName: "Tableaux",
          imageSrc: "tableau-software.png",
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Terrafrom",
          imageSrc: "terraform-icon.png",
        },
        {
          skillName: "Ansible",
          imageSrc: "ansible-icon.png",
        },
      ],
    },
    {
      title: "Web Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building a simple responsive website front end",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Flask",
          imageSrc: "flask-icon.png",
        },,
        {
          skillName: "FastAPI",
          imageSrc: "fastAPI.png",
        },
        {
          skillName: "Django",
          imageSrc: "django-icon.png",
        }
      ],
    },
    {
      title: "Data Science",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing a scalable production ready models for statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/danielson23",
    }
  ],
};

const degrees = {
  degrees: [
    {
      title: "Ecole Superieur Polytechnique d'Antananarivo (E.S.P.A)",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "Polytechnique-logo.png",
      alt_name: "E.S.P.A",
      duration: "2013 - 2016",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://www.polytechnique.mg",
    },
    {
      title: "Ecole Superieur Polytechnique d'Antananarivo (E.S.P.A)",
      subtitle: "M.S. in Computer Science",
      logo_path: "Polytechnique-logo.png",
      alt_name: "Indiana University Bloomington",
      duration: "2016 - 2018",
      descriptions: [
        "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link: "https://www.polytechnique.mg",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Neural Networks and Deep Learning",
      subtitle: "- Coursera",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/HU7GX5CEEPYK",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "AI Programming",
      subtitle: "- UDACITY",
      logo_path: "udacity-logo.png",
      certificate_link:
        "https:/www.udacity.com/certificate/e/c3180348-4e3f-11ea-8640-8f65f9dfb855",
      alt_name: "UDACITY",
      color_code: "#ffffffff",
    },
  
    {
      title: "DATA ENGINEER GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "Https://coursera.org/verify/P4HV6Q6WQS98",
      alt_name: "Google",
      color_code: "#0C9D5899",
    }
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship ",
  description:
    "Since I finished my studies in Telecommunication, where my speciality was information processing systems, I've been focusing on big data. During my various career paths, I've worked with different local and foreign start-ups as a data engineer.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Data Engineer & Data Quality Manager",
          company: "Orange Madagascar TM.",
          company_url: "https://www.orange.mg/",
          logo_path: "orange_logo.png",
          duration: "Avril 2022 - Present",
          location: "Antananarivo, Madagascar",
          description:
            "...",
          color: "#000000",
        },
        {
          title: "Data Manager & Backend Developer",
          company: "RAVATE.",
          company_url: "https://www.ravate.com/",
          logo_path: "ravate_logo.png",
          duration: "June 2023 - Present",
          location: "Remote: Réunion",
          description:
            "...",
          color: "#000000",
        },
        {
          title: "Data Engineer",
          company: "Argos Veterinaire.",
          company_url: "https://www.argos-veterinaire.com/",
          logo_path: "argos_veterinaire_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "Remote: Montpellier, France",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },
        {
          title: "Talend Developer",
          company: "Ghanty Groupe.",
          company_url: "https://www.ghanty.re/",
          logo_path: "groupe_ghanty_logo.jpeg",
          duration: "Nov 2017 - Dec 2017",
          location: "Remote: Réunion",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },
        {
          title: "Talend Developer",
          company: "E-sanandro.",
          company_url: "https://www.esanandro.com",
          logo_path: "esanandro_logo.jpg",
          duration: "Nov 2017 - Dec 2017",
          location: "Antananarivo, Madagascar",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        }
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Machine Learning Intern",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "May 2022 - Aug 2022",
          location: "San Francisco, USA",
          description:
            "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
          color: "#000000",
        },
        {
          title: "Data Science Research Intern",
          company: "Delhivery Pvt. Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
      ],
    }
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};
const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "danielson_profile.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Lot 106 Ambohidratrimo 105, Antanananarivo, Madagascar",
    locality: "Ambohidratrimo",
    country: "Madagascar",
    region: "Antanananarivo",
    postalCode: "101",
    streetAddress: "Ambohidratrimo 105",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/EH2BgvG9WG86DfqPA",
  },
  phoneSection: {
    title: "Telephone",
    subtitle: "+261 34 71 147 49/+261 32 19 152 16",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData
};
