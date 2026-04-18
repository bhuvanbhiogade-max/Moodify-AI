from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

API_KEY = "AIzaSyBXpKDXjcxSklRoJITSB2NLDO_O9DZ1nJM"

@app.route("/detect", methods=["POST"])
def detect_mood():
    text = request.json["text"]

    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key={API_KEY}"

    payload = {
        "contents": [{
            "parts": [{
                "text": f"Detect mood in one word (Happy, Sad, Angry, Relaxed): {text}"
            }]
        }]
    }

    res = requests.post(url, json=payload)
    data = res.json()

    mood = data["candidates"][0]["content"]["parts"][0]["text"]

    return jsonify({"mood": mood})

if __name__ == "__main__":
    app.run(debug=True)