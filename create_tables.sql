CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE categories(
	
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(200) UNIQUE NOT NULL);
    
    
CREATE TABLE products(

	id uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
  	name VARCHAR(200) NOT NULL,
  	price DECIMAL(8,2), 
  	category_id INTEGER,
  	FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL

);