# 🏨 Airbnb Clone — Backend
 
A production-level hotel booking platform backend built with **Java Spring Boot**, featuring JWT authentication, role-based access control, dynamic pricing, Stripe payment integration, and a complete hotel & inventory management system.
 
---
 
## 🔗 Frontend Repository
 
👉 **[Airbnb-Frontend](https://github.com/Chaitnya27/Airbnb-Frontend)**
 
🌐 **Live App: [https://airbnb-frontend-peach.vercel.app/](https://airbnb-frontend-peach.vercel.app/)**
 
---
 
## 🛠️ Tech Stack
 
| Technology | Purpose |
|------------|---------|
| Java 17 | Core Language |
| Spring Boot | Backend Framework |
| Spring Security + JWT | Authentication & Authorization |
| Spring Data JPA | ORM & Database Access |
| PostgreSQL | Relational Database |
| Stripe Java SDK | Payment Processing |
| Docker | Containerization |
| Maven | Build Tool |
 
---
 
## ✨ Features
 
### 🔐 Authentication & Authorization
- JWT-based stateless authentication
- Role-based access control: **GUEST** and **HOTEL_MANAGER**
- Secure password hashing with BCrypt
 
### 👤 User Management
- User registration and login
- Profile update (name, DOB, gender)
- Co-Traveler management — add, update, delete travelers per user
 
### 🏨 Hotel Management (Hotel Manager)
- Create, update, and delete hotels
- Manage multiple hotels per manager account
- Hotel details: name, address, images, amenities
 
### 🛏️ Room Management
- Create and manage room types per hotel
- Room attributes: capacity, amenities (AC, TV, Fridge, Double Bed), price, images
- **Automatic inventory allocation for 365 days** on room creation
 
### 📦 Inventory Management
- Date-wise inventory tracking per room
- **Activate / Deactivate** rooms on specific date ranges (mark as closed)
- **Surge Factor** — dynamically increase room price on selected dates
- Real-time availability checking during booking
 
### 📅 Booking System
- Full booking lifecycle: `PAYMENTS_PENDING` → `CONFIRMED` → `COMPLETED` / `CANCELLED`
- Guest + Co-Traveler association per booking
- Room count and date validation
- Booking details view for managers
 
### 💳 Payment Integration
- **Stripe Checkout** integration for secure payments
- Webhook support to confirm payments and update booking status
- Payment session creation per booking
 
### 📊 Analytics (Hotel Manager Dashboard)
- Total Bookings (filterable by 7 / 30 / 90 days)
- Total Revenue
- Average Revenue per Booking
- Data powering **Bar Chart** (revenue over time) and **Pie Chart** (booking status breakdown) on the frontend
 
---
 
## 📁 Project Structure
 
```
src/
└── main/
    ├── java/com/airbnb/
    │   ├── controllers/        # REST API Controllers
    │   │   ├── AuthController
    │   │   ├── HotelController
    │   │   ├── RoomController
    │   │   ├── BookingController
    │   │   ├── InventoryController
    │   │   └── UserController
    │   ├── services/           # Business Logic
    │   ├── repositories/       # Spring Data JPA Repositories
    │   ├── entities/           # JPA Entity Models
    │   ├── dto/                # Data Transfer Objects
    │   ├── security/           # JWT Filter, Security Config
    │   ├── exceptions/         # Global Exception Handling
    │   └── config/             # Stripe, App Config
    └── resources/
        └── application.properties
```
 
---
 
## ⚙️ Getting Started
 
### Prerequisites
- Java 17+
- Maven
- PostgreSQL
- Stripe account
 
### Installation
 
```bash
# Clone the repository
git clone https://github.com/Chaitnya27/Airbnb-Backend.git
 
cd Airbnb-Backend
```
 
### Environment Configuration
 
Update `src/main/resources/application.properties`:
 
```properties
# Database
spring.datasource.url=jdbc:postgresql://localhost:5432/airbnb_db
spring.datasource.username=your_db_username
spring.datasource.password=your_db_password
 
# JWT
jwt.secret=your_jwt_secret_key
jwt.expiration=86400000
 
# Stripe
stripe.secret.key=your_stripe_secret_key
stripe.webhook.secret=your_stripe_webhook_secret
 
# Frontend URL (for Stripe redirect)
app.frontend.url=http://localhost:5173
```
 
### Run Locally
 
```bash
./mvnw spring-boot:run
```
 
API will be available at `http://localhost:8080`
 
---
 
## 🐳 Docker Support
 
A `Dockerfile` is included for containerized deployment.
 
```bash
# Build Docker image
docker build -t airbnb-backend .
 
# Run container
docker run -p 8080:8080 airbnb-backend
```
 
---
 
## 📡 API Endpoints Overview
 
| Method | Endpoint | Description | Role |
|--------|----------|-------------|------|
| POST | `/api/auth/register` | Register new user | Public |
| POST | `/api/auth/login` | Login & get JWT | Public |
| GET | `/api/hotels` | Search hotels | Public |
| POST | `/api/hotels` | Create hotel | HOTEL_MANAGER |
| GET | `/api/hotels/{id}/rooms` | Get rooms | Public |
| POST | `/api/rooms` | Create room | HOTEL_MANAGER |
| POST | `/api/bookings` | Create booking | GUEST |
| GET | `/api/bookings/my` | My bookings | GUEST |
| POST | `/api/payments/create-session` | Stripe checkout | GUEST |
| PUT | `/api/inventory/update` | Update inventory/surge | HOTEL_MANAGER |
| GET | `/api/dashboard/analytics` | Revenue & bookings | HOTEL_MANAGER |
| GET | `/api/users/profile` | Get user profile | Authenticated |
| PUT | `/api/users/profile` | Update profile | Authenticated |
| GET | `/api/users/co-travelers` | Get co-travelers | Authenticated |
 
---
## 📬 Contact
 
- 💼 [LinkedIn](https://www.linkedin.com/in/chaitnya-khedekar)
- 🌐 [Live App](https://airbnb-frontend-peach.vercel.app/)
- 💻 [Frontend Repo](https://github.com/Chaitnya27/Airbnb-Frontend)
 
---
 
> Built with ❤️ using Java Spring Boot
"# Airbnb-Clone" 
