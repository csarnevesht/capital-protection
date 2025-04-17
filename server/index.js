const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

// Create Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Schedule Meeting API
app.post('/api/schedule', (req, res) => {
  const { firstName, lastName, email, phone, preferredDate, preferredTime, topic, message } = req.body;
  
  // In a real application, you would save this data to a database
  // and potentially send an email notification
  console.log('New meeting request:', {
    firstName,
    lastName,
    email,
    phone,
    preferredDate,
    preferredTime,
    topic,
    message
  });
  
  // Simulate processing delay
  setTimeout(() => {
    res.json({
      success: true,
      message: 'Meeting request received. We will contact you shortly to confirm your appointment.'
    });
  }, 1000);
});

// Events API
app.get('/api/events', (req, res) => {
  // In a real application, this data would come from a database
  const events = [
    {
      id: 1,
      date: 'April 22',
      title: 'Taxes and Retirement',
      time: '6:30 pm',
      location: 'Florida International University',
      description: 'Learn how taxes impact your retirement income and strategies to minimize your tax burden.',
      link: '/events/taxes-retirement'
    },
    {
      id: 2,
      date: 'May 15',
      title: 'Social Security Strategies',
      time: '5:30 pm',
      location: 'Miami Beach Community Center',
      description: 'Understand how to maximize your Social Security benefits and integrate them into your retirement plan.',
      link: '/events/social-security'
    },
    {
      id: 3,
      date: 'June 8',
      title: 'Estate Planning Essentials',
      time: '7:00 pm',
      location: 'Coral Gables Public Library',
      description: 'Learn about the essential components of an estate plan and how to protect your assets for future generations.',
      link: '/events/estate-planning'
    }
  ];
  
  res.json(events);
});

// Download Guide API
app.get('/api/guides/:id', (req, res) => {
  const guideId = req.params.id;
  
  // In a real application, you would check if the guide exists
  // and potentially track downloads
  
  res.json({
    success: true,
    message: 'Guide download link generated',
    downloadUrl: `/downloads/guide-${guideId}.pdf`
  });
});

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static(path.join(__dirname, '../build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
  });
}

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
