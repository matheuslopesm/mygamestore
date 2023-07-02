CREATE DATABASE mygamestore;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS products (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  pname VARCHAR(100) NOT NULL,
  pvalue MONEY NOT NULL,
  pcompany VARCHAR(50),
  pdescription TEXT
);

CREATE TABLE IF NOT EXISTS employees (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  ename VARCHAR(50) NOT NULL,
  esurname VARCHAR(50) NOT NULL,
  eemail VARCHAR UNIQUE
);

CREATE TABLE IF NOT EXISTS clients (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  cname VARCHAR(50) NOT NULL,
  csurname VARCHAR(50) NOT NULL,
  ccpf VARCHAR UNIQUE NOT NULL,
  cemail VARCHAR UNIQUE
);
