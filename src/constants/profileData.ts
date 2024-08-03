import { IEducationAndExperienceItem } from "./types";

export enum ETechnologies {
  REACT,
  IONIC,
  TYPESCRIPT,
  JAVASCRIPT,
  SASS,
  GIT,
  GITHUB,
  AZURE,
  JIRA,
  AGILE,
  ANGULAR,
  PYTHON,
  AWS,
  JENKINS,
  GITLAB,
  HTML,
  CSS,
  NODEJS,
  EXPRESSJS,
  R,
  PERL,
}
export const technologies = {
  [ETechnologies.REACT]: {
    name: "React",
    icon: "/icons/react-16-svgrepo-com.svg",
  },
  [ETechnologies.IONIC]: {
    name: "Ionic",
    icon: "/icons/ionic-16-svgrepo-com.svg",
  },
  [ETechnologies.TYPESCRIPT]: {
    name: "Typescript",
    icon: "/icons/typescript-16-svgrepo-com.svg",
  },
  [ETechnologies.JAVASCRIPT]: {
    name: "Javascript",
    icon: "/icons/javascript-16-svgrepo-com.svg",
  },
  [ETechnologies.SASS]: {
    name: "Sass",
    icon: "/icons/sass-svgrepo-com.svg",
  },
  [ETechnologies.GIT]: {
    name: "git",
    icon: "/icons/git-svgrepo-com.svg",
  },
  [ETechnologies.GITHUB]: {
    name: "GitHub",
    icon: "/icons/github-svgrepo-com.svg",
  },
  [ETechnologies.AZURE]: {
    name: "Azure",
    icon: "/icons/azure-devops-svgrepo-com.svg",
  },
  [ETechnologies.JIRA]: {
    name: "Jira",
    icon: "/icons/jira-svgrepo-com.svg",
  },
  [ETechnologies.AGILE]: {
    name: "Agile",
  },
  [ETechnologies.ANGULAR]: {
    name: "Angular",
    icon: "/icons/angular-16-svgrepo-com.svg",
  },
  [ETechnologies.PYTHON]: {
    name: "Python",
    icon: "/icons/python-16-svgrepo-com.svg",
  },
  [ETechnologies.AWS]: {
    name: "AWS",
    icon: "/icons/aws-ec2-svgrepo-com.svg",
  },
  [ETechnologies.JENKINS]: {
    name: "Jenkins",
    icon: "/icons/jenkins-svgrepo-com.svg",
  },
  [ETechnologies.GITLAB]: {
    name: "Gitlab",
    icon: "/icons/gitlab-svgrepo-com.svg",
  },
  [ETechnologies.HTML]: {
    name: "HTML",
    icon: "/icons/html-16-svgrepo-com.svg",
  },
  [ETechnologies.CSS]: {
    name: "CSS",
    icon: "/icons/css-16-svgrepo-com.svg",
  },
  [ETechnologies.NODEJS]: {
    name: "NodeJS",
    icon: "/icons/node-16-svgrepo-com.svg",
  },
  [ETechnologies.EXPRESSJS]: {
    name: "expressJS",
  },
  [ETechnologies.R]: {
    name: "R",
    icon: "/icons/r-16-svgrepo-com.svg",
  },
  [ETechnologies.PERL]: {
    name: "Perl",
    icon: "/icons/perl-16-svgrepo-com.svg",
  },
};

