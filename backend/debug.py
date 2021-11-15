from app import app
import json 
import requests

def test_api():
  # payload = json.dumps({
  #   'email': 'jakub.vins2@gmail.com',
  #   'password': 'heslo123'}
  #   )
  req = requests.delete('http://127.0.0.1:5000/recipes/1')
  pass



def test_client():
  with app.test_client() as client:
    req = client.delete('recipes', recipe_id=1)
    print(req.json)


if __name__ == '__main__':
  test_client()