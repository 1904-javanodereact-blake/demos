set schema 'chinook';
-- Find all tracks containing the word Angel, case insensitive
-- SELECT * FROM track WHERE UPPER(name) LIKE '%DA%';

-- SELECT albumid FROM track WHERE name = 'Enter Sandman';
-- SELECT artistid FROM album WHERE albumid IN (9,148);
-- SELECT name FROM artist WHERE artistid IN (7,50);

-- Combine all of the above into one query with nested queries
-- SELECT name FROM artist WHERE artistid IN (
-- 	SELECT artistid FROM album WHERE albumid IN (
-- 		SELECT albumid FROM track WHERE name = 'Crazy Train'));

-- SELECT * FROM playlisttrack;
-- SELECT * FROM playlist ORDER BY name;

-- Select all playlists that contain a track with the provided name
-- SELECT playlistid, name from playlist WHERE playlistid IN (
-- 	SELECT playlistid FROM playlisttrack WHERE trackid IN(
-- 		SELECT trackid FROM track WHERE name = 'No More Tears'));

