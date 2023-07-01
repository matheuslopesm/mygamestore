CREATE DATABASE mygamestore;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS products (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  pname VARCHAR(100) NOT NULL,
  pvalue MONEY NOT NULL,
  pcompany VARCHAR(50),
  pdescription TEXT
);
