set schema 'chinook';

-- CREATE OR REPLACE VIEW customers_tracks AS 
-- SELECT track.name, customer.firstname as c_name  FROM track 
-- INNER JOIN invoiceline USING (trackid)
-- INNER JOIN invoice USING (invoiceid)
-- INNER JOIN customer USING (customerid);

SELECT name FROM customers_tracks WHERE c_name = 'Ellie'
EXCEPT
SELECT name FROM customers_tracks WHERE c_name = 'Leonie';