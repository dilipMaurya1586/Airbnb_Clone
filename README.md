<div align="center">

<h1>🏨 Airbnb Clone — Full Stack</h1>

<p>A production-level hotel booking platform built with <strong>Spring Boot + React.js</strong><br/>
Featuring role-based access, real payments, and a hotel manager analytics dashboard.</p>

<a href="https://airbnb-frontend-peach.vercel.app/">
  <img src="https://img.shields.io/badge/🌐_Live_Demo-Visit_Now-FF385C?style=for-the-badge&labelColor=0D1117" />
</a>
&nbsp;
<img src="https://img.shields.io/badge/Status-Production_Ready-00C851?style=for-the-badge&labelColor=0D1117" />
&nbsp;
<img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge&labelColor=0D1117" />

</div>

---

## 🧪 Demo Credentials

| Field | Value |
|-------|-------|
| 📧 Email | `dilip@gmail.com` |
| 🔑 Password | `123456` |

---

## 🗂️ Project Structure

```
airbnb-clone/
├── client/                  # React.js Frontend (Vite)
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Page-level components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── services/        # Axios API service functions
│   │   └── utils/           # Helper functions
│   └── .env
│
└── server/                  # Spring Boot Backend
    ├── controller/
    ├── service/
    ├── repository/
    ├── model/entity/
    ├── dto/
    ├── config/
    └── application.properties
```

---

## ⚙️ Tech Stack

### 🖥️ Frontend
| Technology | Purpose |
|------------|---------|
| React.js + Vite | UI Framework & Build Tool |
| Tailwind CSS + shadcn/ui | Styling & Components |
| Recharts | Analytics Charts |
| Stripe.js | Payment Integration |
| Axios + React Router | API Calls & Routing |

### 🔧 Backend
| Technology | Purpose |
|------------|---------|
| Java 21 + Spring Boot | Core Framework |
| Spring Security + JWT | Authentication & Authorization |
| Spring Data JPA + Hibernate | ORM & Database Layer |
| PostgreSQL | Primary Database |
| Maven + Lombok | Build Tool & Boilerplate Reduction |

---

## ✨ Features

### 👤 Guest / User
- Secure **Login & Registration** with JWT
- Smart **hotel search** by location, dates & guest count
- Complete **booking flow** with Stripe payment
- **Booking history** — past & upcoming bookings
- **Profile management** — name, DOB, gender
- **Co-Traveler management** for group bookings

### 🏨 Hotel Manager
- **Hotel dashboard** — manage all owned hotels
- **Room type management** with amenities (AC, TV, Fridge, etc.)
- **Date-wise inventory** — activate / deactivate rooms
- **Surge pricing** — increase rates for peak demand
- **Analytics Dashboard:**
  - Revenue & bookings (7 / 30 / 90 day filter)
  - 📊 Revenue Bar Chart
  - 🥧 Booking Status Pie Chart

### 🌗 UX
- Dark & Light mode (system preference + manual toggle)
- Fully responsive — mobile, tablet, desktop

---

## 🔐 Security Architecture

```
Request → JwtAuthenticationFilter → Spring Security
        → BCrypt password verification
        → Role-based access (@PreAuthorize)
        → USER / HOST / HOTEL_MANAGER roles
```

---

## 🔌 API Endpoints

```
Auth
  POST   /api/auth/register
  POST   /api/auth/login

Listings
  GET    /api/listings
  POST   /api/listings
  GET    /api/listings/{id}

Bookings
  POST   /api/bookings
  GET    /api/bookings/my

Reviews
  POST   /api/reviews
  GET    /api/reviews/{listingId}
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ · Java 21 · PostgreSQL · Maven

### Frontend Setup

```bash
cd client
npm install
```

Create `client/.env`:
```env
VITE_API_BASE_URL=http://localhost:8080
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

```bash
npm run dev        # http://localhost:5173
npm run build      # Production build
```

### Backend Setup

Create `server/src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/airbnb
spring.datasource.username=your_username
spring.datasource.password=your_password
jwt.secret=your_secret_key
jwt.expiration=604800000
```

```bash
cd server
mvn clean install
mvn spring-boot:run   # http://localhost:8080
```

---

## 🖼️ Screenshots

<img width="1920" alt="Home Page" src="https://github.com/user-attachments/assets/ed1f9c4a-0bad-413e-9066-7d1770891d15" />
<img width="1920" alt="Hotel Listings" src="https://github.com/user-attachments/assets/05d9c6d5-4df1-4503-9682-d47f1340d6c7" />
<img width="1920" alt="Booking Flow" src="https://github.com/user-attachments/assets/7e2f57f9-753d-4100-be72-af3e4e71e38a" />
<img width="1920" alt="Manager Dashboard" src="https://github.com/user-attachments/assets/1f8217551bf7" />
<img width="1920" alt="Analytics" src="https://github.com/user-attachments/assets/21ed6c87-2ba5-4427-979d-b3d68907b72c" />
<img width="1920" height="1080" alt="Screenshot (81)" src="https://github.com/user-attachments/assets/797f390a-47b0-47be-b007-f42f19f8f973" />


---

## ✅ What's Built

- [x] Spring Boot REST APIs
- [x] JWT Authentication & Role-based Access
- [x] React.js Booking UI with Stripe Payments
- [x] Hotel Manager Dashboard with Analytics
- [x] Dark / Light Mode
- [x] Fully Responsive Design
- [x] Deployed on Vercel

---

<div align="center">
  <sub>Built with ❤️ using Spring Boot + React.js</sub>
</div>
