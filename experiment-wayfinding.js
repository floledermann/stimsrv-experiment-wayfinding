
const pause = require("stimsrv/task/pause");
const loop = require("stimsrv/task/loop");

const random = require("stimsrv/controller/random");
const sequence = require("stimsrv/controller/sequence");

const imageStimulus = require("stimsrv/stimulus/image");   
const htmlButtons = require("stimsrv/ui/htmlButtons");   

const setup = require("./setup-mobile.js");

const images = require("./images.js");

pause.defaults({
  background: "#eeeeff",
  textcolor: "#000000",
  buttondisplay: "response",
  style: "max-width: 30em; text-align: justify;"
});

// stimsrv experiment definition
module.exports = {
  
  name: "Wayfinding Experiment",
  
  devices: setup.devices,
  roles: setup.roles, 
  
  tasks: [
  
    pause({
      message: {
        "display": "Please wait for the experiment to start.",
        "monitor": "Please select the route & instructions for this experiment run."
      },
      buttondisplay: "control"
    }),  
    
    {
      name: "image",
      description: "Image stimulus",
      ui: context => ({
        interfaces: {
          display: imageStimulus({baseURL: "/static/task/image/"}),
          monitor: imageStimulus({baseURL: "/static/task/image/"}),
          control: htmlButtons([
            {label: "Prev", response: {dir: -1}},
            {label: "Next", response: {dir: 1}},
          ])
        }
      }),
      controller: context => {
        let imgIndex = 0;
        context.route = "R1";
        context.mode = "S";
        return {
          nextCondition: (lastCond, lastResponse) => {
            imgIndex += lastResponse?.dir || 0;
            if (imgIndex < 0) imgIndex = 0;
            if (imgIndex > images[context.route][context.mode].length - 1) {
              // we have reached the end
              return null;
            }
            return {
              image: context.route + "_" + context.mode + "/" + images[context.route][context.mode][imgIndex]
            }
          }
        }
      },
      resources: "images"
    }, 
    
    pause({
      message: {
        "display": "You have reached your destination!\n\nWe would now like to ask you a few quesitons about your route.\n\nPress 'Continue' when you're ready.",
        "control": "Destination reached. Waiting for participant."
      },
    }),  
    
  ]
  
}