# SEO & Google AdSense Setup Guide for SleepCalculators.ca

## Completed SEO Optimizations ✓

### 1. Meta Tags & Structured Data
- **Homepage**: Optimized title, description, keywords for Canadian market
- **All Pages**: Canonical URLs, Open Graph tags, Twitter Cards
- **Structured Data**: WebApplication, Organization, WebPage, FAQPage, BreadcrumbList schemas
- **Meta Robots**: Added proper indexing directives to all pages

### 2. Technical SEO Files
- **robots.txt**: Updated with correct domain and AdSense bot access
- **sitemap.xml**: XML sitemap with all pages, priorities, and change frequencies
- **ads.txt**: Template ready for your AdSense Publisher ID

### 3. Site Architecture
- **Legal Pages**: Privacy Policy, Terms of Service, Medical Disclaimer
- **404 Page**: Custom error page with helpful navigation
- **Footer Links**: All legal pages linked from footer
- **Breadcrumbs**: Schema markup on all legal pages

### 4. Performance Optimizations
- **DNS Prefetch**: Preconnected to AdSense and Analytics domains
- **Lazy Loading**: Ready for image optimization
- **Route-based Code Splitting**: Automatic with React Router

---

## Google AdSense Setup Instructions

### Step 1: Apply for AdSense Account
1. Go to [Google AdSense](https://www.google.com/adsense/start/)
2. Sign in with your Google account
3. Submit your website URL: `https://sleepcalculators.ca`
4. Complete the application form

### Step 2: Add AdSense Code to Your Site
Once approved, you'll receive an AdSense code. Update these files:

**File: `index.html` (line 87)**
```html
<!-- Replace this placeholder: -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
     crossorigin="anonymous"></script>

<!-- With your actual Publisher ID -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR-ACTUAL-ID"
     crossorigin="anonymous"></script>
```

### Step 3: Update ads.txt File
**File: `public/ads.txt`**
1. Get your Publisher ID from AdSense (format: pub-XXXXXXXXXXXXXXXX)
2. Uncomment and update the last line:
```
google.com, pub-YOUR-ACTUAL-ID, DIRECT, f08c47fec0942fa0
```

### Step 4: Place Ad Units
The site already has `AdPlaceholder` components ready. Update these in:
- `src/components/AdPlaceholder.tsx`

Replace placeholders with actual AdSense ad units:
```tsx
<ins className="adsbygoogle"
     style={{ display: 'block' }}
     data-ad-client="ca-pub-YOUR-ID"
     data-ad-slot="YOUR-AD-SLOT-ID"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
```

---

## Google Search Console Setup

### Step 1: Verify Your Site
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://sleepcalculators.ca`
3. Choose verification method (HTML tag recommended)
4. Add verification meta tag to `index.html`

### Step 2: Submit Sitemap
1. In Search Console, go to "Sitemaps"
2. Submit: `https://sleepcalculators.ca/sitemap.xml`

### Step 3: Monitor Performance
- Check for crawl errors
- Monitor search performance
- Review mobile usability
- Track indexed pages

---

## Additional SEO Recommendations

### 1. Content Strategy
- [ ] Add blog section for sleep tips and health articles
- [ ] Create location-specific pages (e.g., "Sleep Calculator Toronto")
- [ ] Add sleep disorder guides and resources
- [ ] Include user testimonials

### 2. Link Building
- [ ] Submit to Canadian health directories
- [ ] Reach out to sleep health bloggers
- [ ] Guest post on wellness websites
- [ ] Partner with sleep clinics

### 3. Analytics Setup
- [ ] Add Google Analytics 4
- [ ] Set up conversion tracking
- [ ] Track calculator usage
- [ ] Monitor user flow

### 4. Social Media
- [ ] Create social media profiles
- [ ] Share sleep tips regularly
- [ ] Engage with health communities
- [ ] Run educational campaigns

### 5. Local SEO (if applicable)
- [ ] Add location information
- [ ] Create Google Business Profile
- [ ] Get listed in Canadian directories
- [ ] Focus on Canadian health keywords

---

## AdSense Best Practices

### Ad Placement Strategy
✓ **Currently Implemented**:
- Header section (below hero)
- Mid-content section (between educational content)
- Responsive ad units

**Recommendations**:
1. Don't place more than 3 ads per page initially
2. Keep ads above the fold minimal (1 max)
3. Ensure 50%+ of viewport is content, not ads
4. Test different ad sizes and formats

### Content Requirements
✓ **Already Compliant**:
- Original, valuable content
- Clear privacy policy mentioning ads
- Medical disclaimer for health content
- User-friendly navigation
- Mobile responsive design

### Policy Compliance
✓ **Completed**:
- No prohibited content
- Clear cookie disclosure
- DART cookie information in Privacy Policy
- Opt-out links provided
- Contact information listed

---

## Performance Monitoring

### Key Metrics to Track
1. **Organic Traffic**: Search console impressions/clicks
2. **Page Speed**: Core Web Vitals (LCP, FID, CLS)
3. **Ad Revenue**: RPM, CTR, viewable impressions
4. **User Engagement**: Bounce rate, time on site, calculator usage
5. **Conversions**: Newsletter signups, return visitors

### Tools to Use
- Google Search Console
- Google Analytics 4
- Google PageSpeed Insights
- AdSense reporting dashboard
- Chrome DevTools Lighthouse

---

## Maintenance Checklist

### Monthly
- [ ] Update sitemap if new pages added
- [ ] Check for broken links
- [ ] Review AdSense performance
- [ ] Analyze top keywords
- [ ] Update content with latest sleep research

### Quarterly
- [ ] Review and update legal pages
- [ ] Analyze competitor rankings
- [ ] Test mobile experience
- [ ] Update meta descriptions if needed
- [ ] Review page load speeds

### Annually
- [ ] Major content refresh
- [ ] SEO audit
- [ ] Update structured data
- [ ] Review AdSense strategy
- [ ] Analyze yearly growth trends

---

## Contact & Support

For questions about this site:
- Email: admin@sleepcalculators.ca

For AdSense support:
- [AdSense Help Center](https://support.google.com/adsense)

For SEO questions:
- [Google Search Central](https://developers.google.com/search)

---

## Current Site Status

✅ **Fully SEO Optimized**: All meta tags, structured data, and technical SEO in place
✅ **AdSense Ready**: Policies configured, awaiting your Publisher ID (ad placeholders removed per request)
✅ **Mobile Responsive**: Full mobile optimization with dark mode
✅ **Fast Loading**: Optimized performance with preconnects and lazy loading
✅ **Legal Compliance**: All required policies and disclaimers in place
✅ **iOS-Style Time Picker**: Beautiful, modern interface with scroll wheel selection
✅ **Newsletter Integration**: Email capture for building audience (ready for service integration)
✅ **Custom 404 Page**: Professional error handling with helpful navigation
✅ **Favicon/Logo**: Custom branded sleep icon
✅ **Fixed Navigation**: All footer links work correctly from any page

**Next Steps**:
1. Apply for AdSense and add Publisher ID
2. Submit sitemap to Search Console
3. Configure newsletter service (Mailchimp, ConvertKit, etc.)
4. Add actual AdSense ad units when approved
5. Monitor analytics and optimize
