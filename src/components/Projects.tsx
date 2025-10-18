"use client";

import AnimatedSection from './AnimatedSection';
import { GitHubLogoIcon, StarIcon } from '@radix-ui/react-icons';
import type { Repo } from '@/types';

import LanguageChart, { COLORS } from './LanguageChart';

interface ProjectsProps {
  repos: Repo[];
}

const LanguageStats = ({ languages }: { languages: Record<string, number> }) => {
  const totalBytes = Object.values(languages).reduce((acc, val) => acc + val, 0);
  if (totalBytes === 0) return null;

  const languageEntries = Object.entries(languages).sort(([, a], [, b]) => b - a);

  return (
    <ul className="text-sm text-gray-400 space-y-1">
      {languageEntries.map(([name, value], index) => {
        const percentage = ((value / totalBytes) * 100).toFixed(1);
        return (
          <li key={name} className="flex items-center">
            <span 
              className="w-3 h-3 rounded-full mr-2"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            ></span>
            <span>{name}: {percentage}%</span>
          </li>
        );
      })}
    </ul>
  );
};

const Projects = ({ repos }: ProjectsProps) => {
  return (
    <AnimatedSection id="projects">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-12">My GitHub Projects</h2>
        
        {repos && repos.length > 0 ? (
          <div className="space-y-12 max-w-4xl mx-auto">
            {repos.map((repo) => (
              <a 
                key={repo.id} 
                href={repo.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-gray-800 rounded-lg p-8 shadow-lg hover:bg-gray-700 transition-colors duration-300"
              >
                <div className="flex flex-col md:flex-row gap-8 md:items-center">
                  {/* Left Side: Text Info */}
                  <div className="flex-grow text-left">
                    <h3 className="text-2xl font-bold text-blue-400 mb-2">{repo.name}</h3>
                    <p className="text-gray-300 mb-4 h-12 overflow-hidden">{repo.description || "No description provided."}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        {repo.language && (
                          <span className="bg-gray-700 text-blue-300 text-sm font-medium px-2.5 py-0.5 rounded-full">{repo.language}</span>
                        )}
                        <div className="flex items-center gap-1 text-gray-400">
                          <StarIcon className="w-4 h-4" />
                          <span>{repo.stargazers_count}</span>
                        </div>
                      </div>
                      <div className="text-gray-400 hover:text-white transition-colors">
                        <GitHubLogoIcon className="w-6 h-6" />
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Language Chart & Stats */}
                  <div className="flex-shrink-0 flex items-center gap-4">
                    <LanguageChart languages={repo.languages || {}} />
                    <LanguageStats languages={repo.languages || {}} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-400 bg-gray-800 p-8 rounded-lg max-w-md mx-auto">
            <p>Could not fetch GitHub repositories.</p>
            <p className="mt-2 text-sm">Please ensure your GIT_TOKEN is set correctly in the .env.local file and that you have public repositories.</p>
          </div>
        )}
      </div>
    </AnimatedSection>
  );
};

export default Projects;