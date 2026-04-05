# 🏨 Airbnb Clone — Frontend
 
A production-level hotel booking platform frontend built with **React.js + Vite**, inspired by Airbnb. Fully responsive with Dark & Light mode support, seamless booking flow, and a powerful hotel manager dashboard.
 
---
 
## 🌐 Live Demo 
🔗 **[https://airbnb-frontend-peach.vercel.app/](https://airbnb-frontend-peach.vercel.app/)**
 
---

## 🧪 Demo Login (Try it out!)
 
| Field | Value |
|-------|-------|
| 📧 Email | dilip@gmail.com |
| 🔑 Password | 123456 |

## 🛠️ Tech Stack
 
| Technology | Purpose |
|------------|---------|
| React.js | UI Framework |
| Vite | Build Tool & Dev Server |
| Tailwind CSS | Styling |
| shadcn/ui | UI Component Library |
| Recharts | Bar Chart & Pie Chart Analytics |
| Stripe.js | Payment Integration |
| Axios | API Calls |
| React Router | Client-side Routing |
 
---
 
## ✨ Features
 
### 👤 Guest / User Side
- Secure **Login & Registration**
- Role-based UI (**GUEST / HOTEL_MANAGER**)
- Smart **hotel search** by location, dates, and guest count
- Hotel and room listings with amenities, pricing, and images
- Complete **booking flow** with Stripe payment checkout
- **Booking history** — view all past and upcoming bookings
- **Profile management** — update name, DOB, gender
- **Co-Traveler management** — add, update, and remove travelers for group bookings
 
### 🏨 Hotel Manager Side
- **Your Hotels** dashboard — view and manage all owned hotels
- Create and manage **room types** with amenities (AC, TV, Fridge, Double Bed, etc.)
- **Room inventory management** — date-wise availability view
- **Activate / Deactivate** rooms on specific date ranges
- **Surge Factor** — increase room pricing on selected dates for peak demand
- **Admin Analytics Dashboard:**
  - Total Bookings (7 / 30 / 90 day filter)
  - Total Revenue & Avg Revenue per Booking
  - 📊 **Revenue Bar Chart** — visualize earnings over time
  - 🥧 **Booking Status Pie Chart** — breakdown by Confirmed, Pending, Cancelled, Completed
 
### 🌗 Dark & Light Mode
- Full **Dark Mode and Light Mode** support
- Auto-detects system preference, with manual toggle
 
### 📱 Responsive Design
- Fully responsive across **mobile, tablet, and desktop**
 
---
 
## 📁 Project Structure 
```
src/
├── components/         # Reusable UI components
│   ├── ui/             # shadcn/ui base components
│   ├── HotelCard/
│   ├── BookingForm/
│   ├── Navbar/
│   └── Dashboard/
├── pages/              # Page-level components
│   ├── HomePage/
│   ├── LoginPage/
│   ├── BookingPage/
│   ├── ProfilePage/
│   └── AdminDashboard/
├── hooks/              # Custom React hooks
├── services/           # Axios API service functions
├── utils/              # Helper functions
└── main.jsx            # App entry point
```
 
---
 
## ⚙️ Getting Started
 
### Prerequisites
- Node.js 18+
- npm or yarn
 
### Installation
 
```bash
# Clone the repository
git clone https://github.com/Chaitnya27/Airbnb-Frontend.git
 
# Navigate to the project
cd Airbnb-Frontend
 
# Install dependencies
npm install
```
 
### Environment Variables
 
Create a `.env` file in the root directory:
 
```env
VITE_API_BASE_URL=http://localhost:8080
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
```
 
### Run Locally
 
```bash
npm run dev
```
 
App will be available at `http://localhost:5173`
 
### Build for Production
 
```bash
npm run build
```
 
---
 
## 🚀 Deployment
 
This project is deployed on **Vercel**. 
The `vercel.json` is already configured for React Router (SPA) support:
 
## 🖼️ Screenshots 
<img width="1920" height="1080" alt="Screenshot (711)" src="https://github.com/user-attachments/assets/ed1f9c4a-0bad-413e-9066-7d1770891d15" />
<img width="1920" height="1080" alt="Screenshot (712)" src="https://github.com/user-attachments/assets/05d9c6d5-4df1-4503-9682-d47f1340d6c7" />
<img width="1920" height="1080" alt="Screenshot (713)" src="https://github.com/user-attachments/assets/7e2f57f9-753d-4100-be72-af3e4e71e38a" />
<img width="1920" height="1080" alt="Screenshot (714)" src="https://github.com/user-attachments/assets/1e80fae5-dc34-40a9-aa8d-1f8217551bf7" />
<img width="1920" height="1080" alt="Screenshot (715)" src="https://github.com/user-attachments/assets/aafb9be7-2aa3-4cfd-8364-e1b58c5e9d54" />
<img width="1920" height="1080" alt="Screenshot (716)" src="https://github.com/user-attachments/assets/e5650cf8-5d6a-42dd-82ee-c7df001b664c" />
<img width="1920" height="1080" alt="Screenshot (717)" src="https://github.com/user-attachments/assets/89fe7c77-6b9f-444e-b4f6-85e2eada37a8" />
<img width="1920" height="1080" alt="Screenshot (721)" src="https://github.com/user-attachments/assets/d794bc7c-8be7-4892-88d3-3474422f0151" />
<img width="1920" height="1080" alt="Screenshot (722)" src="https://github.com/user-attachments/assets/f55255bb-671b-4c09-9476-f11135b1e488" />
<img width="1920" height="1080" alt="Screenshot (723)" src="https://github.com/user-attachments/assets/66622fa7-f76e-4eda-9158-8b62aa15fe05" />
<img width="1920" height="1080" alt="Screenshot (724)" src="https://github.com/user-attachments/assets/e071bd19-5d84-4088-9085-056f45e404d6" />
<img width="1920" height="1080" alt="Screenshot (725)" src="https://github.com/user-attachments/assets/0cf30852-fb55-4c23-a076-7139ae1fd9b1" />
<img width="1920" height="1080" alt="Screenshot (726)" src="https://github.com/user-attachments/assets/21ed6c87-2ba5-4427-979d-b3d68907b72c" />
<img width="1920" height="1080" alt="Screenshot (727)" src="https://github.com/user-attachments/assets/17a381d7-9fa1-4a66-a4d3-6cbe3fb10a17" />





































---
> Built with ❤️ using React.js + Vite
