## DOCS:
### loadtest: https://www.npmjs.com/package/loadtest

## PM2 Commands

To create clusters as per number of cpus present
### `pm2 start ./file_name.js -i -1`

To create N number of clusters
### `pm2 start ./file_name.js -i N`

To check logs
### `pm2 logs`

To stop all process
### `pm2 stop all`

To delete all process
### `pm2 delete all`

To stop a process
### `pm2 delete process_name`





## Load Test Commands

To install loadtest in your machine
### `sudo npm install -g loadtest`

Sample test of 1000 requests
### `loadtest -n 1000 http://localhost:3000`
