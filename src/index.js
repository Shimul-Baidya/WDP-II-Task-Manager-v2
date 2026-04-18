const express = require('express');

const app = express(); 
const port = 3000;

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

app.get('/', (req, res) => {
    res.send('Task management API is running!');
});

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.get('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(t => t.id == id);
    if (!task) {
        return res.status(404).json({
            error: "task not found"
        });
    }
    res.json(task);
})

app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        uptime: process.uptime()
    });
});

app.listen(port, () =>{
    console.log(`Server running at http://localhost:${port}`);
});