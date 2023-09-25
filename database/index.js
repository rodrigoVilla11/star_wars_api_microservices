const server = require("./src/server");

const { Character, Films, Planets } = require("./src/database");

// Planets.list().then((res) => console.log(res[0]));

server.listen(8004, () => {
  console.log("Database service on PORT 8004");
});
