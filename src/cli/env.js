const parseEnv = () => {
  const env = Object.entries(process.env)
    .filter(([key]) => key.startsWith('RSS_'))
    .map(([key, value]) => `${key}=${value}`)
    .join('; ');

    console.log(`Environment variables: ${env}`);
};

parseEnv();
