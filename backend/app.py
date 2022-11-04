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
import os

db = SQLAlchemy()
ma = Marshmallow()

def create_app():
    # Initialize application
    """Application-factory pattern"""
    app = Flask(__name__)

    # Database
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    #jwt
    app.config["JWT_SECRET_KEY"] = os.environ.get('JWT_SECRET')
    jwt = JWTManager(app)

    # init db and ma
    db = SQLAlchemy(app)
    ma = Marshmallow(app)

    return app