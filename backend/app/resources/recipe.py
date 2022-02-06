from flask_restful import Resource
from app.models import Recipe
from flask import jsonify, request
from app import api, db
import json

@api.resource('/recipes/<recipe_id>')
class RecipeResource(Resource):
  def get(self, recipe_id):
    recipe = db.session.query(Recipe).get(recipe_id)
    return jsonify(recipe)
    
  def delete(self, recipe_id):
    db.session.query(Recipe).filter_by(id=recipe_id).delete()
    db.session.commit()

@api.resource('/recipes')
class RecipeResourceList(Resource):
  def post(self):
    db.session.add(Recipe(json.loads(request.json)['name']))
    db.session.commit()