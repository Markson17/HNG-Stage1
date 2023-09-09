const express = require('express');
const moment = require('moment');
const app = express();

app.get('/api', async (req, res) => {
    const slack_name = req.query.slack_name;
    const track = req.query.track;

    if (!slack_name || !track) {
        return res.status(400).json({
            "error": "Invalid request. Please provide both slack_name and track"
        });
    }

    try {
        // Get the current UTC time, accurate within a +/- 2 minutes margin of error
        const utc_time = moment.utc().format('YYYY-MM-DDTHH:mm:ss[Z]');  

        // Get the current day
        const current_day = moment().format('dddd');

        


    }
        res.json({
            "slack_name": "Favour Markson",
            "current_day": "Monday",
            "utc_time": "2023-08-21T15:04:05Z",
            "track": "backend",
            "github_file_url": "
        "github_repo_url": "
        "status_code": 200

        });
    });

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});


