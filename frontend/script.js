const express = require('express');
const bodyParser = require('body-parser');
const dialogflow = require('dialogflow');
const uuid = require('uuid');

const app = express();
app.use(bodyParser.json());

// Instantiate a Dialogflow session client
const sessionClient = new dialogflow.SessionsClient();
const projectId = 'aditya-chatbot-for-food-d-rdxd'; 
// API endpoint to receive user input
app.post('/chat', async (req, res) => {
    const userMessage = req.body.message;

    // Construct request
    const sessionPath = sessionClient.sessionPath(projectId, sessionId);
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: userMessage,
                languageCode: 'en',
            },
        },
    };

    // Send request to Dialogflow and get response
    try {
        const responses = await sessionClient.detectIntent(request);
        const result = responses[0].queryResult;
        res.json({ reply: result.fulfillmentText });
    } catch (error) {
        res.status(500).send('Error while processing your request');
    }
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
