const { pool } = require("./db");

module.exports = {
  modifyURL: async function modURL(id, name) {
    try {
      const res = await pool.query("UPDATE strpairs SET url = $1 WHERE id = $2", [
        name,
        id,
      ]);
      console.log(`Updated the URL to ${name} for entry ID ${id}`);
    } catch (error) {
      console.error(error);
    }
  }
}
