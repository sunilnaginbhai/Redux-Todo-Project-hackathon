import React from 'react';
import { 
  Layers, 
  CheckCircle2, 
  Search, 
  Moon, 
  Zap, 
  Code2, 
  ExternalLink, 
  Trophy,
  ShieldCheck
} from 'lucide-react';
import Sidebar from './Sidebar';
import SearchTask from './SearchTask';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const About = () => {
  const features = [
    {
      icon: CheckCircle2,
      title: "Task Management",
      description: "Organize daily tasks systematically with precise status tracking and structured priorities."
    },
    {
      icon: Search,
      title: "Command Search",
      description: "Execute actions and navigate records efficiently with keyboard-first modal search."
    },
    {
      icon: Moon,
      title: "Adaptive Interface",
      description: "Designed for optimal visual clarity across both light and high-contrast environments."
    },
    {
      icon: Zap,
      title: "Redux State Engine",
      description: "Reliable, enterprise-grade state synchronization keeping data consistent in real-time."
    }
  ];

  const socialLinks = [
    {
      name: "GitHub Profile",
      icon: GithubIcon,
      url: "https://github.com/sunilnaginbhai?tab=repositories",
      subtitle: "Source code & active engineering projects",
      badge: "GitHub"
    },
    {
      name: "LinkedIn Network",
      icon: LinkedinIcon,
      url: "https://www.linkedin.com/in/sunil-patel-5ab064384",
      subtitle: "Professional background & career history",
      badge: "LinkedIn"
    },
    {
      name: "LeetCode Record",
      icon: Code2,
      url: "https://leetcode.com/u/sunil_snp/",
      subtitle: "Data structures & algorithm proficiency",
      badge: "85+ Solved 🏆"
    }
  ];

  return (
    <div className="flex min-h-screen bg-white text-gray-900 font-sans">
      <Sidebar /> 
      <SearchTask/>

      {/* Main Content Area */}
      <div className="flex-1 p-6 md:p-10 overflow-y-auto bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Header Section */}
          <div className="border-b border-gray-200 pb-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 bg-gray-900 rounded-xl text-white">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                  About TaskFlow
                </h1>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Enterprise Productivity Solution v1.0.0
                </p>
              </div>
            </div>
          </div>

          {/* Overview Banner */}
          <div className="p-6 rounded-2xl bg-white border border-gray-200 space-y-3 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 font-semibold text-sm text-gray-900">
                <ShieldCheck className="w-5 h-5 text-gray-700" />
                <span>Engineered for Performance & Focus</span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold bg-gray-100 text-gray-800 border border-gray-200">
                <Trophy className="w-3.5 h-3.5 text-gray-700" />
                85+ LeetCode Problems Solved
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-600">
              TaskFlow is a structured task management platform designed to streamline daily workflows. Built with React, Redux, and Tailwind CSS, it eliminates visual noise to deliver a stable, reliable workspace for personal and team task organization.
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold tracking-wider uppercase text-gray-400 border-b border-gray-200 pb-2">
              System Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="p-5 rounded-2xl bg-white border border-gray-200 hover:border-gray-400 transition-all shadow-xs"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="p-2.5 rounded-xl bg-gray-100 text-gray-900 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-gray-900">
                          {item.title}
                        </h3>
                        <p className="text-xs mt-1 leading-relaxed text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Developer Profiles & Links */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold tracking-wider uppercase text-gray-400 border-b border-gray-200 pb-2">
              Developer Credentials & Profiles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-5 rounded-2xl bg-white border border-gray-200 hover:border-gray-900 transition-all flex flex-col justify-between shadow-xs"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="p-2.5 rounded-xl bg-gray-100 text-gray-900">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-gray-100 text-gray-700 border border-gray-200">
                          {link.badge}
                        </span>
                      </div>

                      <h3 className="text-sm font-bold text-gray-900 group-hover:text-black transition-colors">
                        {link.name}
                      </h3>
                      <p className="text-xs mt-1 text-gray-500">
                        {link.subtitle}
                      </p>
                    </div>

                    <div className="flex items-center gap-1 text-xs font-bold text-gray-900 mt-4 group-hover:underline">
                      <span>Access link</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="p-4 rounded-2xl border border-gray-200 bg-white text-center text-xs text-gray-500 shadow-xs">
            Architecture built with <span className="font-semibold text-gray-900">React</span>, <span className="font-semibold text-gray-900">Redux Toolkit</span>, and <span className="font-semibold text-gray-900">Tailwind CSS</span>.
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;