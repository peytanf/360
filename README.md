# STUDIO 360 - Business Management Platform

A comprehensive web management platform for Kitsch Studio, featuring AI-powered bookkeeping, sales forecasting, inventory tracking, and OCR processing capabilities.

## Features

- **Analytics Overview** (`/dashboard`)
  - Real-time business metrics
  - Performance indicators
  - Data visualization

- **Sales Insights** (`/dashboard/sales`)
  - Sales tracking and forecasting
  - Revenue analytics
  - Philippine Peso (₱) currency support
  - BIR-ready reporting

- **Bookkeeping** (`/dashboard/bookkeeping`)
  - AI-powered transaction categorization
  - Automated journal entries
  - Financial statements generation
  - Receipt OCR processing

## Prerequisites

- Node.js (v16 or higher)
- .NET SDK 9.3
- npm or yarn
- Git

## Installation

### Backend Setup (.NET API)

1. Navigate to the API directory:
```bash
cd minimal-api-dev-v7.0.0
```

2. Install dependencies and run:
```bash
dotnet restore
dotnet run
```
The API will be available at `http://localhost:7272`

### Frontend Setup (Next.js)

1. Navigate to the frontend directory:
```bash
cd nextjs_JS
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```
The frontend will be available at `http://localhost:3031`

## Environment Setup

Create a `.env.local` file in the frontend directory with the following variables:
```env
NEXT_PUBLIC_API_URL=http://localhost:7272
```

## Project Structure

```
minimal/
├── minimal-api-dev-v7.0.0/    # Backend API
└── nextjs_JS/                 # Frontend application
    ├── src/
    │   ├── pages/            # Next.js pages
    │   ├── sections/         # UI components
    │   └── theme/           # MUI theme customization
    └── public/              # Static assets
```

## Usage

1. Start the backend API first
2. Then start the frontend application
3. Access the application at `http://localhost:3031`
4. Default login credentials:
   - Username: admin@demo.com
   - Password: demo1234

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is proprietary software. All rights reserved.

## Support

For support, email support@kitchstudio.com or raise an issue in the repository. 