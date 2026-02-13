# Quick Start Guide

## 🎉 Your Restaurant Website is Ready!

Welcome! Your **Hometown Country Kitchen** website has been created and is ready to use.

## 🚀 View the Website Locally

### Option 1: Open Directly in Browser
Simply open the `index.html` file in your web browser:
- Right-click `index.html`
- Select "Open with" → Your preferred browser
- The website will open and function fully!

### Option 2: Run a Local Server (Recommended)
For better testing (especially if you add more features later):

**Using Python 3:**
```bash
python3 -m http.server 8080
```
Then visit: http://localhost:8080

**Using Node.js (if you have it):**
```bash
npx serve
```

**Using PHP:**
```bash
php -S localhost:8080
```

## 📋 What's Included

Your website has:
- ✅ Homepage with hero section
- ✅ Complete menu with all dishes
- ✅ About section with restaurant story
- ✅ Contact information and hours
- ✅ Fully responsive (works on phones, tablets, desktops)
- ✅ Smooth scrolling navigation
- ✅ Interactive hover effects
- ✅ Country/hometown styling

## 🌐 Deploy to the Internet

To make your website live on the internet, see the **DEPLOYMENT.md** file for detailed instructions.

**Quickest way (5 minutes):**
1. Push this repository to GitHub (if not already done)
2. Go to repository Settings → Pages
3. Select your branch and save
4. Your site will be live!

## ✏️ Customize Your Website

### Update Restaurant Information
Edit `index.html` to change:
- Restaurant name and tagline
- Menu items and descriptions
- Contact information
- Hours of operation

### Change Colors
Edit `styles.css` and modify the CSS variables at the top:
```css
:root {
    --primary-color: #8B4513;  /* Change this */
    --secondary-color: #D2691E; /* And this */
    /* ... etc */
}
```

### Add Your Logo
1. Save your logo image (logo.png) in the same folder
2. Edit `index.html` and replace the 🏡 emoji with:
   ```html
   <img src="logo.png" alt="Logo">
   ```

### Add Photos
Add food and restaurant photos:
1. Create an `images` folder
2. Add your photos
3. Insert them in `index.html`:
   ```html
   <img src="images/your-photo.jpg" alt="Description">
   ```

## 📱 Test Your Website

Before deploying, test:
- [ ] All navigation links work
- [ ] Phone number link works (test on phone)
- [ ] Google Maps link opens
- [ ] Looks good on desktop
- [ ] Looks good on mobile (use browser dev tools)
- [ ] All menu items are correct
- [ ] Hours and contact info are accurate

## 🆘 Need Help?

- **Website not loading?** Make sure all files (index.html, styles.css, script.js) are in the same folder
- **Styling looks broken?** Check that styles.css is in the same directory as index.html
- **JavaScript not working?** Make sure script.js is in the same directory
- **Ready to deploy?** See DEPLOYMENT.md for detailed instructions

## 📝 Files Explanation

- **index.html** - The main website file (all content)
- **styles.css** - All styling and design
- **script.js** - Interactive features and animations
- **README.md** - Technical documentation
- **DEPLOYMENT.md** - How to deploy to the internet
- **QUICKSTART.md** - This file!

## 🎨 Color Scheme

Your website uses a warm, country-inspired palette:
- Saddle Brown (#8B4513) - Primary
- Chocolate (#D2691E) - Secondary
- Cornsilk (#FFF8DC) - Light background
- Goldenrod (#DAA520) - Accent/buttons

## 🎯 Next Steps

1. ✅ Review the website locally
2. ✅ Make any customizations you want
3. ✅ Test on different devices
4. ✅ Deploy to the internet (see DEPLOYMENT.md)
5. ✅ Share with friends and customers!

## 💡 Future Enhancements

Consider adding:
- Photo gallery of food and restaurant
- Online ordering integration
- Customer testimonials section
- Special offers/promotions banner
- Social media links
- Newsletter signup form
- Google Maps embedded view
- Click-to-call floating button

---

**Congratulations!** Your hometown restaurant website is ready to welcome customers online! 🏡
