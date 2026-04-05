
# Airbnb Clone - Backend Architecture

## Tech Stack
Node.js, Express.js, MongoDB (Mongoose), JWT, bcryptjs, dotenv, CORS

## Folder Structure
airbnb-clone-backend/
├── models/          # User, Listing, Booking, Review
├── routes/          # auth, listings, bookings, reviews
├── middleware/      # JWT verification
├── server.js
└── .env

## Database Models
User: name, email, hashedPassword, isHost
Listing: title, description, pricePerNight, location, bedrooms, bathrooms, maxGuests, images, hostId
Booking: listingId, userId, checkIn, checkOut, totalPrice, status
Review: listingId, userId, rating (1-5), comment

## API Endpoints
POST /api/auth/register - Signup
POST /api/auth/login - Login (returns JWT)
GET /api/listings - Get all listings
POST /api/listings - Create listing (host only)
GET /api/listings/:id - Get single listing
POST /api/bookings - Create booking
GET /api/bookings/my - Get user's bookings
POST /api/reviews - Add review
GET /api/reviews/:listingId - Get reviews

## Authentication Flow
1. User signs up → password hashed with bcrypt
2. User logs in → JWT token generated
3. Protected routes → middleware verifies JWT

## Security
- JWT based authentication
- bcrypt password hashing (10 rounds)
- Role based access (user vs host)

## What I Built
✅ Complete authentication system
✅ Listing CRUD operations
✅ Booking system with date validation
✅ Reviews and ratings
✅ Host/user role separation

## Setup Instructions
1. npm install
2. Create .env file with:
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/airbnb_clone
   JWT_SECRET=your_secret_key
3. npm run dev
