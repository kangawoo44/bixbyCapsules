## Intercepter
- Small local server app used for intercepting data via tunneling

## Usage
- Start ngrok (or other tunneling service. e.g. pagekite) on port 9090
    - in terminal: ./ngrok http 9090
- Start the intercepter app
    - in the intercepter directory: nodemon --inspect app.js
- Test the app with the forwarding address from ngrok (changes every time)
    - forwarding address example: http://edcc1422a52b.ngrok.io
    - add "/intercepter" router path at the end
    - use POST call
    - curl -X POST http://edcc1422a52b.ngrok.io/intercepter

### Installed npm packages
- npm install --save-dev nodemon
- npm install express --save
- npm install body-parser