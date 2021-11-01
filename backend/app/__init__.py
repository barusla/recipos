from flask import Flask
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from config import DATBASE_URI

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = DATBASE_URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False 
api = Api(app)


db = SQLAlchemy(app)
db.create_all()

# initialize api endpoints
from .resources import *