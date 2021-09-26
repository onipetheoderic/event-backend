const awsServerlessExpress = require("aws-serverless-express");
const app = require("./src/app");
const server = awsServerlessExpress.createServer(app);

exports.handler = (event: any, context: any) => {
  awsServerlessExpress.proxy(server, event, context);
};
