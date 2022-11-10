import { pool } from '../index.js';


export const getAllTasks = (request, response) => {
    pool.query('SELECT * FROM tasks ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

export const getTask = (req, res) => {
    return res.json(req.Task);
  };

export const getTaskById = (request, response, next, TaskId) => {
    const id = parseInt(request.params.TaskId)

    pool.query('SELECT * FROM tasks WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        next();
    })
}

export const createTask = (request, response) => {
    const taskname = request.body.taskname
    pool.query(`INSERT INTO tasks (taskname) VALUES ($1)`, [taskname], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Task added with ID: ${results.insertId}`)
    })
}


export const updateTask = (request, response) => {
    const id = parseInt(request.params.TaskId)
    const isdone = request.body.isdone

    pool.query(
        'UPDATE tasks SET  isdone = $1 WHERE id = $2',
        [isdone, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Task modified with ID: ${id}`)
        }
    )
}

export const deleteTask = (request, response) => {
    const id = parseInt(request.params.TaskId)

    pool.query('DELETE FROM tasks WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Task deleted with ID: ${id}`)
    })
}
