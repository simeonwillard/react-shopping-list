-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

CREATE TABLE "shopping_list" (
    "id" SERIAL PRIMARY KEY,
    "purchased" BOOLEAN DEFAULT FALSE,
    "name" VARCHAR(80) NOT NULL,
    "quantity" DECIMAL(4,2) NOT NULL,
    "unit" VARCHAR(20) 
);

INSERT INTO "shopping_list" ("name", "quantity", "unit")
VALUES ('carrots', 3, 'lbs'), ('apples', 5, 'lbs'), ('french bread', 1, 'loaf'), ('pecans', 3, 'cups'), ('milk', 2, 'gallons');