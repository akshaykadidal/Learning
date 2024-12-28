document.addEventListener('DOMContentLoaded', function() {
    fetchTasks();
    fetchMetrics();
});

async function fetchTasks() {
    try {
        const response = await fetch('/api/tasks');
        const tasks = await response.json();
        const tasksContainer = document.getElementById('tasks');
        
        tasks.forEach(task => {
            const taskElement = document.createElement('div');
            taskElement.className = 'task';
            taskElement.innerHTML = `
                <div>
                    <h3>${task.title}</h3>
                    <p>${task.date}</p>
                </div>
                <span class="task-status ${task.status.toLowerCase().replace(' ', '-')}">${task.status}</span>
            `;
            tasksContainer.appendChild(taskElement);
        });
    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
}

async function fetchMetrics() {
    try {
        const response = await fetch('/api/metrics');
        const metrics = await response.json();
        
        const ctx = document.getElementById('metricsChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: Object.keys(metrics),
                datasets: [{
                    label: 'Supply Chain KPIs',
                    data: Object.values(metrics),
                    borderColor: '#FA8E29',
                    backgroundColor: 'rgba(250, 142, 41, 0.1)',
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    } catch (error) {
        console.error('Error fetching metrics:', error);
    }
}