const { pool } = require("./db");

module.exports = {
  modifyCode: async function modCode(id, code) {
    try {
      const res = await pool.query("UPDATE strpairs SET url = $1 WHERE id = $2", [
        code,
        id,
      ]);
      console.log(`Updated the CODE to ${code} for entry ID ${id}`);
    } catch (error) {
      console.error(error);
    }
  }
}