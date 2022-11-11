###############################################
# Models
# --------------------
# This file houses the definitions for all the database models via SQLAlchemy.
#
###############################################

from enum import unique
from sqlalchemy import true
from app import db,ma
from datetime import datetime
import typing

# Database classes
class Users(db.Model):
    id = db.Column(db.Text, primary_key=True) # authentication token
    first_name = db.Column(db.String(100),nullable=False)
    last_name = db.Column(db.String(100),nullable=True)
    email = db.Column(db.String(100),nullable=False)
    password = db.Column(db.String(100),nullable=False)
    videos = db.Column(db.Text,nullable=True)

    def __rep__(self):
        return f"Name: {self.first_name}, {self.last_name}"

class Videos(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    event_type = db.Column(db.String(10))
    duration = db.Column(db.String(100))
    fps = db.Column(db.Integer, nullable=False)
    original_fps = db.Column(db.Integer, nullable=False)
    date = db.Column(db.String(100), default= datetime.now)
    time = db.Column(db.String(100))
    size = db.Column(db.Float)
    width = db.Column(db.Integer)
    height = db.Column(db.Integer)
    url = db.Column(db.String(100))

    def __rep__(self):
        return f"Name: {self.name}, {self.event_type}"

# Database schemas
class VideosSchema(ma.Schema):
    class Meta: # symptom number, symptom, symptom value
        fields = ('id', 'name', 'event_type', 'duration', 'fps', 'original_fps', 'date', 'time', 'size', 'width', 'height', 'url')

class UsersSchema(ma.Schema):
    class Meta:
        fields = ('id', 'first_name', 'last_name', 'email', 'password')

####################################
#
# Schema for Exporting
#
####################################
video_schema = VideosSchema()
videos_schema = VideosSchema(many=True)
user_schema = UsersSchema()
users_schema = UsersSchema(many=True)