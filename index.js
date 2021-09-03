const { Client } = require("@notionhq/client");

module.exports = async ({ token, database, sorts = [] }, callback) => {
  const notion = new Client({
    auth: token,
  });

  const response = await notion.databases.query({
    database_id: database,
    sorts,
  });

  // todo: paginate
  response.results.forEach((result) => callback(result));
};
