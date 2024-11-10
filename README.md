
# Currency Converter - Next.js

This project is a **currency conversion web application** built with [Next.js](https://nextjs.org). It uses an external API to fetch the current exchange rates and allows users to convert between different currencies.

## Features

- Real-time currency conversion.
- List of available currencies based on current exchange rates.
- Simple and functional interface using Tailwind CSS.
- Implementation using React hooks (`useState`, `useEffect`).
- Works both on the client and server side with Next.js.

## Requirements

To run and develop this project, you will need to have the following tools installed on your machine:

### Development Requirements

- **Node.js** (v16.8 or higher)  
  [Install Node.js](https://nodejs.org/).
  
- **Package Manager** (choose one of the following):
  - [npm](https://www.npmjs.com/) (automatically installed with Node.js)
  - [yarn](https://yarnpkg.com/)
  - [pnpm](https://pnpm.io/)
  - [bun](https://bun.sh/)

### Optional Requirements for Production Environment

- **Vercel CLI** for direct deployment from the terminal (optional)  
  [Install Vercel CLI](https://vercel.com/docs/cli).

## Installation

Follow these steps to clone and set up the project on your local machine:

1. **Clone the repository:**

   If you have `git` installed, you can clone the repository with the following command:

   ```bash
   git clone https://github.com/bryan24aibe/currency-converter
   cd currency-converter
   ```

2. **Install the dependencies:**

   Using `npm`:

   ```bash
   npm install
   ```

   Or using `yarn`:

   ```bash
   yarn install
   ```

   Or using `pnpm`:

   ```bash
   pnpm install
   ```

   Or using `bun`:

   ```bash
   bun install
   ```

3. **Run the development server:**

   Using `npm`:

   ```bash
   npm run dev
   ```

   Or using `yarn`:

   ```bash
   yarn dev
   ```

   Or using `pnpm`:

   ```bash
   pnpm dev
   ```

   Or using `bun`:

   ```bash
   bun dev
   ```

4. **Open the browser:**

   Once the server is running, open your browser and go to [http://localhost:3000](http://localhost:3000) to see the app in action.

## Usage

The application allows users to perform currency conversions between different currencies:

- **Input:** The amount of money you want to convert.
- **From Currency Selection:** The currency you want to convert from (e.g., USD).
- **To Currency Selection:** The currency you want to convert to (e.g., EUR).
- **Convert Button:** When you click "Convert", the converted amount will be displayed in the interface.

## Development

If you want to make modifications or add new features, you can start by editing the following files:

- `app/page.js`: Modify this page to change the layout and design.
- `app/components/CurrencyConverter.js`: This is where the currency conversion logic is managed.

### API Usage

The application fetches exchange rates from the following API:  
[Exchangerate-API](https://api.exchangerate-api.com/)

Be sure to check the API usage restrictions if you plan to make significant changes to the data usage.

## Deployment

To deploy this project in production, you can use platforms like [Vercel](https://vercel.com/). Vercel is the recommended platform for Next.js applications and provides automatic deployment from GitHub.

### Deploy on Vercel

1. Create an account on [Vercel](https://vercel.com).
2. Connect your GitHub account to Vercel.
3. Import this repository and follow the instructions to deploy automatically.

## Resources

- [Next.js Documentation](https://nextjs.org/docs) - Learn about the features and API of Next.js.
- [Next.js Interactive Tutorial](https://nextjs.org/learn) - Learn Next.js in a hands-on way.
- [Next.js GitHub Repository](https://github.com/vercel/next.js) - Contribute to Next.js and provide your feedback.

## License

This project is licensed under the MIT License. For more details, check the [LICENSE](LICENSE) file.

---