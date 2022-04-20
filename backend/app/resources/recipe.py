from flask_restful import Resource
from app.models import Recipe, IngredientQuantity, Ingredient
from flask import jsonify, request
from app import api, db

import json
from app.models.recipe import RecipeDirection
from .utils import get_only
from config import ROOT_PATH


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
    def get(self):
        fields = ['id', 'name', 'type']
        recipes = get_only(Recipe, fields)
        return jsonify(recipes)

    def post(self):
        image = request.files['image']
        data = dict(request.form)
        ingredientQuantities = json.loads(data.pop('ingredients'))
        directions = json.loads(data.pop('directions'))

        recipe = Recipe(**data)
        db.session.add(recipe)
        ingredients = [ing.name for ing in db.session.query(Ingredient)]
        print(ingredients)
        for ing in ingredientQuantities:
            ing.pop('id')
            if ing['name'] not in ingredients:
                db.session.add(Ingredient(name=ing['name']))
            recipe.ingredients.append(IngredientQuantity(**ing))

        for order, dir in enumerate(directions, 1):
            dir.pop('id')
            dir['order'] = order
            recipe.directions.append(RecipeDirection(**dir))

        db.session.commit()
        image.save(f'{ROOT_PATH}/public/images/{recipe.id}.jpg')


@api.resource('/ingredients')
class IngredientResource(Resource):
    def get(self):
        fields = ['name']
        ingredients = get_only(Ingredient, fields)
        return jsonify(ingredients)
