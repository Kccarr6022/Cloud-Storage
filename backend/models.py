###############################################
# Models
# --------------------
# This file houses the definitions for all the database models via SQLAlchemy.
#
###############################################

from enum import unique
from sqlalchemy import true, ForeignKey
from app import db,ma
from datetime import datetime

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
    id = db.Column(db.Text, ForeignKey("users.id"))
    name = db.Column(db.String(100), primary_key = True)
    event_type = db.Column(db.String(10), nullable=True)
    duration = db.Column(db.String(100), nullable=False)
    fps = db.Column(db.Integer, nullable=True)
    original_fps = db.Column(db.Integer, nullable=True)
    date = db.Column(db.String(100), nullable=False)
    time = db.Column(db.String(100), nullable=False)
    size = db.Column(db.Float, nullable= False)
    width = db.Column(db.Integer, nullable = False)
    height = db.Column(db.Integer, nullable = False)
    url = db.Column(db.String(100), nullable=False)

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