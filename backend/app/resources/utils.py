from sqlalchemy.orm import load_only
from app import db

def get_only(table, fields, limit=10):
  query = db.session.query(table).options(load_only(
    *fields)).limit(limit)
  result = []
  for obj in query:
    result.append({key: getattr(obj, key) for key in fields})

  return result