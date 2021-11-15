from app import db
from dataclasses import dataclass

@dataclass
class Recipe(db.Model):
  __tablename__ = 'recipe'
  id: int
  name: str
  author_name: str
  ingredients: list

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(256))
  author_id = db.Column(db.Integer, db.ForeignKey('user.id'))

  author = db.relationship('User', uselist=False)
  ingredients = db.relationship('Ingredient')

  @property
  def author_name(self):
    return self.author.name

  def __init__(self, name):
    self.name = name