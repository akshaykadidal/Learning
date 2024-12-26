from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
app.config['SECRET_KEY'] = 'your-secret-key'
db = SQLAlchemy(app)

# Database Models
class News(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    content = db.Column(db.Text, nullable=False)
    date_posted = db.Column(db.DateTime, default=datetime.utcnow)

class Event(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    description = db.Column(db.Text, nullable=False)
    date = db.Column(db.DateTime, nullable=False)

# Routes
@app.route('/')
def home():
    news = News.query.order_by(News.date_posted.desc()).limit(3).all()
    events = Event.query.order_by(Event.date).limit(3).all()
    return render_template('home.html', news=news, events=events)

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/membership')
def membership():
    return render_template('membership.html')

@app.route('/events')
def events():
    events = Event.query.order_by(Event.date).all()
    return render_template('events.html', events=events)

@app.route('/news')
def news():
    news = News.query.order_by(News.date_posted.desc()).all()
    return render_template('news.html', news=news)

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)