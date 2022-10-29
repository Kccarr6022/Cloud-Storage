import json
from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import os

# init app
basedir = os.path.abspath(os.path.dirname(__file__))  # base directory
app = Flask(__name__)

# Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'database.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


# init db and ma
db = SQLAlchemy(app)
ma = Marshmallow(app)

# Database classes
class USER(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(100))
    last_name = db.Column(db.String(100))
    email = db.Column(db.String(100))

    def __rep__(self):
        return f"Name: {self.first_name}, {self.last_name}"
   # def __init__(self, id, first_name, last_name):
    #    self.id = id
     #   self.first_name = first_name
      #  self.last_name = last_name

class VIDEO(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    event_type = db.Column(db.String(10))
    duration = db.Column(db.String(100))
    fps = db.Column(db.Integer, nullable=False)
    original_fps = db.Column(db.Integer, nullable=False)
    date = db.Column(db.String(100))
    time = db.Column(db.String(100))
    size = db.Column(db.Float)
    width = db.Column(db.Integer)
    height = db.Column(db.Integer)
    url = db.Column(db.String(100))

    def __rep__(self):
        return f"Name: {self.name}, {self.event_type}"
    #def __init__(self, name, event_type, duration, fps, original_fps, date, time, size, width, height, url):
     #   self.id = id
      #  self.name = name
      #  self.event_type = event_type
      #  self.duration = duration
      #  self.fps = fps
      #  self.original_fps = original_fps
      #  self.date = date
      #  self.time = time
      #  self.size = size
      #  self.width = width
      #  self.height = height
      #  self.url = url

# Database schemas
class VideoSchema(ma.Schema):
    class Meta: # symptom number, symptom, symptom value
        fields = ('id', 'name', 'event_type', 'duration', 'fps', 'original_fps', 'date', 'time', 'size', 'width', 'height', 'url')

class UserSchema(ma.Schema):
    class Meta:
        fields = ('id', 'first_name', 'last_name', 'email')

# Init schema

video_schema = VideoSchema()
videos_schema = VideoSchema(many=True)

user_schema = UserSchema()
user_schema = UserSchema(many=True)

#db.drop_all()
#db.create_all()

@app.route('/members', methods=['GET'])
def get_members():
    pass
    return {'members': ['kaden', 'josh', 'james']}



# Route to put data into database
@app.route('/add_video', methods=["POST"])
def post_video():
    name = request.form.get("name")
    event_type = request.form.get("event_type")
    duration = request.form.get("duration")
    fps = int(request.form.get("fps"))
    original_fps = int(request.form.get("original_fps"))
    date = request.form.get("date")
    time = request.form.get("time")
    size = float(request.form.get("size"))
    if request.form.get("resolution") == "4k":
        width = 3840
        height = 2160
    elif request.form.get("resolution") == "1080p":
        width=1920
        height=1080
    url = request.form.get("url")

    test_vid = VIDEO(name=name,
                          event_type=event_type,
                          duration=duration,
                          fps=fps,
                          original_fps=original_fps,
                          date=date,
                          time=time,
                          size=size,
                          width=width,
                          height=height,
                          url=url)

    db.session.add(test_vid)
    db.session.commit()

# Route to delete user from database
@app.route('/delete_user/<int:id>')
def delete_user_record(id):
    data = USER.query.get(id)
    db.session.delete(data)
    db.session.commit()

# Route to delete video from database
@app.route('/delete_video/<int:id>')
def delete__video_record(id):
    data = VIDEO.query.get(id)
    db.session.delete(data)
    db.session.commit()
    return render_template('addvideo.html')

# Route to retrieve alll data from database
@app.route('/api/archieve', methods=['GET'])
def return_archieve():
    users = USER.query.all()
    videos = VIDEO.query.all()
    results = user_schema.dump(users)
    return json(users)

# Route to retrieve alll user data from database
@app.route('/api/users', methods=['GET'])
def return_users():
    users = USER.query.all()
    results = user_schema.dump(users)
    response = json(results)
    return response

# Route to retrieve alll video from database
@app.route('/api/videos', methods=['GET'])
def return_videos():
    users = USER.query.all()
    videos = VIDEO.query.all()
    results = video_schema.dump(videos)
    response = json(results)
    return response


# Route to retrieve videos from database based on event type
@app.route('/event_type_search', methods=['POST'])
def search_by_type():
    event_type_test = request.form.get("event_type")
    #search = VIDEO.query.filter_by(VIDEO.event_type.in_(event_type_test))

    type_search = VIDEO.query.filter(VIDEO.event_type==event_type_test)
    return render_template('home.html', type_search=type_search)


# Route to retrieve videos from database based on date
@app.route('/date_search', methods=['POST'])
def search_by_date():
    date_test = request.form.get("date")
    date_search = VIDEO.query.filter(VIDEO.date==date_test)
    return render_template('home.html', date_search=date_search)

# Route to retrieve videos from database based on date and time
@app.route('/date_time_search', methods=['POST'])
def search_by_date_time():
    date_t = request.form.get("date")
    time_t = request.form.get("time")
    date_time_search = VIDEO.query.filter((VIDEO.date==date_t) & (VIDEO.time==time_t))
    return render_template('home.html', date_time_search=date_time_search)

# temporarily create account page
@app.route('/createaccount', methods=['GET'])
def about():
    return render_template('create-account.html')

# Route to add user to database
@app.route('/add_user', methods=["POST"])
def account():
    first_name = request.form.get("first_name")
    last_name = request.form.get("last_name")
    email = request.form.get("email")
    
    user = USER(first_name=first_name, last_name=last_name,email=email)
    db.session.add(user)
    db.session.commit()
    return render_template('create-account.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0', port='5000', debug=True)