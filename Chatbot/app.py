# import files
from flask import Flask, render_template, request
from chat import get_response
# from chatterbot import ChatBot
# from chatterbot.trainers import ChatterBotCorpusTrainer

app = Flask(__name__)

# chatbot = ChatBot('ChatBot')
# trainer = ChatterBotCorpusTrainer(chatbot)
# trainer.train("chatterbot.corpus.english")


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/get")
def get_bot_response():
    userText = request.args.get('msg')
    result = get_response(userText)
    # return str(chatbot.get_response(userText))
    return str(result)


if __name__ == "__main__":
    app.run()
