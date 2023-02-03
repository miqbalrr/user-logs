#!/bin/bash

mongoimport --uri mongodb://root:rootpassword@mongodb:27017/user-logs?authSource=admin  --db user-logs --collection customers --type json --file /mongo-seed/customers.json --jsonArray
mongoimport --uri mongodb://root:rootpassword@mongodb:27017/user-logs?authSource=admin  --db user-logs --collection customerLogs --type json --file /mongo-seed/customerLogs.json --jsonArray
mongoimport --uri mongodb://root:rootpassword@mongodb:27017/user-logs?authSource=admin  --db user-logs --collection locations --type json --file /mongo-seed/locations.json --jsonArray