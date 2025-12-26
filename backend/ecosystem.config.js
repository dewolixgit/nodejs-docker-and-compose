module.exports = {
  apps: [
    {
      name: 'kupipodariday-backend',
      script: './dist/main.js',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
