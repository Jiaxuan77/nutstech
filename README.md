# Nuts Tech Website

This is a flat, multi-page static website prepared for GitHub Pages.

Pages:
- `index.html` — Home
- `inbound.html` — Inbound Programmes
- `outbound.html` — Outbound Programmes
- `partnerships.html` — Partnerships
- `contact.html` — Contact
- `thanks.html` — Thank-you page
- `nuts-tech-logo.png` — Logo
- `typography.css` — Shared responsive typography for all six pages

All files can be uploaded directly to the root of a GitHub repository; no folders are required.

Contact form: FormSubmit forwards enquiries to `nuts_tech@outlook.com`. Upload the updated `contact.html`, submit a test enquiry from the published site, and click the activation link sent to that inbox (check spam too). Then submit a second test and verify receipt. Delivery is not verified until this activation and test are complete.

The form uses a normal POST to FormSubmit with its default CAPTCHA protection. On an HTTPS deployment, successful submissions return to `thanks.html` in the same directory; local previews and browsers without JavaScript use FormSubmit’s confirmation page. All named enquiry fields are included, and the visitor’s email is used for replies. No email password or API key is required.

The inbound and outbound pages use `scroll-reveal.css` and `scroll-reveal.js` for one-time scroll reveals. Include both files when uploading the site. Reduced-motion preferences and printing show all text without animation.
