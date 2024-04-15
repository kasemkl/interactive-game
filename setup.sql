CREATE SEQUENCE users_id;

CREATE TABLE users(
  id INT NOT NULL DEFAULT nextval('users_id'),
  name VARCHAR(20),
  email VARCHAR(20) UNIQUE,
  password VARCHAR(100),
  rating int default 500
);

