const parseEnv = () => {
  const rssEnvs = Object.entries(process.env)
  .filter(([key]) => key.startsWith('RSS_'))
  .map(([key, value]) => `${key}=${value}`)
  .join('; ');

  console.log(`Environment variables: ${rssEnvs}`);
};

parseEnv();