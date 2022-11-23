from flask import Flask, jsonify, make_response
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS
from createapp import create_app,db
from dotenv import load_dotenv
import os
# from models import Users, Videos, video_schema, videos_schema, user_schema, users_schema



app = Flask(__name__)

environ_var = os.environ.get('POSTGRES_PASSWORD')

@app.route("/")
def hello_from_root():
    return jsonify(message=f'Hello from {environ_var}!')


@app.route("/hello")
def hello():
    return jsonify(message='Hello from path!')


@app.errorhandler(404)
def resource_not_found(e):
    return make_response(jsonify(error='Not found!'), 404)
