###############################################
# App
# --------------------
#
# This file is referenced by manage.py.
#
###############################################

# Import the required packages
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from dotenv import load_dotenv
import os

load_dotenv()

db = SQLAlchemy()
ma = Marshmallow()
cors = CORS()

DB_URL = os.environ['POSTGRES_URL']
DB = os.environ.get('POSTGRES_DB')
DB_USER = os.environ.get('POSTGRES_USER')
DB_PASSWORD = os.environ.get('POSTGRES_PASSWORD')
CONNECTION_URL = f"postgresql+psycopg2://{DB_USER}:{DB_PASSWORD}@{DB_URL}/{DB}"

def create_app():
    # Initialize application
    """Application-factory pattern"""
    app = Flask(__name__)

    # Database
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SQLALCHEMY_POOL_SIZE'] = 400 # sets to 100 default for production (20 for our development)
    app.config['SQLALCHEMY_MAX_OVERFLOW'] = 1000 # prevent crashes
    app.config['SQLALCHEMY_DATABASE_URI'] = CONNECTION_URL
    db = SQLAlchemy(app)

    #jwt
    app.config["JWT_SECRET_KEY"] = os.environ.get('JWT_SECRET')
    jwt = JWTManager(app)


    # init db and ma
    db.init_app(app)
    ma.init_app(app)
    cors.init_app(app)
    jwt.init_app(app)

    return app
