CREATE VIEW favoris_with_user AS SELECT favoris.*, "user".email  FROM favoris JOIN "user" ON "user".id = favoris."user_id";