# TravelApp - Next.js Travel Application

A comprehensive travel application built with Next.js, TypeScript, and Tailwind CSS that helps users search for trips, manage bookings, view travel guides, and track loyalty points.

## Features

- **Trip Search & Booking**: Browse and search for curated travel experiences with advanced filtering
- **Travel Guides**: Expert tips and local insights for destinations
- **Booking Management**: View and manage your travel bookings
- **Loyalty Points System**: Earn and track points with every booking
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI**: Clean, accessible interface built with Tailwind CSS

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Testing**: Jest + React Testing Library
- **Linting**: ESLint with Next.js configuration
- **Icons**: Lucide React
- **Utilities**: clsx for conditional styling

## Project Structure

```
travel-agent-demo-app/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with navigation
│   ├── page.tsx           # Home page
│   ├── trips/             # Trip search and details
│   ├── bookings/          # Booking management
│   ├── guides/            # Travel guides
│   └── points/            # Loyalty points
├── components/
│   ├── ui/                # Reusable UI components (Button, Card, Input, Select)
│   ├── layout/            # Header and Footer components
│   ├── trips/             # Trip-specific components
│   ├── bookings/          # Booking-specific components
│   ├── guides/            # Guide-specific components
│   └── __tests__/         # Component tests
├── lib/
│   ├── data/              # Mock data (mockData.ts)
│   ├── services/          # Business logic layer (TripService, BookingService, etc.)
│   ├── types/             # TypeScript type definitions
│   └── utils.ts           # Utility functions (cn helper)
├── public/                # Static assets
├── tests/                 # Service and integration tests
└── Docker files           # Containerization setup
```

## Architecture

**Service Layer Pattern**: All data operations use static methods in `lib/services/index.ts`:
- `TripService.searchTrips(filters)` - Complex filtering (destination, category, price, duration, rating)
- `BookingService.createBooking()` - Generates IDs using timestamps
- `GuideService.getGuidesByDestination()` - Case-insensitive matching

**Component Architecture**:
- **Server Components** (default): For data fetching and non-interactive UI
- **Client Components** (`'use client'`): For interactivity, state, browser APIs
- **UI System**: Reusable components in `components/ui/` with Tailwind variants

**Mock Data**: All entities stored in `lib/data/mockData.ts` as arrays. Services operate on in-memory data with no external API calls.

## Getting Started

### Prerequisites

- Node.js 18.x or later (LTS recommended). On Windows we recommend using **nvm-windows** to manage Node versions: https://github.com/coreybutler/nvm-windows
- npm (bundled with Node) or `yarn` if you prefer
- Git (for cloning)
- Optional: Docker & Docker Compose if you prefer containerized development

### Installation (Windows PowerShell)

1. Clone the repository and enter the project directory:

```powershell
git clone <repository-url>
Set-Location -Path travel-agent-demo-app
```

2. Install Node (if not already installed)

Using `nvm-windows` (recommended):

```powershell
# Install nvm-windows from https://github.com/coreybutler/nvm-windows/releases
# Then install and use Node 18 (example):
nvm install 18.20.0
nvm use 18.20.0
```

3. Install dependencies:

```powershell
npm install
# or
 yarn install
```

4. Start the development server (PowerShell):

```powershell
npm run dev
```

5. Open the app in your browser: `http://localhost:3000`

