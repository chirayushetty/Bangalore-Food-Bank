
# Our Chatbot: Nibble

## Initial Setup:
This repo currently contains the starter files.

Clone repo and create a virtual environment
```
$ git clone [API-HERE]
$ cd chatbot
```
Install dependencies
```
$ pip install flask==2.0.0
$ pip install torch torchvision nltk
```
Install nltk package
```
$ python
>>> import nltk
>>> nltk.download('punkt')
```

Run
```
$ python train.py
```
This add a ml model file called: data.pth to the directory. 
Next run the following command to test it in the console.
```
$ python chat.py
```

## Running the Flask app:

Run the following command to run the flask app

```
$ python app.py
```



