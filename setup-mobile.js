const filestorage = require("stimsrv/storage/filestorage");

module.exports = {
  devices: [
    {
      name: "Development PC",
      id: "dev",
      pixeldensity: 91,
      viewingdistance: 600,
    },
    {
      name: "Supervisor",
      id: "supervisor",
      pixeldensity: 440,
      viewingdistance: 350,
    },
    {
      name: "Participant",
      id: "participant",
      resolution: "hd",
      pixeldensity: 800,
      viewingdistance: 350,
    },
  ],
  
  roles: [
    {
      role: "participant",
      description: "Participant Phone",
      devices: ["participant", "dev"],
      interfaces: ["display","response"]
    },
    {
      role: "supervisor",
      description: "Supervisor Phone",
      devices: ["supervisor", "dev"],
      interfaces: ["monitor", "control"]
    },
  ],
  
}