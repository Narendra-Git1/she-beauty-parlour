# She Beauty Parlour website

React + Vite + JavaScript + Tailwind CSS. This is a frontend-only website; it does not use Spring Boot or a database.

## Run locally

1. Install Node.js (LTS).
2. Extract this folder and open it in VS Code.
3. In the terminal, run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL printed by Vite, normally `http://localhost:5173`.

## Central business information

Edit `src/data/businessInfo.js` to update the business name, opening date, contact information, address, hours, Instagram link and service list.

- Current owner-provided phone numbers: +91 6301427005 and +91 8328499854. The first number is configured as the WhatsApp enquiry number; confirm this is the preferred WhatsApp number before publishing.
- Current location: Vinjamur, Andhra Pradesh 524228. No street address has been provided.
- Opening hours: 10 AM to 8 PM. Instagram and email remain unconfigured.
- Service prices are not invented; the interface says “Contact for pricing”.
- Sample images are temporary inspiration images and should be replaced with owner-approved photos before or soon after launch.
- The current opening date is based on the client-provided date and should be updated if it changes.

## Pages

The app includes Home, Services, Gallery, About Us and Contact. Navigation works client-side.

## Before publishing

- Confirm and update all business details.
- Replace sample gallery/hero imagery with approved images where possible.
- Verify image licensing and image loading.
- Confirm the primary WhatsApp number and test the enquiry link on a phone.
- Test responsive layout and links.
- Run `npm run build` and resolve any errors.
- Deploy the `dist` folder to a static hosting provider such as Netlify or Vercel.
