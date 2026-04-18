const express = require('express');

const router = express.Router();

const tasks = [
    {
        id: 1, 
        title: 'Learn Node.js', 
        completed: false,
        priority: 'high',
        created_at: new Date()
    },
    {
        id: 2, 
        title: 'Build REST API', 
        completed: false,
        priority: 'medium',
        created_at: new Date()
    },
    {
        id: 3,
        title: 'Write Documentation',
        completed: false,
        priority: 'medium',
        created_at: new Date()
    },
    {
        id: 4,
        title: 'test API',
        completed: false,
        priority: 'high',
        created_at: new Date()
    },
    {
        id: 5,
        title: 'Deploy project',
        completed: false,
        priority: 'low',
        created_at: new Date()
    }
];

router.get('/tasks', (req, res) => {
    res.json(tasks);
});

router.get('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(t => t.id == id);

    if (isNaN(id)) {
        return res.status(400).json({
            error: "Invalid ID format"
        });
    }

    if (!task) {
        return res.status(404).json({
            error: "task not found"
        });
    }
    res.json(task);
})



module.exports = router;