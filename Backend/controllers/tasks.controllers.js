import { pool } from "../db.js";

export const getTasks = async (req, res) => {
    try {
        const query = "SELECT * FROM tasks";
        const tasks = await pool.query(query);
        res.status(200).json(tasks.rows);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

export const getTask = async (req, res) => {
    const taskId = req.params.id;
    try {
        const query = "SELECT * FROM tasks WHERE id = $1";
        const task = await pool.query(query, [taskId]);
        if (task.rowCount === 0) {
            return res.status(404).json({ error: "Task not found" });
        }
        res.status(200).json(task.rows[0]);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

export const createTask = async (req, res) => {
    const { title, description } = req.body;
    try {
        const query = "INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *";
        const newTask = await pool.query(query, [title, description]);
        res.status(201).json(newTask.rows[0]);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

export const updateTask = async (req, res) => {
    const taskId = req.params.id;
    const { title, description } = req.body;
    try {
        const query = "UPDATE tasks SET title = $1, description = $2 WHERE id = $3 RETURNING *";
        const updatedTask = await pool.query(query, [title, description, taskId]);
        if (updatedTask.rowCount === 0) {
            return res.status(404).json({ error: "Task not found" });
        }
        res.status(200).json(updatedTask.rows[0]);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

export const deleteTask = async (req, res) => {
    const taskId = req.params.id;
    try {
        const query = "DELETE FROM tasks WHERE id = $1 RETURNING *";
        const deletedTask = await pool.query(query, [taskId]);
        if (deletedTask.rowCount === 0) {
            return res.status(404).json({ error: "Task not found" });
        }
        res.status(200).json(deletedTask.rows[0]);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};
export default router;

/*

import {pool} from "../db.js";
export const getTasks = async (req, res) => {
    res.send('---')
    try {
        const [result] = await pool.query(
            "SELECT * FROM tasks ORDER BY createAt ASC"
        );
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
export const getTask = async (req, res) => {
    res.send('get')
    try {
        const [result] = await pool.query("SELECT * FROM tasks WHERE id = ?", [
            req.params.id,
        ]);

        if (result.length === 0)
            return res.status(404).json({ message: "Task not found" });

        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
export const selectTask = (req, res) => {
    res.send('select')
}
export const updateTask = async (req, res) => {
    res.send('update')
        const result = await pool.query("UPDATE tasks SET ? WHERE id = ?", [
            req.body,
            req.params.id,
        ]);
        res.json(result);
};
export const deleteTask = async (req, res) => {
    res.send('delete')
        const [result] = await pool.query("DELETE FROM tasks WHERE id = ?", [
            req.params.id,
        ]);
        if (result.affectedRows === 0)
            return res.status(404).json({ message: "Task not found" });

        return res.sendStatus(204);
};
*/



