'use client'

import AnimatedSection from './AnimatedSection'
import { GitHubLogoIcon } from '@radix-ui/react-icons'

// TODO: 이 부분을 자신의 정보로 수정하세요.
const personalInfo = [
  { label: '이름', value: '이제혁' },
  { label: '나이', value: '23' },
  { label: '전공', value: '정보보호학' },
  { label: '학번', value: '92212996' },
  { label: 'Email', value: 'jehyuk1001@gmail.com' },
]

const About = () => {
  return (
    <AnimatedSection id="about">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-12">About Me</h2>

        {/* Personal Info Boxes */}
        <div className="flex flex-col gap-6 mb-12 max-w-md mx-auto">
          {personalInfo.map((info) => (
            <div key={info.label} className="bg-gray-800 p-6 rounded-lg flex items-center justify-between">
              <h3 className="text-xl font-semibold text-blue-400">
                {info.label}
              </h3>
              <p className="text-gray-300 break-words">{info.value}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/dlwpgur03"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-400 hover:text-white transition-colors flex items-center space-x-2"
            >
              <GitHubLogoIcon className="w-8 h-8" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

export default About
