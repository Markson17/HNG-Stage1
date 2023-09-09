const express = require('express');
const moment = require('moment');
const axios = require('axios');
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
        const github_file_url = 'https://github.com/Markson17/HNG-Stage1/blob/main/app.js';
        const github_repo_url = 'https://github.com/Markson17/HNG-Stage1';

        const response = {
            slack_name: slack_name,
            current_day: current_day,
            utc_time: utc_time,
            track: track,
            github_file_url: github_file_url,
            github_repo_url: github_repo_url,
            status_code: 200
        };
        res.json(response);
    } catch (error) {
        res.status(500).json({
            "error": "An error occurred while processing your request"
        })
    };
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});