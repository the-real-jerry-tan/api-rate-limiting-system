/**
 * © 2024 Jerry Tan. All Rights Reserved.
 *
 * This software is the confidential and proprietary information of Jerry Tan
 * ("Confidential Information"). You shall not disclose such Confidential Information
 * and shall use it only in accordance with the terms under which this software
 * was distributed or otherwise published, and solely for the prior express purposes
 * explicitly communicated and agreed upon, and only for those specific permissible purposes.
 *
 * This software is provided "AS IS," without a warranty of any kind. All express or implied
 * conditions, representations, and warranties, including any implied warranty of merchantability,
 * fitness for a particular purpose, or non-infringement, are disclaimed, except to the extent
 * that such disclaimers are held to be legally invalid.
 */

import express from 'express';
import bodyParser from 'body-parser';
import rateLimit from 'express-rate-limit';
import RedisStore from 'rate-limit-redis';

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

// Set up rate limiting using Redis for distributed instances
const limiter = rateLimit({
    store: new RedisStore({
        expiry: 60,
        prefix: 'rate-limit',
        sendCommand: (...args: string[]) => {
            // Replace this with your Redis client command
            console.log('Send Redis command:', args);
        },
    }),
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again after 15 minutes',
});

app.use(limiter);

// API route with rate-limiting protection
app.get('/api/resource', (req, res) => {
    res.json({ message: 'This is a rate-limited resource' });
});

app.listen(PORT, () => {
    console.log(`API Rate Limiting System running on port ${PORT}`);
});
