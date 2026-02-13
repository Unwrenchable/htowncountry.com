# Deployment Guide for Hometown Country Kitchen Website

This guide will help you deploy the H-Town Country restaurant website to various hosting platforms.

## Quick Deploy Options

### Option 1: GitHub Pages (Easiest)

1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select your branch (e.g., `main` or `copilot/create-restaurant-website`)
4. Click "Save"
5. Your site will be live at: `https://[username].github.io/[repository-name]/`

### Option 2: Netlify

1. Sign up at [netlify.com](https://www.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Build settings:
   - Build command: (leave empty)
   - Publish directory: `/` (root)
5. Click "Deploy site"
6. Your site will be live with a free `.netlify.app` domain

### Option 3: Vercel

1. Sign up at [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Framework Preset: "Other"
5. Root Directory: `./`
6. Click "Deploy"
7. Your site will be live with a free `.vercel.app` domain

### Option 4: Traditional Web Hosting

For traditional web hosts (shared hosting, VPS, etc.):

1. Upload all files via FTP/SFTP:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md` (optional)

2. Make sure `index.html` is in the web root directory (often `public_html` or `www`)

3. Set proper permissions:
   ```bash
   chmod 644 index.html styles.css script.js
   ```

4. Access your site via your domain name

## Custom Domain Setup

### For GitHub Pages:
1. Add a `CNAME` file with your domain name
2. Configure DNS:
   - Add `A` records pointing to GitHub's IPs
   - Or add a `CNAME` record pointing to `[username].github.io`
3. Enable HTTPS in repository settings

### For Netlify/Vercel:
1. Go to domain settings in your dashboard
2. Add your custom domain
3. Update your DNS records as instructed
4. SSL/HTTPS is automatic

## Testing After Deployment

1. **Homepage loads**: Check that the page loads without errors
2. **Navigation works**: Click all nav links (Home, Menu, About, Contact)
3. **Responsive design**: Test on mobile, tablet, and desktop
4. **Phone links**: Verify the phone number links work on mobile
5. **External links**: Test the Google Maps direction link

## Performance Optimization (Optional)

If you want to optimize further:

1. **Enable caching**: Configure your hosting to cache CSS/JS files
2. **Enable compression**: Enable Gzip/Brotli compression
3. **Add CDN**: Use a CDN for faster global delivery
4. **Optimize fonts**: Consider hosting Google Fonts locally

## Updating the Website

To make updates:

1. Edit the files in your repository
2. Commit and push changes to GitHub
3. Most platforms (Netlify, Vercel, GitHub Pages) will auto-deploy changes

## Support & Troubleshooting

**Website not loading?**
- Check that all files are uploaded
- Verify file permissions
- Clear browser cache

**Fonts not loading?**
- Check internet connection (Google Fonts requires internet)
- Verify no ad blockers are interfering

**Phone links not working?**
- This is expected on desktop (requires phone capability)
- Test on actual mobile device

## Monitoring

Consider adding:
- **Google Analytics**: Track visitor statistics
- **Google Search Console**: Monitor SEO performance
- **Uptime monitoring**: Services like UptimeRobot to alert if site goes down

## Next Steps

After deployment, you may want to:
- Set up a contact form using Formspree or Netlify Forms
- Add more photos of the restaurant and food
- Create a reservations system
- Add social media links
- Set up Google My Business integration

---

**Questions?** Check the README.md file for more information about the website structure.
