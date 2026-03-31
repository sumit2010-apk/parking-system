from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message": "AI Running"}

@app.post("/analyze")
def analyze(data: list):
    total = sum([item.get("totalAmount", 0) for item in data])

    if total < 5000:
        suggestion = "Increase usage or pricing"
    else:
        suggestion = "Good performance"

    return {
        "revenue": total,
        "suggestion": suggestion
    }
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    current = data.get("occupied", 0)

    prediction = min(current + 2, 10)

    return jsonify({
        "predicted_next_hour": prediction
    })

if __name__ == "__main__":
    app.run(port=8000)