export const educationAndExperienceItems: IEducationAndExperienceItem[] = [
  {
    category: "experience",
    title: "Desarrollador Front End",
    position: "Desarrollador Front End Mid",
    entity: "NTT Data",
    stack: [
      ETechnologies.REACT,
      ETechnologies.IONIC,
      ETechnologies.TYPESCRIPT,
      ETechnologies.SASS,
      ETechnologies.GIT,
      ETechnologies.GITHUB,
      ETechnologies.AZURE,
      ETechnologies.JIRA,
      ETechnologies.AGILE,
      ETechnologies.ANGULAR,
      ETechnologies.PYTHON,
    ],
    startDate: new Date("2023-06-01"),
    description: [
      "Análisis de funcionalidades y planificación temporal de su ejecución",
      "Solución de incidencias y mantenimiento de código",
      "Refactorización de código para mejorar rendimiento y aumentar control de errores",
      "Desarrollo de la aplicación interna de reserva de espacios de ACCIONA",
      "Desarrollo y mantenimiento de la web de SEATMO",
      "Desarrollo de Scripts de automatización en Python para Repsol",
      "Mantenimiento web para Naturgy con Angular",
    ],
  },
  {
    category: "experience",
    title: "Desarrollador Front End",
    position: "Desarrollador Front End en prácticas",
    entity: "The Key Talent",
    stack: [
      ETechnologies.ANGULAR,
      ETechnologies.SASS,
      ETechnologies.AWS,
      ETechnologies.AGILE,
      ETechnologies.JENKINS,
      ETechnologies.GITLAB,
    ],
    startDate: new Date("2022-10-01"),
    endDate: new Date("2023-05-01"),
    description: [
      "Desarrollo de aplicaciones web con Angular11+",
      "Mantenimiento de código, implementación de nuevas características, refactor de antiguas funcionalidades",
      "Análisis de implementación de características",
      "Mantenimiento de aplicaciones desarrolladas con Vue",
      "Desarrollo de landing pages ad-hoc HTML/CSS",
      "Control de versiones con git/Gitlab + CI/CD con jenkins y AWS",
    ],
  },
  {
    category: "education",
    title: "Bootcamp Full Stack Developer",
    position: "Estudiante",
    entity: "Upgrade Hub",
    stack: [
      ETechnologies.REACT,
      ETechnologies.ANGULAR,
      ETechnologies.HTML,
      ETechnologies.CSS,
      ETechnologies.GIT,
      ETechnologies.AGILE,
      ETechnologies.NODEJS,
      ETechnologies.EXPRESSJS,
    ],
    startDate: new Date("2022-02-01"),
    endDate: new Date("2022-07-01"),
    description: [],
  },
  {
    category: "experience",
    title: "Investigador en Bioinformática y Docente",
    position: "Profesor Ayudante",
    entity: "Universidad de Alicante",
    stack: [
      ETechnologies.PYTHON,
      ETechnologies.R,
      ETechnologies.HTML,
      ETechnologies.CSS,
      ETechnologies.JAVASCRIPT,
      ETechnologies.PERL,
    ],
    startDate: new Date("2021-09"),
    endDate: new Date("2022-05"),
    description: [
      "Procesado de datos con Python (librerías y desarrollo de scripts propios)",
      "Desarrollo de herramientas e interfaces en HTML/JS",
      "Análisis estadístico con R",
      "Desarrollo y mantenimiento de la página web del grupo de investigación",
    ],
  },
  {
    category: "education",
    title: "Doctor en Genética",
    position: "Becario de Doctorado",
    entity: "Universidad de Alicante",
    stack: [
      ETechnologies.PYTHON,
      ETechnologies.R,
      ETechnologies.HTML,
      ETechnologies.CSS,
      ETechnologies.JAVASCRIPT,
      ETechnologies.PERL,
    ],
    startDate: new Date("2015-09"),
    endDate: new Date("2021-02"),
    description: [],
  },
  {
    category: "experience",
    title: "Investigador Visitante",
    position: "Becario de Doctorado",
    entity: "Queen Mary University of London",
    stack: [],
    startDate: new Date("2019-07"),
    endDate: new Date("2019-09"),
    description: [],
  },
  {
    category: "education",
    title: "Máster en Biotecnología para la Salud y la Sostenibilidad",
    position: "Estudiante",
    entity: "Universidad de Alicante",
    stack: [],
    startDate: new Date("2014-09"),
    endDate: new Date("2015-07"),
    description: [],
  },
  {
    category: "education",
    title: "Licenciado en Biología",
    position: "Estudiante",
    entity: "Universidad de Alicante",
    stack: [],
    startDate: new Date("2009-09"),
    endDate: new Date("2014-07"),
    description: [],
  },
  {
    category: "education",
    title: "C1 - Cambridge English",
    position: "",
    entity: "Cambridge University Press & Assessment",
    stack: [],
    startDate: new Date("2015-07"),
    endDate: new Date("2015-07"),
    description: [],
  },
];

export const projects = [{}];
