from flask import Flask, jsonify, make_response, request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS
from createapp import create_app,db
from flask_jwt_extended import create_access_token
from dotenv import load_dotenv
import os
from createapp import create_app, db, ma
from models import Users, Videos, video_schema, videos_schema, user_schema, users_schema

app = create_app()

@app.route('/api/login', methods=['POST'])
def login():
    email = request.get_json().get("email")
    password = request.get_json().get("password")

    user = Users.query.filter_by(email=email, password=password).all()
    if not user:
        return jsonify({"msg": "Bad username or password"}), 401 # unauthorized
    else:
        access_token = user[-1].id
        return jsonify(access_token=access_token), 200

@app.route("/api/register", methods=["POST"])
def register():
    firstname = request.get_json().get("firstname")
    lastname = request.get_json().get("lastname")
    email = request.get_json().get("email")
    password = request.get_json().get("password")

    email_exists = Users.query.filter_by(email=email).all()
    
    # if email is in database return already created
    if email_exists:
        return jsonify({"msg": "Bad username or password"}), 409 # Already exists
    # if email is not in database create account
    else:
        print('email does not exist')
        access_token = create_access_token(identity=email)
        user = Users(id=access_token,
         first_name=firstname,
         last_name=lastname,
         email=email,
         password=password)
        db.session.add(user)
        db.session.commit()
        return jsonify({"msg": f"{email}'s account has been created"}), 200 # success

####################################
#
# Retrieve Database Information
#
####################################

# Route to retrieve alll video from database
@app.route('/api/videos', methods=['GET'])
def return_videos():
    videos = Videos.query.filter(Videos.is_public == True).all()

    if not videos:
        return "No public videos published", 404
    else:
        for video in videos:
            video.id = "private"
        results = videos_schema.dump(videos)
        response = jsonify(results)
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response

# Route to retrieve alll video from database
@app.route('/api/user_videos', methods=['POST'])
def return_user_videos():
    user_id = request.get_json().get('id')
    videos = Videos.query.filter((Videos.id==user_id) | (Videos.is_public == True)).all()

    if not videos:
        return "No videos for user", 404
    else:
    
        results = videos_schema.dump(videos)
        response = jsonify(results)
        response.headers.add('Access-Control-Allow-Origin', '*')

    return response


# # Route to retrieve videos from database based on event type
# @app.route('/event_type_search', methods=['POST'])
# def search_by_type():
#     event_type_test = request.form.get("event_type")
#     #search = VIDEO.query.filter_by(VIDEO.event_type.in_(event_type_test))

#     type_search = Videos.query.filter(Videos.event_type==event_type_test)
#     return render_template('home.html', type_search=type_search)


# # Route to retrieve videos from database based on date
# @app.route('/date_search', methods=['POST'])
# def search_by_date():
#     date_test = request.form.get("date")
#     date_search = Videos.query.filter(Videos.date==date_test)
#     return render_template('home.html', date_search=date_search)

# # Route to retrieve videos from database based on date and time
# @app.route('/date_time_search', methods=['POST'])
# def search_by_date_time():
#     date_t = request.form.get("date")
#     time_t = request.form.get("time")
#     date_time_search = Videos.query.filter((Videos.date==date_t) & (Videos.time==time_t))
#     return render_template('home.html', date_time_search=date_time_search)


####################################
#
# Add information to database
#
####################################

# Route to put data into database
@app.route('/api/add_video', methods=["POST"])
def post_video():

    data = request.get_json()
    
    try:
        video = Videos(id=data.get('id'),
                            name=data.get('name'),
                            event_type=data.get('event_type'),
                            duration=data.get('duration'),
                            fps=int(data.get('fps')),
                            original_fps=data.get('original_fps'),
                            date=data.get('date'),
                            time=data.get('time'),
                            size=float(data.get('size')),
                            width=int(data.get('width')),
                            height=int(data.get('height')),
                            url=data.get('url'),
                            is_public=bool(data.get('is_public')))

        db.session.add(video)
        db.session.commit()

        return jsonify({"msg": "success"}), 200 # success
    except:
        return jsonify({"msg": "Incorrect information"}), 500 # success
    


if __name__ == "__main__":
    app.run(host='0.0.0.0', port='5000', debug=True)