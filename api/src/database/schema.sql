CREATE DATABASE mygamestore;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS products (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  pname VARCHAR(100) UNIQUE NOT NULL,
  pvalue MONEY NOT NULL,
  pcompany VARCHAR(50),
  pdescription TEXT
);

CREATE TABLE IF NOT EXISTS employees (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  ename VARCHAR(50) NOT NULL,
  esurname VARCHAR(50) NOT NULL,
  eemail VARCHAR UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS clients (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  cname VARCHAR(50) NOT NULL,
  csurname VARCHAR(50) NOT NULL,
  ccpf VARCHAR UNIQUE NOT NULL,
  cemail VARCHAR UNIQUE
);

CREATE TABLE IF NOT EXISTS sales (
  sale_id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  datavenda DATE NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  employee_email VARCHAR NOT NULL,
  client_cpf VARCHAR NOT NULL,
  PRIMARY KEY (sale_id),
  FOREIGN KEY (product_name) REFERENCES products (pname),
  FOREIGN KEY (employee_email) REFERENCES employees (eemail),
  FOREIGN KEY (client_cpf) REFERENCES clients (ccpf)
);
