const parseArgs = () => {
  const agrs = process.argv.slice(2);
  const options = [];

  for (let i = 0; i < agrs.length; i += 2) {
    const key = agrs[i].replace(/--/, '');
    const value = agrs[i + 1];

    options.push(`${key} is ${value}`);
  }

    console.log(options.join(', '));
};

parseArgs();
