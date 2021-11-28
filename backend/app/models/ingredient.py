from app import db
from dataclasses import dataclass
import enum

class Ingredient(db.Model):
  __tablename__ = 'ingredient'
  name = db.Column(db.String(128), primary_key=True)


@dataclass
class IngredientQuantity(db.Model):
  __tablename__ = 'ingredient_quantity'
  id: int
  name: str
  unit: enum
  amount: float
  
  id = db.Column(db.Integer, primary_key=True)
  unit = db.Column(db.Enum('g', 'pc/s', 'ml', name='unit_enum'))
  amount = db.Column(db.Float)
  recipe_id = db.Column(db.Integer, db.ForeignKey('recipe.id'))
  name = db.Column(db.String(128), db.ForeignKey('ingredient.name',
                            ondelete="CASCADE")) 
                          

 
