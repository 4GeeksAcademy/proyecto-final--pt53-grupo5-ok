"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
import requests 
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

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

@api.route('/registro', methods=['POST'])
def registro():
    email = request.json.get("email")
    firstname = request.json.get("firstaname")
    lastname = request.json.get("lastname")
    birthdate = request.json.get("birthdate")
    gender = request.json.get("gender")
    type = request.json.get("type")
    region = request.json.get("region")
    password = request.json.get("password")


    if not email: 
        return jsonify({"error":"email es requerido"}), 400
    if not firstname: 
        return jsonify({"error":"firstname es requerido"}), 400
    if not lastname: 
        return jsonify({"error":"lastname es requerido"}), 400
    if not birthdate: 
        return jsonify({"error":"birthdate es requerido"}), 400
    if not gender: 
        return jsonify({"error":"gender es requerido"}), 400
    if not type: 
        return jsonify({"error":"type es requerido"}), 400
    if not region: 
        return jsonify({"error":"region es requerido"}), 400
    if not password: 
        return jsonify({"error":"password es requerido"}), 400
    
    
    encontrado = User.query.filter_by(email=email).first()
    if encontrado: 
        return jsonify({"error":"email es requerido"}), 400
    

    user = User()
    user.email = email
    user.firstname = firstname
    user.lastname = lastname
    user.birthdate = birthdate
    user.gender = gender
    user.type = type
    user.region = region
    user.password = generate_password_hash(password)


    db.session.add(user)
    db.session.commit()
    return jsonify({"mensaje":"registro exitoso, inicie sesion por favor."}), 200

@api.route("/login", methods=["POST"])
def login():
    
    datos = request.json
    email = datos.get('email')
    pasword = datos.get('password')

    if not email:
        return jsonify({"status": "fail", "mesage": "Email is required"}), 422
    
    if not password: 
        return jsonify({"status": "fail", "mesage": "Password is required"}), 422
    
    found = User.query.filter_by(email=email). first()

    if not found:
        return jsonify({"status": "fail", "message": "Credentials are incorrects"}), 401
    
    if not check_password_hash(found.password, password):
        return jsonify({"status": "fail", "message": "Credentials are incorrects"}), 401
    
    datos = {
        "id": found.id,
        "email": found.email,
    }

    access_token = create_access_token(identy=datos)

    return jsonify({ "status": "success", "message": "login sucessfully", "access_token": access_token, "user": found.serialize()}), 200





