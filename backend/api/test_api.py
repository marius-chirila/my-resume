import os
import unittest
from api import app    

#testing content type delivered
class FlaskTest(unittest.TestCase):
    def test_get(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)
        print("Success!")

if __name__ == "__main__":
    unittest.main()


