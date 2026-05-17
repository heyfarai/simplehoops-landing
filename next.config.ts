import type { NextConfig } from 'next';

const config: NextConfig = {
  async rewrites() {
    return [
      { source: '/',            destination: '/legacy/index.html' },
      { source: '/teams',       destination: '/legacy/teams.html' },
      { source: '/tournaments', destination: '/legacy/tournaments.html' },
      { source: '/privacy',     destination: '/legacy/privacy.html' },
      { source: '/terms',       destination: '/legacy/terms.html' },
      { source: '/support',     destination: '/legacy/support.html' },
      { source: '/thank-you',   destination: '/legacy/thank-you.html' },
    ];
  },
};

export default config;
