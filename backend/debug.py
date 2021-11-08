from app import app
import json 
import requests

def test_api():
  payload = json.dumps({
    'email': 'jakub.vins2@gmail.com',
    'password': 'heslo123'}
    )
  requests.post('http://127.0.0.1:5000/users', json=payload)


def test_client():
  with app.test_client() as client:
    client.post('recipes', json=json.dumps({'name': 'recipo2'}))

if __name__ == '__main__':
  test_api()
    