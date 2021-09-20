import os
import unittest
from api import app    

class FlaskTest(unittest.TestCase):
    def test_get(self):
       tester = app.app.test_client(self)
       response = tester.get(self.URL)
       self.assertEqual(response.content_type, "application/json")
       print("Success!")

if __name__ == "__main__":
    unittest.main()


