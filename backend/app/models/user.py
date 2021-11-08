from app import db
from dataclasses import dataclass
import bcrypt 

@dataclass
class User(db.Model):
  __tablename__ = 'user'
  user = db.Column(db.Integer, primary_key=True)
  email = db.Column(db.String(128), unique=True)
  password_hash = db.Column(db.String(64))
  salt = db.Column(db.String(32))
  
  def hash_password(self, password):
    salt = bcrypt.gensalt()
    self.salt = salt.decode('utf-8')
    return bcrypt.hashpw(password.encode('utf-8'), salt).decode('utf-8')

  def check_password(self, password):
    hashed = bcrypt.hashpw(password.encode('utf-8'), self.salt.encode('utf-8'))
    return bcrypt.checkpw(hashed, self.password_hash.encode('utf-8'))
  
  def __init__(self, **kwargs):
    kwargs['password_hash'] = self.hash_password(kwargs.pop('password'))
    super().__init__(**kwargs)

