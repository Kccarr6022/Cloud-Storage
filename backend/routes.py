from flask import Flask, render_template, request, jsonify, Blueprint
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from models import User, Video, video_schema, videos_schema, user_schema, users_schema
from app import create_app,db
import botocore
import os

####################################
#
# Global Definitions
#
####################################

UPLOAD_FOLDER = 'uploads'
BUCKET = "cloudstoragevideotest"

# Create an application instance
app = create_app()
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

####################################
#
# Authentication
#
####################################

@app.route('/api/login', methods=['POST'])
def login():
    print(request)
    print('working')
    data = request.get_json()
    print(data)
    email = data.get("email")
    password = data.get("password")
    if email != "test" or password != "test":
        return jsonify({"msg": "Bad username or password"}), 401 # unauthorized
    else:
        access_token = create_access_token(identity=email)
        return jsonify(access_token=access_token)

@app.route("/register", methods=["POST"])
def register():
    pass
    # data = request.json.get()
    # email = data.get("email")
    # password = data.get("password")
    # if email != "test" or password != "test":
    #     return jsonify({"msg": "Bad username or password"}), 401 # unauthorized
    # else:
    #     access_token = create_access_token(identity=email)

####################################
#
# Retrieve Database Information
#
####################################

# Route to retrieve alll data from database
@app.route('/api/archive', methods=['GET'])
def return_archieve():
    users = User.query.all()
    videos = Video.query.all()
    results = user_schema.dump(users)
    return jsonify(users)

# Route to retrieve alll user data from database
@app.route('/api/users', methods=['GET'])
def return_users():
    users = User.query.all()
    results = users_schema.dump(users)
    response = jsonify(results)
    return response

# Route to retrieve alll video from database
@app.route('/api/videos', methods=['GET'])
def return_videos():
    videos = Video.query.all()
    results = videos_schema.dump(videos)
    response = jsonify(results)
    return response


# Route to retrieve videos from database based on event type
@app.route('/event_type_search', methods=['POST'])
def search_by_type():
    event_type_test = request.form.get("event_type")
    #search = VIDEO.query.filter_by(VIDEO.event_type.in_(event_type_test))

    type_search = Video.query.filter(Video.event_type==event_type_test)
    return render_template('home.html', type_search=type_search)


# Route to retrieve videos from database based on date
@app.route('/date_search', methods=['POST'])
def search_by_date():
    date_test = request.form.get("date")
    date_search = Video.query.filter(Video.date==date_test)
    return render_template('home.html', date_search=date_search)

# Route to retrieve videos from database based on date and time
@app.route('/date_time_search', methods=['POST'])
def search_by_date_time():
    date_t = request.form.get("date")
    time_t = request.form.get("time")
    date_time_search = Video.query.filter((Video.date==date_t) & (Video.time==time_t))
    return render_template('home.html', date_time_search=date_time_search)


####################################
#
# Add information to database
#
####################################

# Route to put data into database
@app.route('/add_video', methods=["POST"])
def post_video():
    data = request.get_json()
    name = data.get("name")
    event_type = data.get("event_type")
    duration = data.get("duration")
    fps = int(data.get("fps"))
    original_fps = int(data.get("original_fps"))
    date = data.get("date")
    time = data.get("time")
    size = float(data.get("size"))
    if data.get("resolution") == "4k":
        width = 3840
        height = 2160
    elif data.get("resolution") == "1080p":
        width=1920
        height=1080
    url = data.get("url")

    test_vid = Video(name=name,
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


if __name__ == "__main__":
    app.run(host='0.0.0.0', port='5000', debug=True)