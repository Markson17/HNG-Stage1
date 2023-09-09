# HNG STAGE 1 TASK

## Description
This Node.js project creates an API endpoint that takes two GET request query parameters, `slack_name` and `track`, and returns specific information in JSON format. The information includes the Slack name, current day of the week, current UTC time (within a +/-2 minute window), track, GitHub file URL, GitHub repo URL, and a status code of 200.

## Getting Started

### Prerequisites
- Node.js installed on your machine.

### Installation
1. Clone the repository to your local machine.
   ```
   git clone https://github.com/Markson17/HNG-Stage1.git
   cd HNG-Stage1
   ```

2. Install the project dependencies.
   ```
   npm install
   ```

### Usage

1. Start the Node.js application.
   ```
   node app.js
   ```

2. Access the API endpoint using a web browser or an API testing tool like Postman:

   Example API endpoint:
   ```
   http://localhost:3000/api?slack_name=example_name&track=backend
   ```

   Replace `example_name` and `backend` with your desired values for `slack_name` and `track`.

3. The API will respond with a JSON object containing the requested information in the specified format.

Example Response:
```json
{
  "slack_name": "example_name",
  "current_day": "Monday",
  "utc_time": "2023-08-21T15:04:05Z",
  "track": "backend",
  "github_file_url": "https://github.com/username/repo/blob/main/file_name.ext",
  "github_repo_url": "https://github.com/username/repo",
  "status_code": 200
}
```

### Dependencies
- Express.js: A fast, unopinionated, minimalist web framework for Node.js.
- Moment.js: A library for parsing, formatting, and manipulating dates and times.
- Axios: A promise-based HTTP client for making requests to external resources (used for fetching GitHub URLs).
