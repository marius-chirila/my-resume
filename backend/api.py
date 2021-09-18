# app.py

# Required imports
import os
from flask import Flask, request, jsonify
from google.cloud import firestore

# Initialize Flask app
app = Flask(__name__)

# Initialize Firestore DB
db = firestore.Client()
todo_ref = db.collection('visitors').document('counting')

@app.route('/', methods=['POST', 'PUT'])
def update():
  try:
    todo_ref.update({"count": firestore.Increment(1)})
    return f"Success"
  except Exception as e:
    return f"An Error Occured: {e}"

@app.route('/', methods=['GET'])
def read():
  try:
    todo = todo_ref.get()
    return jsonify(todo.to_dict())
  except Exception as e:
     return f"An Error Occured: {e}"
  

port = int(os.environ.get('PORT', 8080))
if __name__ == '__main__':
    app.run(threaded=True, host='0.0.0.0', port=port)