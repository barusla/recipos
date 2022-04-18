from app import db
from dataclasses import dataclass
import enum

@dataclass
class Recipe(db.Model):
  __tablename__ = 'recipe'
  id: int
  name: str
  author_name: str
  ingredients: list
  directions: list
  pungency: enum
  type: enum

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(256))
  user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
  pungency = db.Column(db.Enum('mild', 'medium', 'hot', 'very hot', 'extremely hot', name='pungency_enum'))
  type = db.Column(db.Enum('soup', 'main dish', 'dessert', name='recipe_type_enum'))
  
  author = db.relationship('User', uselist=False)
  ingredients = db.relationship('IngredientQuantity')
  directions = db.relationship('RecipeDirection')

  @property
  def author_name(self):
    return self.author.name

  
@dataclass
class Tag(db.Model):
  __tablename__ = 'tag'
  tag: str
  
  tag = db.Column(db.String(32), primary_key=True)


@dataclass
class RecipeTag(db.Model):
  __tablename__ = 'recipe_tag'
  id: int
  tag: str
  recipe_id: int
  
  id = db.Column(db.Integer, primary_key=True)
  recipe_id = db.Column(db.Integer, db.ForeignKey('recipe.id'))
  tag = db.Column(db.String(32), db.ForeignKey('tag.tag'))

@dataclass
class RecipeDirection(db.Model):
  __tablename__ = 'recipe_direction'
  order: int
  recipe_id: int
  direction: str
  
  order = db.Column(db.Integer, primary_key=True)
  recipe_id = db.Column(db.Integer, db.ForeignKey('recipe.id'), primary_key=True)
  direction = db.Column(db.String(512))
