export const apiEnvs = env => {
  const envs = {
    host: 'https://192.168.1.36:3001',
    development: 'https://localhost:3001',
    production: 'https://api.alexisklisch.com'
  }

  return envs[env]
}