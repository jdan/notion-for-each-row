const { Client } = require("@notionhq/client");

module.exports = async (
  { token, database, sorts = [], pageSize = 100 },
  callback
) => {
  const notion = new Client({
    auth: token,
  });

  let nextCursor = undefined;
  do {
    const response = await notion.databases.query({
      database_id: database,
      sorts,
      page_size: pageSize,
      start_cursor: nextCursor,
    });

    nextCursor = response.next_cursor;

    await Promise.all(
      response.results.map((result) => callback(result, notion))
    );
  } while (nextCursor !== null);
};
