UPDATE shelfies
SET name = $3, price = $4
WHERE shelfletter = $1 AND binnumber = $2;