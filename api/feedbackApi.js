const AWS = require("aws-sdk");

AWS.config.update({
  region: 'ap-southeast-2'
});

const dynamoDBTableName = 'feedbackv1';
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const userPath = '/feedbacks';

exports.handler = async (event) => {
  let response;
  console.log(event);
  
  switch (event.httpMethod) {
    case 'POST':
      response = await saveFeedback(JSON.parse(event.body));
      break;
    case 'GET':
      response = await getFeedback();
      break;
    default:
      response = buildResponse(404, "404 not found");
  }

  return response;
};

async function getFeedback() {
  try {
    const param = {
      TableName: dynamoDBTableName
    };
    const allFeedbacks = await dynamoDB.scan(param).promise();
    const body = {
      feedbacks: allFeedbacks.Items // Access the 'Items' property to get the array of feedbacks
    };
    return buildResponse(200, body);
  } catch (error) {
    console.error('Error fetching feedbacks:', error);
    return buildResponse(500, {
      error: `Error fetching feedbacks: ${error.message}`
    });
  }
}

async function saveFeedback(reqBody) {
  try {
    const param = {
      TableName: dynamoDBTableName,
      Item: reqBody
    };
    await dynamoDB.put(param).promise();
    const body = {
      Operation: "SAVE",
      message: "SUCCESS",
      Items: reqBody
    };
    return buildResponse(200, body);
  } catch (error) {
    console.error('Error saving feedback:', error);
    return buildResponse(500, {
      error: `Error saving feedback: ${error.message}`
    });
  }
}

function buildResponse(statusCode, body) {
  return {
    statusCode: statusCode,
    headers: {
       "Content-Type": "application/json",
       "Access-Control-Allow-Origin": "*",
       "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT,DELETE",
       "Access-Control-Allow-Headers": "Content-Type,Authorization,X-Amz-Date,X-Api-Key,X-Amz-Security-Token"
    },
    body: JSON.stringify(body)
  };
}
