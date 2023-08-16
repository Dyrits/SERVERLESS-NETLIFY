// domain/.netlify/functions/01-hello-world
exports.handler = async () => {
  return {
    statusCode: 200,
    body: "Hello, World!"
  };
}