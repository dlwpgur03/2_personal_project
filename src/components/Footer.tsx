"use client";

import { GitHubLogoIcon } from '@radix-ui/react-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center items-center space-x-4 mb-4">
            <a href="https://github.com/YOUR_GITHUB_USERNAME" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <GitHubLogoIcon className="w-6 h-6" />
            </a>
        </div>
        <p className="text-gray-500">
          &copy; {new Date().getFullYear()} Leejehyuk. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
