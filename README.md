Adithya - Restaurant Chatbot

Adithya is an AI-powered restaurant chatbot built using Dialogflow and deployed in PyCharm. It helps customers interact with the restaurant seamlessly by managing orders, tracking them, and handling modifications. This chatbot enhances the customer experience by providing quick and efficient responses.

Features

Order Management: Users can place, modify, and remove orders.

Order Tracking: Customers can check the status of their orders.

Integration with Backend: The chatbot processes requests and interacts with the restaurant's order system.

Natural Language Processing (NLP): Uses Dialogflow to understand user queries effectively.

User-Friendly Interface: Simple and intuitive conversation flow.

Technologies Used

Dialogflow - AI-powered chatbot development platform

Python - Backend scripting

Flask - Web framework for API integration (if applicable)

PyCharm - Development environment

GitHub - Version control and code hosting

Setup and Installation

Prerequisites

Python (>= 3.x)

Virtual Environment (optional but recommended)

Dialogflow account

PyCharm (or any preferred IDE)

Installation Steps

Clone the repository

git clone https://github.com/your-username/Adithya-Restaurant-Chatbot.git
cd Adithya-Restaurant-Chatbot

Create and activate a virtual environment (optional but recommended)

python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

Install dependencies

pip install -r requirements.txt

Set up Dialogflow

Create an agent in Dialogflow.

Import the intents and entities from the dialogs folder.

Obtain the credentials JSON file and set it as an environment variable:

export GOOGLE_APPLICATION_CREDENTIALS="path/to/your/dialogflow_credentials.json"

Run the chatbot

python main.py

Usage

Start the chatbot and interact with it using natural language.

You can ask things like:

"I want to order a pizza."


"Check my order status."

"Cancel my last order."

The chatbot will respond accordingly and update the backend.
