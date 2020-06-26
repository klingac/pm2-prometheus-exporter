module.exports = {
  apps: [{
    name: 'PM2 Exporter',
    script: 'exporter.js',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],
  deploy: {
    production: {
      host: "localhost",
      path: "/srv/new-pm2-exporter",
      repo: "https://github.com/klingac/pm2-prometheus-exporter.git",
      ref: "origin/deploy_from_gh"
    }
  }

};
