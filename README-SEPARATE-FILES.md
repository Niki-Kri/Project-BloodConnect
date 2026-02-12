# Blood Bank System - Separate Files Structure

This folder contains the complete Blood Bank System with each page separated into individual HTML, CSS, and JavaScript files.

## 📁 File Structure

```
blood-bank-system/
│
├── pages/                      # All HTML pages
│   ├── page1-home.html         # Home/Landing page
│   ├── page2-login.html        # Login/Register page
│   ├── page3-role.html         # Role selection page
│   ├── page4-search.html       # Search donors page
│   ├── page5-results.html      # Search results page
│   ├── page6-emergency.html    # Emergency mode page
│   ├── page7-notification.html # Notification/request page
│   └── page8-success.html      # Success/thank you page
│
├── css/                        # All CSS files
│   ├── common.css              # Shared styles (navigation, buttons, forms)
│   ├── page1-home.css          # Home page specific styles
│   ├── page2-login.css         # Login page specific styles
│   ├── page3-role.css          # Role selection styles
│   ├── page4-search.css        # Search page styles
│   ├── page5-results.css       # Results page styles
│   ├── page6-emergency.css     # Emergency page styles
│   ├── page7-notification.css  # Notification page styles
│   └── page8-success.css       # Success page styles
│
├── js/                         # All JavaScript files
│   ├── page1-home.js           # Home page functionality
│   ├── page2-login.js          # Login/register functionality
│   ├── page3-role.js           # Role selection logic
│   ├── page4-search.js         # Search functionality
│   ├── page5-results.js        # Results display logic
│   ├── page6-emergency.js      # Emergency mode logic
│   ├── page7-notification.js   # Notification tracking
│   └── page8-success.js        # Success page actions
│
├── index.html                  # Single-page version (all in one file)
├── styles.css                  # Single-page CSS (all in one file)
├── script.js                   # Single-page JS (all in one file)
└── README-SEPARATE-FILES.md    # This file
```


### Option 1: View Individual Pages
Open any page from the `pages/` folder directly in your browser:
- Start with `pages/page1-home.html`
- Navigate through the system using the buttons and links
- Each page links to the next in the flow

### Option 2: View Single-Page Version
Open `index.html` in your browser for the complete single-page application.

## 📄 Page Details

### Page 1: Home (page1-home.html)
**Files:**
- HTML: `pages/page1-home.html`
- CSS: `css/page1-home.css` + `css/common.css`
- JS: `js/page1-home.js`

**Features:**
- Hero section with city selector
- Information cards
- Statistics display
- Navigation to login/register

---

### Page 2: Login/Register (page2-login.html)
**Files:**
- HTML: `pages/page2-login.html`
- CSS: `css/page2-login.css` + `css/common.css`
- JS: `js/page2-login.js`

**Features:**
- Tab switching (Donor/Receiver/Blood Bank)
- Login and register forms
- OTP login option
- Form validation

---

### Page 3: Role Selection (page3-role.html)
**Files:**
- HTML: `pages/page3-role.html`
- CSS: `css/page3-role.css` + `css/common.css`
- JS: `js/page3-role.js`

**Features:**
- Choose between Donor or Receiver
- Large clickable cards
- Navigation based on role

---

### Page 4: Search (page4-search.html)
**Files:**
- HTML: `pages/page4-search.html`
- CSS: `css/page4-search.css` + `css/common.css`
- JS: `js/page4-search.js`

**Features:**
- Blood group selection
- Location input with GPS detection
- Radius filters (1km, 5km, 10km, Custom)
- Form submission

---

### Page 5: Results (page5-results.html)
**Files:**
- HTML: `pages/page5-results.html`
- CSS: `css/page5-results.css` + `css/common.css`
- JS: `js/page5-results.js`

**Features:**
- Display donor cards in grid
- Filter options
- Send request to donors
- Dynamic donor data generation

---

### Page 6: Emergency Mode (page6-emergency.html)
**Files:**
- HTML: `pages/page6-emergency.html`
- CSS: `css/page6-emergency.css` + `css/common.css`
- JS: `js/page6-emergency.js`

**Features:**
- Emergency alert animation
- Notify all donors option
- Blood bank list with contact info
- Previous donors access

---

