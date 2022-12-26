
-- create
CREATE TABLE EMPLOYEE (
  empId INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  dept TEXT NOT NULL
);

-- insert
INSERT INTO EMPLOYEE VALUES (0001, 'Clark', 'Sales');
INSERT INTO EMPLOYEE VALUES (0002, 'Dave', 'Accounting');
INSERT INTO EMPLOYEE VALUES (0003, 'Ava', 'Sales');
INSERT INTO EMPLOYEE VALUES (0004, '*****', 'Sales');
INSERT INTO EMPLOYEE VALUES (0005, 'Max', 'Sales');
INSERT INTO EMPLOYEE VALUES (0006, 'May', 'Sales');
 
-- fetch 

-- fetch 
SELECT * FROM EMPLOYEE WHERE dept = 'Sales' AND empId <0005 
AND name LIKE '%a%' order by empId desc limit 2;
