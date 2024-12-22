import project1 from "../assets/projects/project-1.jpg";

export const HERO_CONTENT = `I am a dedicated software engineer focused on developing complete and efficient applications. I have experience with front-end technologies such as Vue.js and React, as well as back-end technologies like Node.js, PHP, Python, and both relational and non-relational databases. My focus is on creating innovative and scalable solutions that meet user needs and drive business results.`;

export const ABOUT_TEXT = `I am a software engineer with a degree in Computer Science, passionate about developing efficient and scalable applications. My experience spans various roles and technologies, enabling me to deliver impactful solutions for diverse challenges.

Throughout my career, I have continuously honed my expertise in both front-end and back-end development, cloud services, database management, and IT infrastructure. My focus has always been on delivering value through innovative solutions and fostering collaboration to overcome complex challenges and drive results. I thrive in environments that allow me to solve complex problems while constantly learning and adapting to new technologies. In my free time, I enjoy going to the gym, running street races, and cheering for my football team, São Paulo FC. I also love playing video games and spending quality time with my family, balancing both personal and professional life to stay energized and motivated.`;
export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Junior Software Engineer",
    company: "E-Trust",
    description: `I contribute to the maintenance and development of new features in the Horacius identity management system, using technologies such as Vue.js, jQuery, JavaScript, PHP, MySQL, SVN and AWS (IAM). Implementation of agile Kanban methodologies in JIRA, optimizing team efficiency. I perform code tests and reviews, improving code quality and promoting good development practices.
Collaborate in the creation of solutions that increase the usability of the system, positively impacting the user experience. Participate in identifying bugs and resolving problems, contributing to system stability. I take a customer-focused approach, ensuring that new features meet the needs of end users. Improve internal processes through documenting practices and exchanging knowledge with the team, resulting in a collaborative and productive environment.`,
    technologies: ["PHP", "Javascript", "JQuery", "Vue.js", "MySQL", "SVN"],
  },
  {
    year: "2023 - 2024",
    role: "IT Manager",
    company: "Cartório de Registro de Imóveis de Cabreúva",
    description: `I worked as a IT Manager at the Cabreúva Property Registry Office, assuming various responsibilities in the IT infrastructure and data management. I created and managed Linux servers, implementing and maintaining essential systems for the notary's operations. My experience with AWS was remarkable, involving the configuration and maintenance of services such as AWS Bedrock, AWS IAM, AWS S3 and AWS EC2. Developed Python scripts to automate processes and integrate third-party APIs, resulting in a significant improvement in operational efficiency and data security.
Additionally, I explored the Google Cloud platform, using services like Google Storage to store crucial registry data. This work included the configuration and management of cloud resources, contributing to the modernization of infrastructure and optimization of internal processes. I also worked on the implementation and standardization of the registry regarding the LGPD, actively contributing to the creation and documentation of the necessary standards to ensure compliance and data protection. I also highlight my experience with Artificial Intelligence, where I worked with platforms such as OpenAI, Gemini and Claude. I developed skills in prompt engineering, creating models and integrating AI APIs, optimizing automated processes and offering innovative solutions for data management and operations.`,
    technologies: ["Python", "AWS", "Google cloud", "Linux", "AI"],
  },
  {
    year: "2023 - 2023",
    role: "IT Support",
    company: "Open Internet",
    description: `I worked as IT support, performing a variety of functions related to infrastructure and technical support. Configured and implemented monitoring using Zabbix 6, ensuring the integrity and performance of the systems. Developed scripts in Bash and Batch to automate routine tasks, increasing the area's operational efficiency. I was responsible for hardware maintenance, carrying out diagnostics and repairs on computers and peripheral devices. Installed and configured software, ensuring that systems were always up to date and functioning correctly.
I took care of the installation and configuration of printers, ensuring their integration with network systems. Led remote access, providing technical support to internal and external users whenever necessary. My experience covers both Windows environments and Linux servers, where I performed administration and maintenance tasks. Furthermore, I have skills in manipulating MySQL and PostgreSQL databases, contributing to effective data management.`,
    technologies: ["Linux", "Windows", "Zabbix", "PowerShell", "Grafana", "MySQL", "Postgres", "Active Directory", "Looker Studios"],
  },
  {
    year: "2022 - 2023",
    role: "Software Development Intern",
    company: "Open Dev",
    description: `I worked as a development intern at OpenDev, getting involved in software projects focused on creating innovative solutions to optimize processes. A significant part of my work was dedicated to the development of REST APIs using PHP/Laravel, essential for system integration and process automation, contributing to operational efficiency. I was responsible for integrating an API for sending messages via WhatsApp and developing a chatbot, expanding communication channels with customers.
In data management, I worked with MySQL and PostgreSQL databases, performing manipulation and optimization tasks to ensure fast and reliable access to information. In addition to developing APIs and integrations, I had the opportunity to create interactive reports with tools such as Grafana and Looker Studio, providing valuable insights into customer data and enabling more informed and strategic decision-making.`,
    technologies: ["PHP", "Laravel", "MySQL", "PostGreSQL", "Grafana", "Looker Studios"],
  },
];

export const PROJECTS = [
  {
    title: "Raccoon Technology Management System",
    image: project1,
    ref: "https://github.com/RaccoonTechnologyManagement/RaccoonTechnologyManagement",
    description:
      "A comprehensive solution to meet the needs of IT departments, developed for capstone project. The system offers features such as: IT Asset Management, Tickets Management, Notices, Business Intelligence and Monitoring.",
    technologies: ["HTML", "CSS", "React", "Node.js", "Express", "PostgreSQL"],
  }
];

export const CONTACT = {
  address: "Cabreúva, São Paulo, Brazil ",
  phoneNo: "+55 (11) 970578775 ",
  email: "albertodumonttdev@outlook.com",
};