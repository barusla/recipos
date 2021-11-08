from app import db
from dataclasses import dataclass
from sqlalchemy import ForeignKey

@dataclass
class Recipe(db.Model):
  __tablename__ = 'recipe'

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(256))
  author = db.Column(db.Integer, ForeignKey('user.id'))

  def __init__(self, name):
    self.name = name