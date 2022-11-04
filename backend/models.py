###############################################
# Models
# --------------------
# This file houses the definitions for all the database models via SQLAlchemy.
#
###############################################

from sqlalchemy import true
from app import db,ma

# Database classes
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True) # authentication token
    first_name = db.Column(db.String(100),nullable=True)
    last_name = db.Column(db.String(100),nullable=True)
    email = db.Column(db.String(100),nullable=True)
    videos = db.Column(db.Text,nullable=True)

    def __rep__(self):
        return f"Name: {self.first_name}, {self.last_name}"

class Video(db.Model):
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

# Database schemas
class VideoSchema(ma.Schema):
    class Meta: # symptom number, symptom, symptom value
        fields = ('id', 'name', 'event_type', 'duration', 'fps', 'original_fps', 'date', 'time', 'size', 'width', 'height', 'url')

class UserSchema(ma.Schema):
    class Meta:
        fields = ('id', 'first_name', 'last_name', 'email')

####################################
#
# Schema for Exporting
#
####################################
video_schema = VideoSchema()
videos_schema = VideoSchema(many=True)
user_schema = UserSchema()
users_schema = UserSchema(many=True)