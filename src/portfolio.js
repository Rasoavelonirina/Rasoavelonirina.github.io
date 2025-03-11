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
    url: "https://rasoavelonirina.github.io/",
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
    "https://drive.google.com/file/d/1zYcE7Zc_rPQc4VZyAeN8FIe0Ixk46NN1/view?usp=drive_link",
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
    link: "https://www.linkedin.com/in/danielson1406",
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
        "⚡ Developing a simple web based application with Django or Flask",
        "⚡ Creating application backend in Node, Django & Flask",
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
      subtitle: "Master in Telecommunication",
      logo_path: "Polytechnique-logo.png",
      alt_name: "E.S.P.A",
      duration: "2016 - 2018",
      descriptions: [
        "⚡ Specialization in image processing systems",
        "⚡ Development of an ML object recognition model using OPEN CV",
        "⚡ Development of an ML model for TELECOMMUNICATION CUSTOMER CHURN PREDICTION using Matlab",
      ],
      website_link: "https://www.polytechnique.mg",
    },
    {
      title: "Ecole Superieur Polytechnique d'Antananarivo (E.S.P.A)",
      subtitle: "Telecommunication license",
      logo_path: "Polytechnique-logo.png",
      alt_name: "E.S.P.A",
      duration: "2013 - 2016",
      descriptions: [
        "⚡ I've learned the basics of GSM communication (2g, 3G)",
        "⚡ I have studied the different systems and algorithms of image, video and sound compression.",
        "⚡ I also learned the fundamental mathematics of image processing and GSM signal processing.",
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
        "https://www.udacity.com/certificate/e/c3180348-4e3f-11ea-8640-8f65f9dfb855",
      alt_name: "UDACITY",
      color_code: "#ffffffff",
    },
    {
      title: "Data Engineering, Big Data, and Machine Learning on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://coursera.org/share/93ffd740c37fe1ef562b5c68a7e56bc0",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Serverless Data Analysis with Google BigQuery and Cloud Dataflow",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://coursera.org/share/0ff38ffbdd0476e33469ff21b37173ae",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Resilient Streaming Systems on Google Cloud Platform",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://coursera.org/share/018c62506216162bb5864dd669913204",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Google Cloud Big Data and Machine Learning Fundamentals",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://coursera.org/share/97b47cbf015694f5dbc27111d541d6e8",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Serverless Machine Learning with Tensorflow on Google Cloud Platform",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://coursera.org/share/a583d11bfe3722d569d4645423d8290c",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Leveraging Unstructured Data with Cloud Dataproc on Google Cloud Platform",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://coursera.org/share/4bb503285f409625e828c2c55a9ed708",
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
            [
              "⚡At Orange Madagascar, I was responsible for both data quality and the improvement of existing processing procedures. This involved refactoring shell, awk and php code into python. ",
              "⚡One of my main goals was to improve the performance of Talend and Nify jobs. ",
              "⚡As data quality manager, I developed a simple statistical model to detect data anomalies then improved it using ML models. ",
              "⚡At the very beginning of my contract, I was involved in drawing up dashboards for the business teams using Qlik Sense and Power BI."
            ],
            color: "#000000",
        },
        {
          title: "Data Manager & Backend Developer",
          company: "RAVATE.",
          company_url: "https://www.ravate.com/",
          logo_path: "ravate_logo.png",
          duration: "Mars 2021 - Fevrier 2022",
          location: "Remote: Réunion",
          description:[
            "⚡Ravate is an e-commerce company. My role there was to design pipelines for data collection and preparation. ",
            "⚡At the same time, I was responsible for designing data storage solutions, such as data warehouses and data lakes. ", 
            "⚡It was at RAVATE that I became familiar with Terraform for the deployment of our API solutions to AWS.",
          ],
          color: "#000000",
        },
        {
          title: "Data Engineer",
          company: "Argos Veterinaire.",
          company_url: "https://www.argos-veterinaire.com/",
          logo_path: "argos_veterinaire_logo.png",
          duration: "Decembre 2020 - Mars 2021",
          location: "Remote: Montpellier, France",
          description:
          [
            "⚡Data pre-processing for odoo compliance. The main aim of the project was to migrate data from the old platform to odoo. ",
            "⚡Development of new DAGs and TASKs with Airflow, enabling customers to migrate their own data.",
          ],
            color: "#fc1f20",
        },
        {
          title: "Talend Developer",
          company: "Ghanty Groupe.",
          company_url: "https://www.ghanty.re/",
          logo_path: "groupe_ghanty_logo.jpeg",
          duration: "2020 - Mars 2021",
          location: "Remote: Réunion",
          description:
          [
            "⚡At Ghanty, As a talend developer, I had to develop different types of JOB to meet the company's requirements. These included synchronization JOBs, cleaning JOBs, real-time processing JOBs and, not forgetting, reporting JOBs."
          ],
            color: "#fc1f20",
        },
        {
          title: "Data Scientist",
          company: "E-Tech Consulting.",
          company_url: "https://etechconsulting-mg.com",
          logo_path: "etech.png",
          duration: "Nov 2018 - Dec 2023",
          location: "Antananarivo, Madagascar",
          description:
          [
            "⚡Development of a conversational chatbot based on Google Assitant. This chatbot has the ability to converse via IP phones. ",
            "⚡Computer vision for home object recognition. ",
            "⚡Lip-synchronization as an introduction to 4D translation. "
          ],
          color: "#fc1f20",
        }
      ],
    },
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
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with large-scale projects. As long as we're talking about data processing or data reporting, I'm ready to give my all to satisfy my customers.",
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
    subtitle: "(+261)34-71-147-49 / (+261)32-19-152-16",
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
  //publications,
  contactPageData
};
