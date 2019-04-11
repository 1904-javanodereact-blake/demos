set schema 'spaceship';

-- UPDATE spaceship SET ship_owner = null WHERE ship_owner = 1;

SELECT * FROM app_user 
	FULL JOIN spaceship ON (user_id = ship_owner);