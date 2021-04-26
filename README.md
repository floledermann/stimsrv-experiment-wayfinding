# stimsrv Wayfinding Example Experiment

This experiment uses the [stimsrv system](https://github.com/floledermann/stimsrv/) for simple Wizard-of-Oz prototyping of an indoor navigation application.

## Running the experiment

Run **install.bat** (or `npm i` on the command line) one time after cloning the repository to install stimsrv and required libraries.

Run **run.bat** (or `npx stimsrv experiment-wayfinding.js` on the command line) to start the experiment for a regular session.

Open a web browser on the target device(s) and open the URL shown in the stimsrv output. Enter one of the following device IDs in the role selection page:

- **participant** for the participant's device
- **supervisor** for the supervisor device
- **dev** on your computer during development (allow the selection of both roles for testing purposes).

Modify the settings in `devices-roles.js` to reflect the properties of the devices in the experiment (screen resolution etc.).

For further adjustments, refer to the [stimsrv documentation](https://github.com/floledermann/stimsrv/) for information on configuring and developing experiments.




