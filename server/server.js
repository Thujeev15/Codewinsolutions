const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const nodemailer = require('nodemailer');
const axios = require('axios');
const path = require('path');
require('dotenv').config();

const app = express();

const fallbackServices = [
  {
    title: 'Web Development',
    description: 'Custom web applications with cutting-edge technologies',
    icon: 'https://cdn-icons-png.flaticon.com/512/1005/1005141.png',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800',
    features: ['React & Vue.js', 'Node.js Backend', 'Responsive Design', 'Cloud Deployment'],
    color: '#6366F1',
    number: '01'
  },
  {
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile solutions',
    icon: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800',
    features: ['iOS & Android', 'React Native', 'Flutter', 'API Integration'],
    color: '#8B5CF6',
    number: '02'
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services',
    icon: 'https://cdn-icons-png.flaticon.com/512/2280/2280532.png',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800',
    features: ['AWS & Azure', 'DevOps', 'CI/CD Pipeline', 'Monitoring'],
    color: '#EC4899',
    number: '03'
  },
  {
    title: 'AI & Analytics',
    description: 'Data-driven insights and intelligent automation',
    icon: 'https://cdn-icons-png.flaticon.com/512/4737/4737540.png',
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=800',
    features: ['Machine Learning', 'Data Analytics', 'Business Intelligence', 'Automation'],
    color: '#F59E0B',
    number: '04'
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user experiences',
    icon: 'https://cdn-icons-png.flaticon.com/512/4341/4341139.png',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    color: '#10B981',
    number: '05'
  },
  {
    title: 'Consulting',
    description: 'Strategic technology consulting and planning',
    icon: 'https://cdn-icons-png.flaticon.com/512/3079/3079652.png',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800',
    features: ['Tech Strategy', 'Digital Transformation', 'Architecture', 'Best Practices'],
    color: '#3B82F6',
    number: '06'
  }
];

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection (optional - server will run without it)
let isMongoConnected = false;
mongoose.connect(process.env.MONGODB_URI, {
  serverSelectionTimeoutMS: 10000,
  tls: true,
  tlsAllowInvalidCertificates: false,
  family: 4
})
.then(() => {
  console.log('✅ MongoDB Connected Successfully');
  isMongoConnected = true;
})
.catch((err) => {
  console.log('⚠️  MongoDB not available - running in standalone mode');
  console.log('   Database features will be disabled');
  isMongoConnected = false;
});

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: String,
  message: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Contact = mongoose.model('Contact', contactSchema);

// Service Schema
const serviceSchema = new mongoose.Schema({
  title: String,
  description: String,
  icon: String,
  features: [String]
});

const Service = mongoose.model('Service', serviceSchema);

// Job Application Schema
const jobApplicationSchema = new mongoose.Schema({
  jobTitle: { type: String, required: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  education: { type: String, required: true },
  experience: { type: String, required: true },
  skills: { type: String, required: true },
  coverLetter: { type: String, required: true },
  cvFileName: { type: String },
  cvPath: { type: String },
  createdAt: { type: Date, default: Date.now }
});

const JobApplication = mongoose.model('JobApplication', jobApplicationSchema);

// Configure multer — use memory storage (compatible with Vercel serverless)
const storage = multer.memoryStorage();

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: function (req, file, cb) {
    const allowedTypes = /pdf|doc|docx/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    if (extname && mimetype) {
      return cb(null, true);
    } else {
      cb('Error: Only PDF, DOC, and DOCX files are allowed!');
    }
  }
});

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASSWORD || 'your-app-password'
  }
});

