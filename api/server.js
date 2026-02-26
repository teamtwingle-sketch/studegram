const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

const app = express();
const port = process.env.PORT || 5000;

// Security Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Rate Limiting (Prevent Spam)
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10 // limit each IP to 10 requests per windowMs
});
app.use('/api/', limiter);

// Form Submission Endpoint
app.post('/api/leads', async (req, res) => {
    try {
        const { fullName, email, phone, country, course } = req.body;

        // 1. Basic Validation
        if (!fullName || !email || !phone) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // 2. Here you would typically:
        // - Save to database (MongoDB/PostgreSQL)
        // - Send notification Email (Nodemailer/SendGrid)
        // - Trigger WhatsApp notification via API (Twilio/Wati)

        console.log('New Lead Received:', req.body);

        res.status(200).json({
            success: true,
            message: 'Inquiry received successfully. Our counselor will contact you soon.'
        });
    } catch (error) {
        console.error('Error processing lead:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
