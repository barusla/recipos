from flask_restful import Resource
from app.models import Recipe
from flask import jsonify, request
from app import api, db

@api.resource('/recipes/<id>')
class RecipeResource(Resource):
  def get(self, id):
    recipe = db.session.query(Recipe).get(id)
    return jsonify(recipe)

  def post(self, id):
    return request.json
    db.session.add(Recipe(request.json['name']))
    db.session.commit()