# EmailJS Setup Guide

This guide will help you set up EmailJS for your contact form.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add an Email Service

1. Go to the [Email Services](https://dashboard.emailjs.com/admin) page
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email
5. **Copy your Service ID** (e.g., `service_abc123`)

## Step 3: Create an Email Template

1. Go to the [Email Templates](https://dashboard.emailjs.com/admin/templates) page
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Message: {{subject}}

From: {{from_name}}
Reply To: {{reply_to}}

Message:
{{message}}
```

4. **Copy your Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. Go to [Account Settings](https://dashboard.emailjs.com/admin/account)
2. Find your **Public Key** under "API Keys"
3. Copy it (e.g., `abcdefghijklmnop`)

## Step 5: Configure Your Portfolio

### Option 1: Using Environment Variables (Recommended)

1. Create a `.env` file in your project root:
```bash
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
```

2. Update `Contact.tsx` to use environment variables:
```typescript
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```

3. Add `.env` to your `.gitignore` (already done)

### Option 2: Direct Configuration

Replace the placeholder values in `Contact.tsx`:
```typescript
const SERVICE_ID = "service_abc123";  // Your actual Service ID
const TEMPLATE_ID = "template_xyz789"; // Your actual Template ID
const PUBLIC_KEY = "abcdefghijklmnop";  // Your actual Public Key
```

## Step 6: Test Your Form

1. Run your development server:
```bash
npm run dev
```

2. Navigate to the Contact section
3. Fill out the form with test data
4. Click "Send Message"
5. Check your email inbox for the test message

## EmailJS Template Variables

Make sure your EmailJS template includes these variables:
- `{{from_name}}` - Sender's name
- `{{reply_to}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content

## Security Notes

- EmailJS public keys are **designed** to be used in client-side code
- They are **not** secret and can be safely committed to your repository
- EmailJS has built-in rate limiting and spam protection
- For additional security, you can:
  - Enable reCAPTCHA in EmailJS dashboard
  - Set up domain restrictions
  - Monitor usage in the EmailJS dashboard

## Troubleshooting

### "Failed to send message"
- Check that all credentials are correct
- Verify your email service is connected in EmailJS dashboard
- Check browser console for detailed error messages

### "Template not found"
- Ensure template ID matches exactly
- Verify template is active in EmailJS dashboard

### Emails not arriving
- Check spam folder
- Verify email service connection
- Test with a different email address

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- 2 email services
- 2 email templates

For higher limits, consider upgrading to a paid plan.
