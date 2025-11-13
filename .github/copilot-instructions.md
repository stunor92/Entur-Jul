# Entur-Jul - GitHub Copilot Instructions

## Project Overview

Entur-Jul is a Norwegian Christmas countdown website that displays a themed journey from "Entur Kontor" to "Julaften" (Christmas Eve) using a "Polar Express" train metaphor. The website shows a live countdown timer to December 24th and presents the information in an engaging travel booking interface style.

**Tech Stack:**
- React 19.2.0
- Vite 7.2.2 (build tool)
- Entur Design System components (@entur/* packages)
- Norwegian language (no-NO)

**Purpose:** Display a festive countdown to Christmas Eve with a travel-themed UI using Entur's design system.

## Project Structure

```
/
├── src/
│   ├── App.jsx          # Main application component with countdown logic
│   ├── App.css          # Application styles
│   └── main.jsx         # React application entry point
├── index.html           # HTML entry point
├── vite.config.js       # Vite configuration
├── package.json         # Dependencies and scripts
└── .github/
    └── copilot-instructions.md  # This file
```

## Development Guidelines

### Code Style and Conventions

1. **Language:** All user-facing text must be in Norwegian (Bokmål)
2. **Component Structure:** Use functional React components with hooks
3. **Formatting:** Follow existing code style (2-space indentation, semicolons)
4. **Icons:** Use icons from `@entur/icons` package when needed
5. **Typography:** Use typography components from `@entur/typography` (Heading1, Heading2, Heading3, Paragraph, Label)
6. **UI Components:** Prefer Entur design system components over custom implementations

### Key Technical Details

1. **Date Handling:**
   - Christmas Eve is December 24th at 00:00:00
   - If current date is past Dec 24, countdown to next year's Christmas Eve
   - Use Norwegian locale (no-NO) for date formatting

2. **Countdown Logic:**
   - Updates every second using setInterval
   - Calculates days, hours, minutes, and seconds
   - Shows special message when it's Christmas Eve

3. **Responsive Design:**
   - Mobile-first approach
   - Use Entur's responsive components

### Available npm Scripts

```bash
npm run dev       # Start development server on port 3000
npm run build     # Build for production (outputs to dist/)
npm run preview   # Preview production build
npm test          # Run tests (currently not configured)
```

### Development Workflow

1. **Starting development:**
   ```bash
   npm install
   npm run dev
   ```

2. **Building:**
   ```bash
   npm run build
   ```

3. **Before committing:**
   - Ensure `npm run build` succeeds
   - Test countdown functionality
   - Verify Norwegian text is correct
   - Check responsive behavior

## Dependencies

### Main Dependencies
- `react` and `react-dom`: Core React libraries
- `@entur/button`: Button components
- `@entur/icons`: Icon set
- `@entur/layout`: Layout components (NavigationCard)
- `@entur/tokens`: Design tokens
- `@entur/travel`: Travel-specific components (TravelHeader, TravelLeg, TravelTag)
- `@entur/typography`: Typography components

### Dev Dependencies
- `vite`: Build tool and dev server
- `@vitejs/plugin-react`: React plugin for Vite

## Common Tasks

### Adding a New Feature
1. Keep the travel/journey theme consistent
2. Use Entur design system components
3. Maintain Norwegian language for all text
4. Test across different viewport sizes
5. Ensure countdown logic is not affected

### Modifying Countdown Logic
- Main countdown logic is in `App.jsx` in the `updateCountdown` function
- State is managed in `timeLeft` and `isChristmasEve`
- Updates occur every 1000ms via setInterval

### Styling Changes
- Primary styles are in `src/App.css`
- Use CSS classes that align with Entur's design system
- Maintain the travel booking aesthetic

## Important Notes

1. **Christmas Date:** Always December 24th at midnight (00:00:00)
2. **Locale:** Norwegian (no-NO) for all dates and text
3. **Theme:** Maintain the "Polar Express" train journey metaphor
4. **Design System:** Use Entur components; don't introduce custom implementations without good reason
5. **Build Output:** The `dist/` directory is gitignored (build artifacts)
6. **Dependencies:** `node_modules/` is gitignored

## Testing Considerations

Currently, there is no test infrastructure (`npm test` returns an error). When adding tests in the future:
- Focus on countdown calculation logic
- Test date edge cases (year boundaries, Christmas Eve detection)
- Test Norwegian locale formatting
- Consider using React Testing Library

## Accessibility

- Maintain semantic HTML structure
- Ensure countdown is readable
- Use appropriate ARIA labels if adding interactive elements
- Test with keyboard navigation

## Contribution Standards

1. **Minimal Changes:** Make the smallest possible changes to achieve the goal
2. **Don't Break Working Code:** Preserve existing functionality unless explicitly fixing a bug
3. **Use Existing Patterns:** Follow the established code structure and conventions
4. **Norwegian Language:** All user-facing text must be in Norwegian
5. **Build Validation:** Always ensure `npm run build` succeeds before committing
6. **No Unnecessary Dependencies:** Only add new dependencies if absolutely required

## Security

- No sensitive data or API keys should be in the codebase
- All data is client-side; no backend or data storage
- Dependencies are managed via npm; keep them updated for security patches
