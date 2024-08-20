module.exports = {
  apps: [
    {
      name: "cicd-nodeapp",
      script: "npm",
      args: "start",
      instances: 1,
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: "development",
        PORT: "3001",
      },
      env_production: {
        NODE_ENV: "production",
        PORT: "3000",
      },
    },
  ],
};
