import datetime
import threading
from time import sleep

from google.cloud import firestore

db = firestore.Client(project='myresumeonline')
visitor_ref = db.collection(u'visitors')

doc = visitor_ref.get()
if doc.exists:
    print(f'Document data: {doc.to_dict()}')
else:
    print(u'No such document!')