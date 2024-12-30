import os
import sys
from sqlalchemy import Column, ForeignKey, Integer, String, DateTime
from sqlalchemy.orm import relationship, declarative_base
from sqlalchemy import create_engine
from eralchemy2 import render_er

Base = declarative_base()

class User(Base):
    __tablename__ = 'user'
    # Here we define columns for the table person
    # Notice that each column is also a normal Python instance attribute.
    id = Column(Integer, primary_key=True)
    email = Column(String(250), nullable=False)
    firstname = Column(String(250), nullable=False)
    lastname = Column(String(250), nullable=False)
    birthdate = Column(DateTime(timezone=True), nullable=False)
    gender = Column(Integer, ForeignKey('gender.id'))
    type = Column(String(250), nullable=False)
    region = Column(Integer, ForeignKey('region.id'))


class Post(Base):
    __tablename__ = 'post'
    # Here we define columns for the table address.
    # Notice that each column is also a normal Python instance attribute.
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('user.id'))
    post = relationship(User)

class Media(Base):
    __tablename__ = 'media'
    id = Column(Integer, primary_key=True)
    type = Column(String(250), nullable=False)
    url = Column(String(250), nullable=False)
    post_id = Column(Integer, ForeignKey('post.id'))
    media = relationship(Post)

class Like(Base):
    __tablename__ = 'like'
    id = Column(Integer, primary_key=True)
    author_id = Column(Integer, ForeignKey('user.id'))
    post_id = Column(Integer, ForeignKey('post.id'))
    like = relationship(User, Post)

class Follow(Base):
    __tablename__ = 'follow'
    id = Column(Integer, primary_key=True)
    user_from_id = Column(Integer, ForeignKey('user.id'))
    user_to_id = Column(Integer, ForeignKey('user.id'))
    follow = relationship(User)

class Region(Base):
    __tablename__ = 'region'
    id = Column(Integer, primary_key=True)
    region_name = Column(String(250), nullable=False)
    region = relationship(User)

class Gender(Base):
    __tablename__ = 'gender'
    id = Column(Integer, primary_key=True)
    gender_name = Column(String(250), nullable=False)
    gender = relationship(User)


    def to_dict(self):
        return {}


