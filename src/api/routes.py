"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
import requests 

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/enfermedades', methods=['GET'])
def enfermedades():
    response = requests.get("https://odphp.health.gov/myhealthfinder/api/v3/topicsearch.json?TopicId=30535")
    response=response.json()
    return jsonify({"titulo":response["Result"]["Resources"]})

@api.route('/enfermedades1', methods=['GET'])
def enfermedades1():
    response = requests.get("https://odphp.health.gov/myhealthfinder/api/v3/topicsearch.json?TopicId=539")
    response=response.json()
    return jsonify({"titulo":response["Result"]["Resources"]})


@api.route('/enfermedades2', methods=['GET'])
def enfermedades2():
    response = requests.get("https://odphp.health.gov/myhealthfinder/api/v3/topicsearch.json?TopicId=540")
    response=response.json()
    return jsonify({"titulo":response["Result"]["Resources"]})

@api.route('/enfermedades3', methods=['GET'])
def enfermedades3():
    response = requests.get("https://odphp.health.gov/myhealthfinder/api/v3/topicsearch.json?TopicId=30560")
    response=response.json()
    return jsonify({"titulo":response["Result"]["Resources"]})

@api.route('/enfermedades4', methods=['GET'])
def enfermedades4():
    response = requests.get("https://odphp.health.gov/myhealthfinder/api/v3/topicsearch.json?TopicId=30589")
    response=response.json()
    return jsonify({"titulo":response["Result"]["Resources"]})


