from app import db
from dataclasses import dataclass
import hashlib, os

@dataclass
class User(db.Model):
  __tablename__ = 'user'
  id: int
  name: str
  email: str

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(128), unique=True)
  email = db.Column(db.String(128), unique=True)
  password_hash = db.Column(db.LargeBinary)
  salt = db.Column(db.LargeBinary)
  
  def hash_password(self, password):
    self.salt = os.urandom(64)
    return hashlib.pbkdf2_hmac(
      'sha256', password.encode('utf-8'), self.salt , 1000000)

  def check_password(self, password):
    hashed = hashlib.pbkdf2_hmac(
      'sha256', password.encode('utf-8'),
      self.salt, 1000000)
    return hashed == self.password_hash
  
  def __init__(self, **kwargs):
    kwargs['password_hash'] = self.hash_password(kwargs.pop('password'))
    super().__init__(**kwargs)

