from flask_restful import Resource
from app.models import Recipe
from flask import jsonify, request
from app import api, db
import json

@api.resource('/recipes/<id>')
class RecipeResource(Resource):
  def get(self, id):
    recipe = db.session.query(Recipe).get(id)
    return jsonify(recipe)

@api.resource('/recipes')
class RecipeResourceList(Resource):
  def post(self):
    db.session.add(Recipe(json.loads(request.json)['name']))
    db.session.commit()