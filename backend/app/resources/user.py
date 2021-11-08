from flask_restful import Resource
from app.models import User
from flask import jsonify, request
from app import api, db
import json

@api.resource('/users')
class UserResourceList(Resource):
  def post(self):
    db.session.add(User(**json.loads(request.json)))
    db.session.commit()