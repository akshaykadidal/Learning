from flask import Flask, render_template, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/metrics')
def get_metrics():
    return jsonify({
        'inventory_turnover': 12.5,
        'order_fulfillment': 95.2,
        'supplier_performance': 88.7,
        'forecast_accuracy': 92.1
    })

@app.route('/api/tasks')
def get_tasks():
    return jsonify([
        {
            'id': 1,
            'title': 'Inventory Optimization',
            'status': 'In Progress',
            'date': 'February 15, 2024'
        },
        {
            'id': 2,
            'title': 'Supplier Risk Assessment',
            'status': 'Pending',
            'date': 'February 16, 2024'
        },
        {
            'id': 3,
            'title': 'Demand Forecasting Update',
            'status': 'Completed',
            'date': 'February 14, 2024'
        }
    ])

@app.route('/api/ai/analyze')
def analyze_supply_chain():
    return jsonify({
        'recommendations': [
            'Consider increasing safety stock for high-demand items',
            'Evaluate alternative suppliers for critical components',
            'Optimize delivery routes based on current demand patterns'
        ],
        'risks': [
            'Potential supply disruption in Asia Pacific region',
            'Increasing lead times from key suppliers',
            'Seasonal demand fluctuations approaching'
        ]
    })

if __name__ == '__main__':
    app.run(debug=True)