# TDAbench 2026 Website

Official website for the TDAbench 2026 Workshop, hosted at the SkAI Institute in Chicago, IL from March 9-12, 2026.

## About

TDAbench 2026 is a collaborative workshop focused on developing a benchmark dataset for machine learning classification of astronomical transients.

## Website Structure

```
TDAbench2026/
├── index.html          # Home page (Vision, Goals, Data, Important Dates)
├── program.html        # Workshop program and schedule
├── participants.html   # Participants list and registration info
├── travel.html         # Travel and lodging information
├── css/
│   └── styles.css      # Main stylesheet
└── README.md           # This file
```

## Deployment

This website is designed to be deployed on GitHub Pages without Jekyll processing. Simply push to the repository's `main` branch and enable GitHub Pages in the repository settings.

### GitHub Pages Setup

1. Go to repository Settings
2. Navigate to Pages section
3. Select "Deploy from a branch"
4. Choose `main` branch and `/ (root)` folder
5. Save

The site will be available at: `https://tdabench.github.io/TDABench2026/`

## Updating Content

### Adding a New Participant

In `participants.html`, find the participants grid and add a new card:

```html
<div class="participant-card">
    <div class="participant-avatar">AB</div>
    <h4>Participant Name</h4>
    <p class="participant-affiliation">Institution Name</p>
</div>
```

### Updating the Program Schedule

In `program.html`, find the appropriate day's table and add/modify rows:

```html
<tr>
    <td class="schedule-time">09:00 - 10:00</td>
    <td>Session Title</td>
    <td class="schedule-speaker">Speaker Name</td>
</tr>
```

For breaks, use the `schedule-break` class:

```html
<tr class="schedule-break">
    <td class="schedule-time">10:30 - 11:00</td>
    <td colspan="2">Coffee Break</td>
</tr>
```

### Updating Important Dates

In `index.html`, find the dates timeline section and modify the date items:

```html
<div class="date-item">
    <div class="date-badge">
        <span class="month">Jan</span>
        <span class="day">15</span>
    </div>
    <div class="date-content">
        <h4>Event Title</h4>
        <p>Event description.</p>
    </div>
</div>
```

## Color Scheme

The website uses a blue color scheme inspired by the SkAI Institute logo:

- **Primary Dark**: `#0a1628`
- **Primary**: `#1a365d`
- **Primary Medium**: `#2c5282`
- **Secondary**: `#3182ce`
- **Accent**: `#4299e1`
- **Light**: `#90cdf4`

All colors are defined as CSS custom properties in `css/styles.css` for easy customization.

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Mobile Navigation**: Hamburger menu for small screens
- **Smooth Animations**: Hover effects, jiggle animations for links
- **No White Backgrounds**: All sections use blue tints
- **Easy to Update**: Clear HTML structure with comments
- **No Build Step Required**: Pure HTML and CSS, no Jekyll needed

## Browser Support

The website is compatible with all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contact

For questions about the website or the workshop, contact: tdabench2026@skai.edu

## License

© 2026 TDAbench. All rights reserved.
