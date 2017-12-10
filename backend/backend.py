from flask import Flask
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

dummy_payload = [
    {"name": "Kippola", "price": 4.5, "location": [1, 2]},
    {"name": "Kuppila", "price": 4.2, "location": [4, 2]},
    {"name": "Kolhula", "price": 4.8, "location": [-1, -2]},
]


class Recommender(Resource):
    def get(self):
        return {'recommendations': dummy_payload}


api.add_resource(Recommender, '/')

if __name__ == '__main__':
    app.run()
