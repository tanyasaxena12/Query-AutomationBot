""""
from flask import Flask, render_template, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will enable Cross Origin Resource Sharing (CORS). We need this to allow AJAX requests from our frontend.

@app.route('/')
def home():
    return render_template('index.html')  # this will render the index.html file we created earlier.

if __name__ == '__main__':
    app.run(debug=True)  # This will start the server in debug mode (it'll auto-restart whenever you make changes)
"""






from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import openai

app = Flask(__name__)

CORS(app, resources={r"/*": {"origins": "*"}}) # New Line
from flask_cors import CORS




openai.api_key = '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'  # replace 'your-openai-key' with your actual OpenAI key

@app.route('/')
def home():
    return render_template('index.html')


@app.route('/ask', methods=['POST'])
def ask():
    message = request.json['message']  # get the message from frontend
    #return jsonify({'message': 'This is a test reply: ' + message})
    response = openai.ChatCompletion.create(
      model="gpt-3.5-turbo",
      messages=[
            {
                "role": "system",
                "content": "You are a helpful assistant."
            },
            {
                "role": "user",
                "content": message
            }
        ]
    )
    response_message = response['choices'][0]['message']['content']  # get the response message from OpenAI
    return jsonify({'message': response_message})  # send the response message back to the frontend

if __name__ == '__main__':
    app.run(debug=True)

console.log(userMessage ); #Add this line
fetch('/ask', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message: userMessage })
})

@app.route('/ask', methods=['POST'])
def ask():
    message = request.form['message']

    # In a real application, you would probably have a more
    # sophisticated method of creating prompts.
    prompt = f"\n\nUser: {message}\nChatbot:"

    response = openai.Completion.create(
      engine="text-davinci-003",
      prompt=prompt,
      temperature=0.6,
      max_tokens=100
    )

    # Extract the generated text from the response and return it
    chatbot_response = response.choices[0].text.strip()
    return jsonify({'message': chatbot_response})




"""
from flask import Flask, request, render_template, session, redirect, url_for


#from flask import Flask, request, render_template, redirect, url_for
from flask_login import LoginManager, UserMixin, login_user, logout_user, login_required
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.config['SECRET_KEY'] = 'tanyakisecretkey'  # Replace with your own secret key
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'  # Replace with your database URI

db = SQLAlchemy(app)

login_manager = LoginManager()
login_manager.init_app(app)

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(30), unique=True)
    password_hash = db.Column(db.String(128))

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        user = User.query.filter_by(username=username).first()  # Check if user exists
        if user:
            return 'User already exists'
        new_user = User(username=username, password_hash=generate_password_hash(password))
        db.session.add(new_user)
        db.session.commit()
        return redirect(url_for('login'))
    return render_template('signup.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        user = User.query.filter_by(username=username).first()
        if not user or not check_password_hash(user.password_hash, password):
            return 'Invalid credentials'
        login_user(user)
        return redirect(url_for('index'))
    return render_template('login.html')


@app.route('/logout')
def logout():
    session.pop('username', None)
    return redirect(url_for('login'))

app.secret_key = 'tanyakisecretkey'
"""