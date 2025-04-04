const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "SWAGGER DOCUMENTATION",
    description: "AUTOGENERE PAR SWAGGER AUTOGEN",
  },
  host: "localhost:3000",
};

const outputFile = "./swagger-output.json";

const routes = ["./routes/auth.route.js", "./routes/post.route.js", "./routes/comment.route.js"];

swaggerAutogen(outputFile, routes, doc);
