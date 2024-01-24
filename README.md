# Feedback App Documentation

## Live App

The live version of the Feedback App is hosted on AWS S3. You can access it through the following link:

[Feedback App Live](http://feedbackappv1.s3-website-ap-southeast-2.amazonaws.com/)

## AWS Lambda Functions

The AWS Lambda functions for handling feedback are located in the `api` folder. These functions are responsible for managing data related to user feedback. The functions include:

- **List Feedback Data:**
  - Method: `GET`
  - Description: Retrieves a list of feedback data.

- **Create Feedback Entry:**
  - Method: `POST`
  - Description: Creates a new feedback entry.

Please ensure you have the necessary AWS credentials and permissions set up to execute these functions.

## Development Commands

To set up and run the Feedback App locally, follow these commands:

1. **Install Packages:**
   ```bash
   npm install
Run Development Server:

bash
npm run dev
This command starts the development server and allows you to test the app locally.

Build the App:

bash
npm run build
This command builds the app for production deployment.

Features
View feedback data for products.
Give feedback on specific products.