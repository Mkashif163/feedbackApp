const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB.DocumentClient();

const params = {
    TableName: "product"
};

const listData = async () => {
    try {
        const data = await docClient.scan(params).promise();
        return data;
    } catch (error) {
        return { err: error };
    }
}

exports.handler = async (event, context) => {
    try {
        const data = await listData();
        return buildResponse(200, JSON.stringify(data.Items));
    } catch (err) {
        return buildResponse(500, { err: err });
    }
};

function buildResponse(statusCode, body) {
  return {
    statusCode: statusCode,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*", // Allow requests from any origin
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT,DELETE",
      "Access-Control-Allow-Headers": "Content-Type,Authorization,X-Amz-Date,X-Api-Key,X-Amz-Security-Token"
    },
    body: body
  };
}
