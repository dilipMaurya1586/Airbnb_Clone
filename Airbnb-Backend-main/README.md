# Airbnb Clone - Backend Architecture (Spring Boot)

## Tech Stack
Java 21, Spring Boot, Spring Security, JWT, Spring Data JPA, PostgreSQL, Maven, Lombok

## Folder Structure
airbnb-clone-backend/
├── controller/
├── service/
├── repository/
├── model/entity/
├── dto/
├── config/
└── application.properties

## Entities
User: id, name, email, password, isHost
Listing: id, title, pricePerNight, location, bedrooms, maxGuests, hostId
Booking: id, listingId, userId, checkIn, checkOut, totalPrice, status
Review: id, listingId, userId, rating, comment

## API Endpoints
POST /api/auth/register
POST /api/auth/login
GET /api/listings
POST /api/listings
GET /api/listings/{id}
POST /api/bookings
GET /api/bookings/my
POST /api/reviews
GET /api/reviews/{listingId}

## Security
- Spring Security + JWT
- BCrypt password encoding
- JwtAuthenticationFilter
- @PreAuthorize role-based access

## application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/airbnb
spring.datasource.username=root
spring.datasource.password=yourpassword
jwt.secret=your_secret_key
jwt.expiration=604800000

## Run
mvn clean install
mvn spring-boot:run

## What I Built
✅ Spring Boot REST APIs
✅ JWT authentication
✅ JPA repositories
✅ Role-based access (USER/HOST)

<img width="1920" height="1080" alt="Screenshot (81)" src="https://github.com/user-attachments/assets/b3dc9a1b-b3a6-4b60-9c99-4b07af0761d0" />
<img width="1092" height="810" alt="Screenshot 2026-04-05 231225" src="https://github.com/user-attachments/assets/1bd30678-961a-461b-9910-94369578e2f9" />