### Page 7: Notification (page7-notification.html)
**Files:**
- HTML: `pages/page7-notification.html`
- CSS: `css/page7-notification.css` + `css/common.css`
- JS: `js/page7-notification.js`

**Features:**
- Request status tracker
- Real-time updates (3-second simulation)
- Donor acceptance notification
- Contact details reveal

---

### Page 8: Success (page8-success.html)
**Files:**
- HTML: `pages/page8-success.html`
- CSS: `css/page8-success.css` + `css/common.css`
- JS: `js/page8-success.js`

**Features:**
- Success animation
- Complete donor details
- Call donor button
- Thank donor button
- Return to home

---

## 🎨 Common Styles (common.css)

The `css/common.css` file contains shared styles used across all pages:
- Navigation bar
- Buttons (primary, secondary, outline)
- Form elements
- Color variables
- Responsive breakpoints

All pages include this file for consistent styling.

## 🔄 Page Flow

```
Home Page (1)
    ↓
Login/Register (2)
    ↓
Role Selection (3)
    ↓
Search Page (4)
    ↓
Results (5) ──→ No donors? ──→ Emergency (6)
    ↓                              ↓
Send Request                   Notify All
    ↓                              ↓
Notification (7) ←────────────────┘
    ↓
Success (8)
    ↓
Back to Home
```

## 🔧 Customization

### To modify a specific page:
1. Edit the HTML file in `pages/`
2. Edit the corresponding CSS file in `css/`
3. Edit the corresponding JS file in `js/`

### To change colors globally:
Edit the CSS variables in `css/common.css`:
```css
:root {
    --primary-color: #e63946;    /* Main red color */
    --secondary-color: #f77f00;  /* Orange accent */
    --success-color: #06d6a0;    /* Green for success */
    
}
```

## 📱 Responsive Design

All pages are fully responsive and work on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🌐 Browser Support

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## 💡 Tips

1. **Start with Home Page:** Open `pages/page1-home.html` to begin
2. **Edit Individual Pages:** Each page is independent and easy to modify
3. **Shared Styles:** Common elements use `common.css` for consistency
4. **SessionStorage:** Page 4-7 use sessionStorage to pass data between pages
5. **Simulated Data:** Donor data is generated via JavaScript for demonstration

## 🎯 Next Steps

To make this a production-ready application:

1. **Backend Integration:**
   - Connect to a real database
   - Implement user authentication
   - Store donor/receiver data

2. **API Integration:**
   - SMS notifications (Twilio)
   - Email alerts (SendGrid)
   - Google Maps for location

3. **Database:**
   - User accounts
   - Donor profiles
   - Blood request history
   - Blood bank inventory

4. **Security:**
   - Password hashing
   - JWT authentication
   - Input validation
   - SQL injection prevention

---

# FEATURES

<!-- Emergency Mode as a Core Feature (Not Optional) -->

Unlike most blood bank websites that only list donors, our system has a dedicated Emergency Mode. If donors are not found through normal search, the system automatically shifts to emergency handling, allowing:

Instant alert to all nearby donors

Access to previous donors

Quick contact with nearby blood banks
This makes the system life-saving, not just informational.

<!-- Role-Based User Journey (Donor / Receiver / Blood Bank) -->

The website does not treat all users the same. After login, users select their role, and the entire flow changes accordingly.

Donors see request notifications

Receivers see search, emergency, and tracking features
This reduces confusion and improves usability.

<!-- Real-Time Request Tracking System -->
Our system shows a live status tracker for blood requests (sent → accepted → contact revealed).
Most existing systems stop at “request sent,” but our system continues until the donor is successfully contacted.

Location + Radius-Based Smart Search
Donors are filtered using:

Blood group

GPS/location

Distance radius (1 km, 5 km, 10 km, custom)
This ensures faster blood availability during critical situations.

<!-- Complete Modular Design (Separate Files Architecture) -->
Each page has its own HTML, CSS, and JavaScript file. This is unique from a development perspective because:

Easy maintenance

Better scalability

Industry-level project structure
It reflects real-world web development practices.

<!-- User-Friendly, Guided Page Flow -->
The system guides users step-by-step from home → login → role → search → results → emergency → success.
This structured flow makes it easy even for non-technical users during stress situations.

