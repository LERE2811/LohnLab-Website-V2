# LohnLab Cockpit - Replit Project Documentation

## Overview

LohnLab Cockpit is a modern payroll optimization solution designed for tax advisors and companies in the German market. It's a full-stack web application that helps calculate optimal salary structures through clever salary components like benefits, meal allowances, and travel cost subsidies to reduce payroll costs while increasing net pay for employees.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: React Query (@tanstack/react-query) for server state
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Storage**: PostgreSQL-based session storage with connect-pg-simple
- **API Design**: RESTful API with structured error handling

### Monorepo Structure
```
├── client/          # Frontend React application
├── server/          # Backend Express server
├── shared/          # Shared types and schemas
├── migrations/      # Database migration files
└── dist/           # Build output directory
```

## Key Components

### Database Layer
- **Schema Definition**: Located in `shared/schema.ts` using Drizzle schema
- **Tables**: 
  - `contacts` - Contact form submissions with fields for name, email, user type, and message
- **Validation**: Zod schemas for type-safe data validation
- **Migration Strategy**: Drizzle Kit for database schema management

### API Layer
- **Contact API**: POST `/api/contacts` for contact form submissions
- **Storage Abstraction**: Interface-based storage layer with in-memory implementation
- **Error Handling**: Centralized error handling with structured responses
- **Request Logging**: Detailed request/response logging for API endpoints

### Frontend Components
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Component Library**: Custom components built on shadcn/ui foundation
- **Theme System**: CSS custom properties for consistent branding
- **Form Handling**: Type-safe forms with real-time validation

## Data Flow

1. **User Interaction**: Users interact with the React frontend
2. **API Requests**: Frontend makes HTTP requests to Express backend
3. **Validation**: Requests are validated using Zod schemas
4. **Storage**: Data is processed and stored via the storage interface
5. **Response**: Structured responses are sent back to the frontend
6. **State Updates**: React Query manages cache invalidation and updates

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **drizzle-orm**: Type-safe database operations
- **@radix-ui/***: Accessible UI component primitives
- **@tanstack/react-query**: Server state management
- **zod**: Runtime type validation
- **wouter**: Lightweight routing

### Development Tools
- **Vite**: Development server and build tool
- **TypeScript**: Type safety across the stack
- **Tailwind CSS**: Utility-first styling
- **ESBuild**: Fast TypeScript compilation for production

### Replit Integration
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Development tooling (development only)

## Deployment Strategy

### Development Environment
- **Development Server**: Vite dev server with HMR
- **Backend Server**: Express with TypeScript compilation via tsx
- **Database**: Neon serverless PostgreSQL

### Production Build
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: ESBuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations ensure schema consistency
4. **Static Assets**: Frontend assets served by Express in production

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment mode (development/production)

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- July 05, 2025. Initial setup