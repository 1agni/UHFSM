# Ninja OS

Ninja OS is a whitelabeled no-code platform that integrates [Nocobase](https://github.com/nocobase/nocobase) for data modeling and administration, [n8n](https://n8n.io/) for workflow automation, and [Clerk](https://clerk.com/) for authentication and user management. The platform exposes a modern component library for building forms and UI and can be extended to create custom business applications.

This repository contains a minimal setup using Docker to run the core services and a React frontend that communicates with them. It also includes an example field service application for an HVAC business.

## Requirements

- Docker and Docker Compose
- Node.js 18+

## Running the platform

```bash
# from the ninja-os directory
docker-compose up -d
```

- Nocobase: http://localhost:8080
- n8n: http://localhost:5678
- Frontend (React with Clerk): http://localhost:3000

## Project structure

```
ninja-os/
├── apps/
│   ├── frontend/        # React app with Clerk
│   └── hvac-field-service/  # Example HVAC app built on the platform
├── docker-compose.yml
└── README.md
```

## HVAC Field Service Example

The `hvac-field-service` app demonstrates how to use Ninja OS to manage service requests. It includes sample pages for creating customers, scheduling technicians, and triggering automated workflows in n8n.

## Development

1. Install dependencies in each app directory:

```bash
cd apps/frontend && npm install
cd ../hvac-field-service && npm install
```

2. Start the development server for the app you are working on:

```bash
npm start
```

## Authentication

Clerk is used for sign-up and sign-in. Obtain your Clerk keys and set them in a `.env.local` file under `apps/frontend` and `apps/hvac-field-service`.

## Workflows

Create workflows in n8n to automate tasks such as sending notifications or syncing data with external systems. Nocobase's REST API can be used from these workflows.

