from app import db
from dataclasses import dataclass
import enum

@dataclass
class Ingredient(db.Model):
  __tablename__ = 'ingredient'
  id: int
  name: str
  unit: str
  amount: enum

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(128))
  unit = db.Column(db.Enum('g', 'pc/s', 'ml', name='unit_enum'))
  amount = db.Column(db.Float)
  recipe_id = db.Column(db.Integer, db.ForeignKey('recipe.id'))
