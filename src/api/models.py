from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    __tablename__ = 'user'
    # Here we define db.Columns for the table person
    # Notice that each db.Column is also a normal Python instance attribute.
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(250), nullable=False)
    firstname = db.Column(db.String(250), nullable=False)
    lastname = db.Column(db.String(250), nullable=False)
    birthdate = db.Column(db.DateTime(timezone=True), nullable=False)
    gender = db.Column(db.Integer, db.ForeignKey('gender.id'))
    type = db.Column(db.String(250), nullable=False)
    region = db.Column(db.Integer, db.ForeignKey('region.id'))
    password = db.Column(db.String(250), nullable=False)

    def serialize(self):
        return {
            "id":self.id,
            "email":self.email,
            "firstname":self.firstname,
            "lastname":self.lastname,
            "birthdate":self.birthdate,
            "gender": self.gender,
            "type": self.type,
            "region":self.region,
        }
    

class Post(db.Model):
    __tablename__ = 'post'
    # Here we define db.Columns for the table address.
    # Notice that each db.Column is also a normal Python instance attribute.
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    post = db.relationship(User)

class Media(db.Model):
    __tablename__ = 'media'
    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(250), nullable=False)
    url = db.Column(db.String(250), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey('post.id'))
    media = db.relationship(Post)

class Like(db.Model):
    __tablename__ = 'like'
    id = db.Column(db.Integer, primary_key=True)
    author_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    post_id = db.Column(db.Integer, db.ForeignKey('post.id'))
    # Relación con el modelo User
    user = db.relationship('User', backref='likes', lazy=True)

    # Relación con el modelo Post
    post = db.relationship('Post', backref='likes', lazy=True)

class Follow(db.Model):
    __tablename__ = 'follow'
    id = db.Column(db.Integer, primary_key=True)
    user_from_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user_to_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    # Relaciones con el modelo User
    user_from = db.relationship('User', foreign_keys=[user_from_id], backref='following', lazy=True)
    user_to = db.relationship('User', foreign_keys=[user_to_id], backref='followers', lazy=True)

class Region(db.Model):
    __tablename__ = 'region'
    id = db.Column(db.Integer, primary_key=True)
    region_name = db.Column(db.String(250), nullable=False)
    region = db.relationship(User)

class Gender(db.Model):
    __tablename__ = 'gender'
    id = db.Column(db.Integer, primary_key=True)
    gender_name = db.Column(db.String(250), nullable=False)
    gender = db.relationship(User)


    def to_dict(self):
        return {}


