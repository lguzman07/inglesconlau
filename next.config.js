/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/clase-recordatorio',
        destination: 'https://cheefifbhpmvfxkumwdh.supabase.co/functions/v1/class-actions',
      },
    ];
  },
};

module.exports = nextConfig;
