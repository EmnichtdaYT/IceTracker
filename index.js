const serverAndDatabase = require("./serverAndDatabase.js")

const app = serverAndDatabase.getApp();
const database = serverAndDatabase.getDatabase();

serverAndDatabase.startServer();