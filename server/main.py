from flask import Flask

app = Flask(__name__)


@app.route("/ok")
def ok():
    return {"ok": ["ok1"]}


if __name__ == "__main__":
    app.run(debug=True)