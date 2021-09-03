const forEachRow = require("../index");
require("dotenv").config();

function concatenateTitle(arr) {
  return arr.map((i) => i.text.content).join("");
}

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
      name: concatenateTitle(row.properties.Name.title),
      birthday: row.properties["Next Birthday"].formula.date.start,
    });
  }
);
