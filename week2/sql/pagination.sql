set schema 'spaceship';

SELECT * FROM spaceship as ship
	INNER JOIN app_user as u ON ship.ship_owner = u.user_id
	ORDER BY u.user_id
	LIMIT 3
	OFFSET 6;