from app import db
from dataclasses import dataclass

@dataclass
class Recipe(db.Model):
  __tablename__ = 'recipe'

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(256))
  
  def __init__(self, name):
    self.name = name