// WhatsApp notification function using Meta Business API
async function sendWhatsAppNotification(message, recipientNumber) {
  const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;

  if (!accessToken || !phoneNumberId) {
    console.log('⚠️ WhatsApp credentials not configured - skipping WhatsApp notification');
    return false;
  }

  try {
    // Format phone number - remove all non-digits
    const formattedNumber = recipientNumber.replace(/\D/g, '');

    const response = await axios.post(
      `https://graph.facebook.com/v18.0/${phoneNumberId}/messages`,
      {
        messaging_product: 'whatsapp',
        to: formattedNumber,
        type: 'text',
        text: { body: message }
      },
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      }
    );

    console.log('✅ WhatsApp message sent successfully:', response.data);
    return true;
  } catch (error) {
    console.error('❌ WhatsApp send failed:', error.response?.data || error.message);
    return false;
  }
}

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date() });
});

// Get all services
app.get('/api/services', async (req, res) => {
  if (!isMongoConnected) {
    return res.json(fallbackServices);
  }

  try {
    const services = await Service.find();
    if (!services || services.length === 0) {
      return res.json(fallbackServices);
    }

    res.json(services);
  } catch (error) {
    console.error('Error fetching services:', error.message);
    res.json(fallbackServices);
  }
});

// Create contact
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const newContact = new Contact({ name, email, phone, message });

    if (isMongoConnected) {
      await newContact.save();
    } else {
      console.log('Contact form submission (DB not connected):', { name, email, phone, message });
    }

    // Send email notification
    if (process.env.EMAIL_USER && process.env.EMAIL_PASSWORD) {
      try {
        const contactMailOptions = {
          from: process.env.EMAIL_USER,
          to: 'info@codewinsolutions.com',
          subject: `New Contact Form Message from ${name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <h3>Message:</h3>
            <p>${message}</p>
          `
        };
        await transporter.sendMail(contactMailOptions);
      } catch (emailErr) {
        console.error('Contact email send error:', emailErr.message);
      }
    }

    res.status(201).json({ 
      success: true, 
      message: 'Thank you! Your message has been received. We will contact you soon.',
      data: newContact 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});

