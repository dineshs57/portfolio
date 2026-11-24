// Single source of truth for portfolio content. Every entry here is taken from Dinesh's resume
// (or his own brief) — do not add skills, projects, metrics or achievements that are not there.

export const profile = {
  name: "Dinesh S",
  role: "B.Tech Information Technology Student",
  focus: "AI · Machine Learning · Computer Vision · Software Development",
  headline: "Building Intelligent Solutions Through Technology",
  summary:
    "AI and full-stack developer with a strong foundation in computer vision, deep learning, and web application development. Skilled in building end-to-end solutions using Python, Flask, Spring Boot, and React, with hands-on project experience in YOLOv8, OpenCV, and CNN-based systems.",
  summaryExtra:
    "Strong communicator with a focus on translating requirements into reliable, user-focused software.",
  location: "Chennai, India",
  email: "dineshs.sham@gmail.com",
  github: "https://github.com/dineshs57",
  linkedin: "https://linkedin.com/in/dinesh-s-71670a299",
  resumeUrl: "/Dinesh_S_Resume.pdf",
  resumeFileName: "Dinesh_S_Resume.pdf",
} as const;

export const quickFacts = [
  { label: "Degree", value: "B.Tech, Information Technology" },
  { label: "College", value: "St. Joseph's College of Engineering, Chennai" },
  { label: "CGPA", value: "7.94 / 10" },
  { label: "Graduation", value: "May 2027 (Expected)" },
] as const;

export const focusAreas = [
  {
    title: "Computer Vision",
    text: "Real-time detection systems with YOLOv8 and OpenCV.",
  },
  {
    title: "Deep Learning",
    text: "CNN-based models for recognition and classification tasks.",
  },
  {
    title: "Full-Stack Development",
    text: "Web applications and APIs with Flask, Spring Boot and React.",
  },
] as const;

export const skillGroups = [
  { title: "Programming", items: ["Python", "Java", "JavaScript", "C", "SQL"] },
  {
    title: "AI / ML",
    items: [
      "Machine Learning (Fundamentals)",
      "Deep Learning (Fundamentals)",
      "Computer Vision",
      "CNN",
      "OpenCV",
      "YOLOv8",
    ],
  },
  { title: "Backend & APIs", items: ["Flask", "RESTful APIs", "Spring Boot", "Postman"] },
  { title: "Frontend", items: ["React", "HTML", "CSS", "JavaScript"] },
  { title: "Databases", items: ["MySQL", "SQL", "MongoDB"] },
  { title: "Tools & Cloud", items: ["Git", "GitHub", "VS Code", "AWS (Fundamentals)"] },
  {
    title: "CS Fundamentals",
    items: ["OOP", "DBMS", "DSA", "Operating Systems", "Computer Networks"],
  },
] as const;

export type Project = {
  index: string;
  title: string;
  description: string;
  highlights: readonly string[];
  tags: readonly string[];
  metric?: { value: string; label: string };
  github: string;
};

export const projects: readonly Project[] = [
  {
    index: "01",
    title: "AI-Powered Smart Industrial Safety & Monitoring System",
    description:
      "A real-time computer vision safety system that monitors industrial environments and raises alerts, with a Flask API for live streaming.",
    highlights: [
      "PPE compliance detection",
      "Proximity and fall detection",
      "Restricted-zone alerts",
      "Live streaming via Flask API",
    ],
    tags: ["YOLOv8", "OpenCV", "Flask", "Python"],
    github: "https://github.com/dineshs57/industrial-ai-safety-system",
  },
  {
    index: "02",
    title: "Handwritten Digit Recognition Web App",
    description:
      "A web-based tool that predicts handwritten digits in real time using a convolutional neural network, with built-in performance analysis.",
    highlights: ["Real-time digit prediction", "Built-in performance analysis"],
    tags: ["CNN", "Streamlit", "Deep Learning"],
    metric: { value: "99.2%", label: "test accuracy" },
    github: "https://github.com/dineshs57/digit-recognition",
  },
  {
    index: "03",
    title: "AI-Powered Emotion Recognition & Mental Health Chatbot",
    description:
      "A team project combining real-time facial emotion recognition with an emotion-aware chatbot.",
    highlights: ["Real-time facial emotion recognition", "Emotion-aware chatbot responses"],
    tags: ["Computer Vision", "Emotion Recognition", "Chatbot", "Team Project"],
    github: "https://github.com/dineshs57/Emotion-AI-Mental-Health-Chatbot",
  },
];

export const experience = [
  {
    role: "Web Development Intern",
    company: "CodeBind Technologies",
    location: "Salem",
    period: "June 2025",
    project: "Bakes — responsive e-commerce website",
    points: [
      "Built Bakes, a responsive e-commerce website using HTML, CSS and JavaScript, with product search, category filtering and price sorting.",
      "Implemented shopping cart management and checkout logic, and integrated automated order email notifications through the EmailJS API.",
      "Used Git and GitHub for version control and collaborative source code management.",
    ],
    tags: ["HTML", "CSS", "JavaScript", "EmailJS", "Git"],
    links: [
      { label: "GitHub", href: "https://github.com/dineshs57/Bakes" },
      { label: "Live Demo", href: "https://dineshs57.github.io/Bakes/" },
    ],
  },
] as const;

export const education = [
  {
    school: "St. Joseph's College of Engineering, Chennai",
    degree: "B.Tech in Information Technology",
    period: "Sep 2023 – May 2027 (Expected)",
    score: "CGPA 7.94 / 10",
  },
  {
    school: "Government Boys Higher Secondary School, Edappadi",
    degree: "Higher Secondary Certificate (HSC)",
    period: "Mar 2023",
    score: "78.5%",
  },
] as const;

export const certifications = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
  },
  {
    title: "Front End Web Developer Certification",
    issuer: "Infosys Springboard",
  },
] as const;

export const achievements = [
  {
    title: "Notable Participant — IIT Bombay FOSSEE Geospatial Mapathon",
    detail: "2024, 2025",
  },
  { title: "Finalist — SSN GreenHack 2.0 Hackathon" },
  {
    title: "Inter-collegiate hackathons",
    detail: "Collaborated with teams to develop solutions to real-world problems.",
  },
] as const;

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;
