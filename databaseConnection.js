const mysql = require('mysql2/promise');

const is_qoddi = process.env.IS_QODDI || false;

const dbConfigQoddi = {
	host: "sql.freedb.tech",
	user: "freedb_root_User",
	password: "fx2Z9tM*dpG9S?5",
	database: "freedb_comp2350-A01298047",
	multipleStatements: false,
	namedPlaceholders: true
};

const dbConfigLocal = {
	host: "localhost",
	user: "root",
	password: "Pin3con3s!",
	database: "freedb_comp2350-A01298047",
	multipleStatements: false,
	namedPlaceholders: true
};

if (is_qoddi) {
	var database = mysql.createPool(dbConfigQoddi);
}
else {
	var database = mysql.createPool(dbConfigLocal);
}

module.exports = database;
		