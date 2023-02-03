dbAdmin = db.getSiblingDB("admin");
dbAdmin.createUser({
  user: "root",
  pwd: "rootpassword",
  roles: [{ role: "readWrite", db: "admin" }],
});

// Authenticate user
dbAdmin.auth({
  user: "root",
  pwd: "rootpassword",
  digestPassword: true,
});

// Create DB and collection
db = new Mongo().getDB("user-logs");
db.createCollection("locations", { capped: false });
db.createCollection("customers", { capped: false });
db.createCollection("customerLogs", { capped: false });