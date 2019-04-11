set schema 'spaceship';

-- RETURNING will allow me to see actual values for the record created
INSERT INTO spaceship (ship_name, ship_owner) 
	VALUES ('Bouey', 1)
	RETURNING ship_id;

-- SELECT * FROM spaceship;
	