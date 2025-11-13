# 🎄 Entur-Jul - Polar Express til Julaften

A festive Christmas countdown website styled as an Entur (Norwegian public transport) journey planner. Track your journey from today to Christmas Eve aboard the magical Polar Express! 🚂✨

## 📖 About

This interactive web application presents a countdown to Christmas Eve (December 24th) in the style of an Entur train journey. It features:

- **Real-time countdown** to Christmas Eve with days, hours, minutes, and seconds
- **Journey visualization** styled like a real Entur train itinerary
- **Interactive travel card** showing departure and arrival information
- **Dynamic messages** that change based on how close Christmas is
- **Festive design** using Entur's official design system components

## ✨ Features

- 🕐 **Live Countdown Timer** - Real-time countdown to Christmas Eve (24. desember)
- 🚂 **Train Journey Visualization** - Styled as a Polar Express journey from "Entur Kontor" to "Julaften"
- 🎨 **Entur Design System** - Uses official Entur UI components for authentic look and feel
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🎅 **Dynamic Messages** - Contextual messages based on time remaining until Christmas
- ⭐ **Amenities Display** - Shows train amenities (WiFi, Café, Toilet)
- 🎁 **Christmas Day Detection** - Special message when Christmas Eve arrives

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/stunor92/Entur-Jul.git
cd Entur-Jul
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Build

Create a production build:
```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## 🛠️ Technology Stack

- **React 19** - UI framework
- **Vite** - Build tool and development server
- **Entur Design System** - Official Entur UI components
  - `@entur/button` - Button components
  - `@entur/icons` - Icon library
  - `@entur/layout` - Layout components
  - `@entur/tokens` - Design tokens
  - `@entur/travel` - Travel-specific components
  - `@entur/typography` - Typography components

## 📁 Project Structure

```
Entur-Jul/
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application styles
│   └── main.jsx         # Application entry point
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── package.json         # Project dependencies and scripts
└── README.md           # This file
```

## 📜 Available Scripts

- `npm run dev` - Start development server on port 3000
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🎯 How It Works

The application calculates the time remaining until December 24th at 00:00:00 and displays it as:

1. A countdown timer showing days, hours, minutes, and seconds
2. A styled train journey from "Entur Kontor" to "Julaften"
3. Dynamic messages that update based on proximity to Christmas:
   - Standard message when Christmas is far away
   - "Only one day until departure!" when 1 day remains
   - "Today the Polar Express departs!" on Christmas Eve
   - "Train departing soon!" when less than 1 hour remains

If Christmas Eve has passed, the countdown automatically targets next year's Christmas.

## 🎨 Design

The project uses the official Entur design system to create an authentic Norwegian public transport experience. The design includes:

- Entur's brand logo and colors
- Travel-specific UI components (TravelHeader, TravelLeg, TravelTag)
- Navigation cards for information display
- Official typography and icon sets

## 🌐 Language

The application is in Norwegian (Bokmål) to match the Entur brand experience.

## 📄 License

ISC

## 👨‍💻 Author

Created with ❤️ for spreading Christmas joy!

---

**God Jul! 🎄✨**
