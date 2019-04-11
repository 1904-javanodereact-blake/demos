set schema 'chinook';

-- SELECT t.name FROM track as t
-- 	INNER JOIN artist as a ON (a.name = t.name);

-- We can us USING instead of ON if the column in both tables is the exact same name
SELECT * FROM track 
	INNER JOIN playlisttrack USING (trackid) ON 
	INNER JOIN playlist USING (playlistid);