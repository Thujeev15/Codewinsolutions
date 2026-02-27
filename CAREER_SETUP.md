# Career Application Setup Instructions

## Backend Setup

### 1. Install Dependencies
```bash
cd server
npm install multer nodemailer
```

### 2. Email Configuration (Gmail)

To send applications via email, you need to set up Gmail App Password:

1. **Enable 2-Factor Authentication**
   - Go to your Google Account: https://myaccount.google.com
   - Security → 2-Step Verification → Turn On

2. **Generate App Password**
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Enter "CodeFlex Application"
   - Copy the 16-digit password

3. **Update .env file**
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=xxxx-xxxx-xxxx-xxxx
   COMPANY_EMAIL=hr@codeflex.lk
   ```

### 3. WhatsApp Integration (Optional)

For WhatsApp notifications, you can use:

**Option 1: WhatsApp Business API (Recommended)**
- Sign up for Meta WhatsApp Business API
- Or use services like Twilio, MessageBird

**Option 2: Simple WhatsApp Link (Current)**
- Applications details are logged to console
- You can manually send via WhatsApp Web

**Option 3: Automated WhatsApp**
- Use services like:
  - Twilio WhatsApp API: https://www.twilio.com/whatsapp
  - MessageBird: https://www.messagebird.com/
  - 360Dialog: https://www.360dialog.com/

### 4. File Upload Setup

CV files are automatically stored in:
```
server/uploads/cvs/
```

Make sure this directory is created and has write permissions.

## Features

✅ **Multi-Step Application Form**
- Step 1: Personal Information
- Step 2: Education & Experience  
- Step 3: Skills & Cover Letter
- Step 4: CV Upload & Submit

✅ **Email Notifications**
- Professional HTML email template
- CV attachment included
- Sent to company email

✅ **WhatsApp Integration**
- Ready for WhatsApp Business API
- Message template prepared
- Company WhatsApp number configurable

✅ **Data Storage**
- All applications saved to MongoDB
- CV files stored on server
- Admin can view all applications

## Usage

1. Start the server:
```bash
cd server
npm start
```

2. Configure your .env file with email credentials

3. Test the application form on the Career page

4. Applications will be sent to:
   - Company Email (with CV attachment)
   - Company WhatsApp (when integrated)
   - MongoDB Database

## Admin Dashboard (Future Enhancement)

You can view all applications by accessing:
```
GET http://localhost:5003/api/job-applications
```

Returns all applications with CV file paths for download.
