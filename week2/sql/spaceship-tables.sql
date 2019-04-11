set schema 'spaceship';
CREATE TABLE app_user (
	user_id SERIAL PRIMARY KEY,
	username TEXT UNIQUE NOT NULL,
	user_password TEXT NOT NULL,
	full_name TEXT,
	user_role TEXT
);

CREATE TABLE spaceship (
	ship_id SERIAL PRIMARY KEY,
	ship_owner INTEGER REFERENCES app_user (user_id),
	ship_name TEXT UNIQUE,
	weight DOUBLE precision,
	speed DOUBLE precision,
	description TEXT
);
