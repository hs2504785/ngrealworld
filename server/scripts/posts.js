var faker = require("faker");
function generatePosts() {
  var posts = [];
  for (var id = 0; id < 50; id++) {
    posts.push({
      id: id,
      userId: faker.name.firstName(),
      title: faker.name.title(),
      body: faker.lorem.paragraph(),
    });
  }
  return { posts: posts };
}
module.exports = generatePosts;
