import path from 'path'

let absolutePath = path.resolve('./backup/Todos-tasks.csv');

export const backupQuery = `COPY (
	SELECT 
    id AS "_id",
    taskname ,
    CASE WHEN isdone=TRUE THEN 'TRUE' ELSE 'FALSE' END AS "isdone"
    FROM tasks)
TO '${absolutePath}' WITH (FORMAT CSV, HEADER TRUE)`

console.log(absolutePath)
