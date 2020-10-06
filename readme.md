#### DB Configuration
`To change db configuration follow below steps`

1. navigate to lib directory
2. edit db.js file and change the below block of code as per your requirement.

```
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './dfwland.sqlite'
});

Below are the available options to create sequelize instance
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Option 1: Passing a connection URI
const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

// Option 2: Passing parameters separately (sqlite)
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'path/to/database.sqlite'
});

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

```

#### Node Dependencies

```
# One of the following:
npm install --save pg pg-hstore -> For Postgres
npm install --save mysql2
npm install --save mariadb
npm install --save sqlite3
npm install --save tedious -> For Microsoft SQL Server
```



#### References
```
Sequelize : https://sequelize.org/
```