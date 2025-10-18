"use client";

import AnimatedSection from './AnimatedSection';

// TODO: 자신의 기술 스택에 맞게 수정하세요.
const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Python", "FastAPI"],
  },
  {
    title: "Database",
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "DevOps",
    skills: ["Docker", "Git", "Vercel"],
  },
];

const Skills = () => {
  return (
    <AnimatedSection id="skills">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-gray-300">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Skills;
