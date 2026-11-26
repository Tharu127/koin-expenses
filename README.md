# Koin — Receipt Scan & Expense Review

A React Native mobile application developed using Expo and TypeScript for the Koin Software Engineering Intern take-home challenge.

The application implements a receipt scanning and expense review flow based on the supplied Figma UI mockups.

## Tech Stack

- React Native
- Expo
- TypeScript
- React Native Web
- Lucide React Native
- Expo Image Picker
- AsyncStorage
- React Native DateTimePicker

## Features

- Expenses dashboard with recent activity.
- Camera and gallery receipt selection.
- Receipt image preview and simulated scanning.
- Editable merchant name, date and category.
- Editable item names and prices.
- Adding and deleting expense items.
- Automatic total recalculation.
- Input validation before saving.
- Integer-cent currency calculations.
- Local expense persistence using AsyncStorage.
- Responsive mobile layout.

Receipt extraction is simulated using a predefined Cafe Kumbuk receipt. The application does not perform actual OCR and does not require an external API key.

Home, Insights and Profile navigation tabs are visual placeholders outside the implemented expense flow.

## Installation and Setup

Clone the repository and navigate to the project directory.

Install dependencies:

```bash
npm install
```

Check TypeScript compilation:

```bash
npx tsc --noEmit
```

### Running on Android and iOS

Start the Expo development server:

```bash
npx expo start
```

Scan the QR code using Expo Go.

If the local network connection fails, use:

```bash
npx expo start --tunnel
```

### Running in a Web Browser

The application also supports a browser-based preview through React Native Web.

```bash
npx expo start --web
```

To preview the mobile layout in Google Chrome:

1. Open Developer Tools using Ctrl + Shift + I.
2. Enable the device toolbar using Ctrl + Shift + M.
3. Select an iPhone or Android device profile.

The recommended viewport dimensions are 393 × 852 pixels, matching the supplied design mockups.

## Project Architecture

- `App.tsx` — Application state, screen orchestration and user interface.
- `src/receipt.ts` — Receipt data models and simulated extraction.
- `src/currency.ts` — Currency parsing, formatting and calculation.
- `assets/` — Application assets.
- `app.json` — Expo application configuration.
- `package.json` — Project dependencies and scripts.

## Testing Status

| Test | Status |
|---|---|
| TypeScript compilation | Passed before final UI adjustment |
| Web application launch | Passed |
| Responsive mobile layout | Verified |
| Expenses screen | Verified on web |
| Review Receipt screen | Verified on web |
| Gallery image selection | Verified on web |
| Simulated receipt extraction | Verified on web |
| Initial receipt total ($28.50) | Verified |
| Price input visibility | Verified after layout fix |
| Native Android testing | Pending |
| Native iOS testing | Pending |

### Functional Test Scenarios

- Initial receipt total: $28.50.
- Change an item price from $14.00 to $15.00: expected total $29.50.
- Delete the $6.50 item: expected total $23.00.
- Add an item costing $2.00: expected total $25.00.
- Validate empty merchant names, invalid prices and zero totals.
- Save a valid expense and verify that it appears in Recent Activity.
- Restart the application and verify expense persistence.

Chrome device emulation was used to verify the responsive mobile interface. Browser emulation does not replace native Android or iOS testing.

## AI-Assisted Development Workflow

ChatGPT was used as an AI development assistant throughout the implementation process.

AI-assisted activities included:

- Project setup and dependency configuration.
- Translating Figma mockups into React Native components.
- Implementing receipt review and expense management logic.
- Implementing validation and currency calculations.
- Troubleshooting TypeScript compatibility errors.
- Debugging responsive layout and input field issues.
- Preparing project documentation.

During development, a TypeScript compatibility issue involving the TextInput reference was resolved by correcting its reference type.

A price input layout issue was also identified during browser testing. The input width and flex properties were adjusted to prevent overflow and ensure that item prices were displayed correctly.

When Expo Go encountered connectivity difficulties, React Native Web and Chrome Developer Tools were used to continue UI and functionality testing.

The development process combined AI-generated implementation with manual configuration, testing and iterative debugging.

## Preview and Demo

- Application preview: To be added.
- Demo video: To be added.

## Known Limitations

- Receipt extraction is simulated rather than actual OCR.
- Expenses are stored locally rather than on a remote server.
- Native platform testing is not yet complete.
- Some native features may behave differently in the browser preview.

## Acknowledgements

Developed as part of the Koin Software Engineering Intern (React Native) Stage 2 engineering challenge.