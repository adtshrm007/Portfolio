import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { GoGitPullRequest, GoGitCommit, GoIssueOpened } from 'react-icons/go';
import { githubStats } from '../../data/portfolioData';
import AnimatedCounter from '../ui/AnimatedCounter';

const GithubActivity = () => {
  return (
    <section className="w-full py-24 bg-bg relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-black/50 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 border-b border-white/10 pb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <FaGithub className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    GitHub Overview
                  </h3>
                  <a href={`https://github.com/${githubStats.username}`} target="_blank" rel="noreferrer" className="text-accent hover:underline text-sm font-medium">
                    @{githubStats.username}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {githubStats.topLanguages.map(lang => (
                <span key={lang} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-text">
                  {lang}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-6 group hover:border-accent/50 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                <GoGitCommit className="w-6 h-6" />
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1 flex items-center">
                  <AnimatedCounter end={githubStats.commitsThisYear} duration={2} />
                </div>
                <p className="text-sm text-gray-text font-medium">Commits this year</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-6 group hover:border-accent/50 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                <GoGitPullRequest className="w-6 h-6" />
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1 flex items-center">
                  <AnimatedCounter end={githubStats.prsMerged} duration={2} />
                </div>
                <p className="text-sm text-gray-text font-medium">PRs Merged</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-6 group hover:border-accent/50 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                <GoIssueOpened className="w-6 h-6" />
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1 flex items-center">
                  <AnimatedCounter end={githubStats.issuesClosed} duration={2} />
                </div>
                <p className="text-sm text-gray-text font-medium">Issues Closed</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubActivity;
