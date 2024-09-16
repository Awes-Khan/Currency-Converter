# Currency Converter Project

## Overview

The **Currency Converter** is a simple yet powerful application that allows users to convert values from one currency to another. By selecting the source currency, entering an amount, and choosing the target currency, users can quickly get accurate conversion results. The app supports multiple currencies and can fetch real-time exchange rates from an API or use predefined rates.

## Features

- **Easy Conversion**: Convert values between various currencies quickly and easily.
- **Real-time Exchange Rates**: Supports integration with live exchange rate APIs for up-to-date conversions (optional).
- **Predefined Rates**: Can function without real-time data using predefined exchange rates.
- **User-friendly Interface**: Simple input fields and dropdowns for selecting currencies.
- **Multiple Currency Support**: Includes support for a wide range of global currencies.

## Technology Stack

- **Frontend**: React.js (for building the user interface)
- **Backend (optional)**: Node.js/Express (for fetching live exchange rates from external APIs)
- **State Management**: React's `useState` hook
- **Styling**: CSS (custom or using libraries like Bootstrap)
- **API Integration**: Fetch real-time data using APIs such as [Exchange Rates API](https://github.com/fawazahmed0/exchange-api).

## Setup Instructions

### Prerequisites

- Node.js and npm installed
- Optional: API key from a currency exchange API provider (e.g., Exchange Rates API)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Awes-Khan/Currency-Converter.git
   cd currency-converter
2. **Install dependencies:**
   ```bash
   npm install
3. Start the development server:
   ```bash
   npm run dev
  The application will be accessible at http://localhost:5173

## Usage

1. Open the application in your web browser at `http://localhost:5173`.
2. Enter the amount you want to convert in the input field.
3. Choose the source currency (the currency you are converting from) using the dropdown menu.
4. Select the target currency (the currency you are converting to) using another dropdown menu.
5. The app will display the converted amount based on the selected currencies and the exchange rate.

## Future Enhancements

- **Historical Data**: Incorporate historical exchange rate data to show trends over time.
- **Multi-Currency Conversion**: Enable conversions involving multiple currencies simultaneously.
- **Dark Mode**: Add a dark theme option to enhance user experience during low-light conditions.
- **Offline Support**: Implement functionality to store exchange rates locally for offline access.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.




