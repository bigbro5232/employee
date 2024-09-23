// eRouter.js
const express = require('express');
const router = express.Router();
const pool = require('../dbPool.js');

router.get('/', async (req, res) => {
    const sql = `SELECT * FROM employee ORDER BY idx DESC`;
    try {
        const [data] = await pool.query(sql);
        return res.json(data);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

router.delete('/:idx', async (req, res) => {
    const { idx } = req.params;
    const sql = `DELETE FROM employee WHERE idx=?`;
    try {
        const [data] = await pool.query(sql, [idx]);
        return res.json(data);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

module.exports = router;