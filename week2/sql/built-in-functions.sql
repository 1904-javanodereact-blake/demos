set schema 'spaceship';
-- Scalar functions
-- SELECT UPPER('hello');
-- SELECT FLOOR(25.8);
-- SELECT CURRENT_TIMESTAMP;
-- SELECT ship_id, UPPER(ship_name) FROM spaceship;

-- Aggregate functions 
-- SELECT COUNT(ship_id) FROM spaceship WHERE ship_owner = 2;

-- SELECT MAX(speed) FROM spaceship;

SELECT ship_owner, MAX(speed) FROM spaceship GROUP BY ship_owner;


