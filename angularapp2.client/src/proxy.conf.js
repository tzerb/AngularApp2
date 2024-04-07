const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast", "/loans"
    ],
    target: "https://localhost:7036",
    secure: false
  },
  {
    context: [
      
    ],
    target: "https://localhost:7036",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
