CREATE DATABASE violentometro;

USE violentometro;

CREATE TABLE form (
  id INT AUTO_INCREMENT PRIMARY KEY,
  q1 ENUM('s', 'n'),
  q2 ENUM('s', 'n'),
  q3 ENUM('s', 'n'),
  q4 ENUM('s', 'n'),
  q5 ENUM('s', 'n')
);
--Ejemplo uno de llenado de base
INSERT INTO form (q1, q2, q3, q4, q5)
VALUES ('s', 'n', 's', 'n', 's');
