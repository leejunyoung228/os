from flask import Flask, render_template, jsonify, redirect
from db import Database
picdb=Database.Database()

app = Flask(__name__)



@app.route('/')
def home():
    return render_template("main.html")

@app.route('/move')
def main1(): 
    return render_template("main1.html")
@app.route('/get')
def get():
    result=picdb.selectAll()
    return jsonify(result)
if __name__ == "__main__":
    app.run(host="0.0.0.0")
