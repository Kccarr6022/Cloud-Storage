def deploy():
    """Run deployment tasks."""
    from app import create_app, db
    from models import User, Video, video_schema, videos_schema, user_schema, users_schema

    app = create_app()
    # create database and tables
    db.create_all()
    

deploy()