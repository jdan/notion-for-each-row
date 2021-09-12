## notion-for-each-row

`npm install --save notion-for-each-row`

For each row in a [Notion](https://developers.notion.com/) database, run a JavaScript function. Paginates so you don't have to.

### Example

_see [examples/main.js](/examples/main.js) for implementation_

```js
const forEachRow = require("notion-for-each-row");

forEachRow(
  {
    token: process.env.NOTION_TOKEN,
    database: process.env.NOTION_DATABASE_ID,
    sorts: [
      {
        property: "Next Birthday",
        direction: "ascending",
      },
    ],
  },
  (row) => {
    console.log({
      name: row.properties.Name.title,
      birthday: row.properties["Next Birthday"].formula.date.start,
    });
  }
);

// => { name: 'Ada', birthday: '2021-12-10' }
// => { name: 'Alan', birthday: '2022-06-23' }
// => { name: 'Me', birthday: '2022-07-20' }
```
