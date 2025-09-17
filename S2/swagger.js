const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Temples API',
    description: 'Temples API'
  },
  host: 'localhost:3000',
  schemes: ['http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./cse341-ww-student-code-w02-2-team-start/routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