// Get all contacts (admin)
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create sample services (run once)
app.post('/api/init-services', async (req, res) => {
  try {
    const sampleServices = [
      {
        title: 'Web Development',
        description: 'Custom web applications with cutting-edge technologies',
        icon: '🌐',
        features: ['React & Vue.js', 'Node.js Backend', 'Responsive Design', 'Cloud Deployment']
      },
      {
        title: 'Mobile Apps',
        description: 'Native and cross-platform mobile solutions',
        icon: '📱',
        features: ['iOS & Android', 'React Native', 'Flutter', 'API Integration']
      },
      {
        title: 'Cloud Solutions',
        description: 'Scalable cloud infrastructure and migration services',
        icon: '☁️',
        features: ['AWS & Azure', 'DevOps', 'CI/CD Pipeline', 'Monitoring']
      },
      {
        title: 'AI & Analytics',
        description: 'Data-driven insights and intelligent automation',
        icon: '🤖',
        features: ['Machine Learning', 'Data Analytics', 'Business Intelligence', 'Automation']
      }
    ];
    
    await Service.deleteMany({});
    await Service.insertMany(sampleServices);
    res.json({ message: 'Services initialized successfully', services: sampleServices });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Job Application endpoint
app.post('/api/job-application', upload.single('cv'), async (req, res) => {
  try {
    const {
      jobTitle,
      fullName,
      email,
      phone,
      address,
      education,
      experience,
      skills,
      coverLetter
    } = req.body;

    // Save to database (only if MongoDB is connected)
    if (isMongoConnected) {
      try {
        const newApplication = new JobApplication({
          jobTitle,
          fullName,
          email,
          phone,
          address,
          education,
          experience,
          skills,
          coverLetter,
          cvFileName: req.file ? req.file.originalname : null,
          cvPath: req.file ? `memory:${req.file.originalname}` : null
        });
        await newApplication.save();
        console.log('✅ Application saved to database');
      } catch (dbError) {
        console.error('⚠️ DB save failed (non-critical):', dbError.message);
      }
    } else {
      console.log('⚠️ MongoDB not connected — skipping DB save. Applicant:', fullName, email);
    }

    // Email configuration
    const companyEmail = process.env.COMPANY_EMAIL || 'hr@codeflex.lk';
    const companyPhone = process.env.COMPANY_WHATSAPP || '+94701234567';

    // Prepare email content
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
        <div style="background-color: #45D6C4; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="color: #000; margin: 0;">New Job Application</h1>
        </div>
        
        <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px;">
          <h2 style="color: #45D6C4; border-bottom: 2px solid #45D6C4; padding-bottom: 10px;">Application Details</h2>
          
          <table style="width: 100%; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; font-weight: bold; width: 40%;">Position Applied:</td>
              <td style="padding: 10px;">${jobTitle}</td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 10px; font-weight: bold;">Full Name:</td>
              <td style="padding: 10px;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold;">Email:</td>
              <td style="padding: 10px;">${email}</td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 10px; font-weight: bold;">Phone:</td>
              <td style="padding: 10px;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold;">Address:</td>
              <td style="padding: 10px;">${address}</td>
            </tr>
          </table>

          <h3 style="color: #45D6C4; margin-top: 30px;">Education</h3>
          <p style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">${education}</p>

          <h3 style="color: #45D6C4; margin-top: 20px;">Work Experience</h3>
          <p style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">${experience}</p>

          <h3 style="color: #45D6C4; margin-top: 20px;">Skills</h3>
          <p style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">${skills}</p>

          <h3 style="color: #45D6C4; margin-top: 20px;">Cover Letter</h3>
          <p style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">${coverLetter}</p>

          <p style="margin-top: 30px; padding: 15px; background-color: #fff3cd; border-left: 4px solid #ffc107; border-radius: 5px;">
            <strong>📎 CV Attached:</strong> ${req.file ? req.file.originalname : 'No file uploaded'}
          </p>
        </div>

        <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
          <p>This is an automated email from CodeFlex Solutions Career Portal</p>
          <p>Received on ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Colombo' })}</p>
        </div>
      </div>
    `;

    // Send email
    const mailOptions = {
      from: process.env.EMAIL_USER || 'noreply@codeflex.lk',
      to: companyEmail,
      subject: `New Job Application - ${jobTitle} - ${fullName}`,
      html: emailContent,
      attachments: req.file ? [{
        filename: req.file.originalname,
        content: req.file.buffer
      }] : []
    };

    // Send email only if real credentials are configured
    if (process.env.EMAIL_USER && process.env.EMAIL_PASSWORD) {
      try {
        await transporter.sendMail(mailOptions);
        console.log('✅ Application email sent to', companyEmail);
      } catch (emailError) {
        console.error('⚠️ Email sending failed (non-critical):', emailError.message);
      }
    } else {
      console.log('⚠️ Email credentials not set — skipping email for:', fullName);
    }

    // WhatsApp message (using WhatsApp Business API or integration)
    const whatsappMessage = `
🎯 *New Job Application*

*Position:* ${jobTitle}
*Name:* ${fullName}
*Email:* ${email}
*Phone:* ${phone}

*Education:* ${education.substring(0, 100)}...
*Experience:* ${experience.substring(0, 100)}...

✅ Full application details and CV sent to ${companyEmail}

_Received: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Colombo' })}_
    `.trim();

    // Send WhatsApp notification to company using Meta Business API
    try {
      await sendWhatsAppNotification(whatsappMessage, companyPhone);
    } catch (whatsappError) {
      console.error('⚠️ WhatsApp notification failed (non-critical):', whatsappError.message);
    }

    res.status(201).json({
      success: true,
      message: 'Application submitted successfully! We will contact you soon.'
    });

  } catch (error) {
    console.error('Error submitting application:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to submit application. Please try again.'
    });
  }
});

// Get all job applications (admin)
app.get('/api/job-applications', async (req, res) => {
  try {
    const applications = await JobApplication.find().sort({ createdAt: -1 });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5003;

// Local dev: listen as normal. Vercel: export app as serverless handler.
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📡 API: http://localhost:${PORT}`);
  });
}

module.exports = app;
