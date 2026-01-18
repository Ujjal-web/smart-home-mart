# Smart Home Mart

A premium multi-vendor smart home e-commerce application built with Next.js (App Router) and Express.js/MongoDB.

## Features

### 1. Landing Page
- Beautiful, responsive design with 7 sections:
  - Hero, Featured Products, Categories, Why Choose Us, About, Testimonials, Newsletter.
- Fully functional Navbar and Footer.
- No authentication required to view.

### 2. Authentication
- Secure login using NextAuth.js.
- **Mock Credentials**:
  - Email: `test@example.com`
  - Password: `1234`
- Supports Google Authentication (configured in `.env.local` if needed).
- Protected routes (Add Item page).

### 3. Item List Page (`/items`)
- Fetches products from the Express.js backend.
- Displays items in a responsive grid.
- Loading and Error states handled.

### 4. Item Details Page (`/items/[id]`)
- Shows full product details including image, price, description, features, and compatibility.
- Dynamic data fetching.

### 5. Add Item Page (`/add-item`)
- **PROTECTED**: Only accessible when logged in.
- Form to add new products to the database.
- Toast notification on success.

## Setup & Installation

### Prerequisites
- Node.js installed.
- MongoDB running locally or a cloud URI.

### Backend (Express Server)
1. Navigate to `smart-home-server`:
   ```bash
   cd smart-home-server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Setup `.env`:
   - Ensure `MONGODB_URI` matches your local/cloud instance.
4. Seed Database (Optional):
   ```bash
   npm run seed
   ```
5. Start Server:
   ```bash
   npm run dev
   # Runs on http://localhost:5000
   ```

### Frontend (Next.js)
1. Navigate to `smart-home-mart`:
   ```bash
   cd smart-home-mart
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Setup `.env.local`:
   ```bash
   NEXT_PUBLIC_EXPRESS_API_URL=http://localhost:5000
   NEXTAUTH_SECRET=your_secret
   NEXTAUTH_URL=http://localhost:3000
   ```
4. Start App:
   ```bash
   npm run dev
   # Runs on http://localhost:3000
   ```

## Routes Summary
- `/` - Landing Page (Public)
- `/items` - Product Listing (Public)
- `/items/[id]` - Product Details (Public)
- `/login` - Login Page (Public)
- `/add-item` - Create Product (Protected)
