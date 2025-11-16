# Police Admin Portal - Smart Tourist Safety System

A complete, production-grade **frontend-only** Police Admin Portal built with React and Tailwind CSS for monitoring and managing tourist safety in real-time.

## 🚀 Features

### ✅ Completed Modules

1. **Login & Access Control** - Role-based authentication (Station Admin, Inspector, Operator)
2. **Main Dashboard** - Mission control with live stats, SOS alerts, and active trips
3. **SOS Incident Management** - Complete SOS alert management with filtering and detail views
4. **Tourist Identity & Trip Verification** - Tourist profiles with safety scores and trip history
5. **Live Trip Monitoring** - Real-time trip tracking with status badges
6. **High-Risk Zone Map** - Risk zone visualization with layer filters
7. **Station Coordination** - Police station management interface
8. **Notifications & Alerts** - Global notification panel with severity-based filtering
9. **Reports & Analytics** - Charts and statistics using Recharts
10. **Settings & Management** - Admin settings for geofences, officers, and alert sensitivity
11. **Chat & Communication** - Communication center interface
12. **Police Vehicle Map** - Vehicle tracking interface

## 🛠️ Tech Stack

- **Framework:** React 18 with Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **State Management:** React Context API
- **Icons:** Lucide React
- **Charts:** Recharts
- **Maps:** React Leaflet (ready for integration)

## 📦 Installation

```bash
cd police-admin-portal
npm install
```

## 🎮 Running the Application

```bash
npm run dev
```

The application will start at `http://localhost:3000`

## 🔐 Demo Credentials

Use these credentials to login:

### Station Admin
- **Email:** admin@police.gov.in
- **Password:** admin123

### Inspector
- **Email:** inspector@police.gov.in
- **Password:** inspector123

### Operator
- **Email:** operator@police.gov.in
- **Password:** operator123

## 📁 Project Structure

```
police-admin-portal/
├── src/
│   ├── components/
│   │   └── common/
│   │       ├── Sidebar.jsx          # Navigation sidebar
│   │       ├── Topbar.jsx           # Top navigation bar
│   │       └── NotificationPanel.jsx # Notification drawer
│   ├── context/
│   │   ├── AuthContext.jsx          # Authentication state
│   │   └── AppContext.jsx           # Global app state
│   ├── data/
│   │   ├── users.js                 # Mock user data
│   │   ├── sos.js                   # Mock SOS alerts
│   │   ├── trips.js                 # Mock trip data
│   │   ├── tourists.js              # Mock tourist data
│   │   ├── riskZones.js             # Mock risk zones
│   │   ├── notifications.js         # Mock notifications
│   │   └── stations.js              # Mock station data
│   ├── layouts/
│   │   └── DashboardLayout.jsx      # Main layout wrapper
│   ├── pages/
│   │   ├── Login.jsx                # Login page
│   │   ├── Dashboard.jsx            # Main dashboard
│   │   ├── SOSList.jsx              # SOS management
│   │   ├── Trips.jsx                # Trip monitoring
│   │   ├── Tourists.jsx             # Tourist management
│   │   ├── RiskMap.jsx              # Risk zone map
│   │   ├── Stations.jsx             # Station coordination
│   │   ├── Reports.jsx              # Analytics & reports
│   │   ├── Settings.jsx             # Admin settings
│   │   ├── Chat.jsx                 # Communication center
│   │   └── Vehicles.jsx             # Vehicle tracking
│   ├── App.jsx                      # Main app component
│   ├── main.jsx                     # Entry point
│   └── index.css                    # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🎨 Key Features Explained

### Dashboard (Mission Control)
- Real-time statistics cards
- Live SOS alerts widget
- Active trips monitoring
- Weather and network alert banners
- Quick navigation to detailed views

### SOS Management
- Filterable table view (by status and type)
- Detailed SOS information drawer
- Action buttons (Call, Assign Officer, Navigate, Resolve)
- Risk level and status indicators

### Trip Monitoring
- Live trip list with status badges
- Map integration placeholder
- Speed, ETA, and network status
- Route deviation and halt alerts

### Tourist Management
- Search functionality
- Tourist profile cards
- Safety score visualization
- Digital ID (DID) display
- Trip history

### Risk Map
- Layer-based filtering (Crime, Accident, Wildlife, Flood, Landslide, Network)
- Risk zone list with incident counts
- Color-coded severity levels

### Reports & Analytics
- SOS distribution pie chart
- Response time trends
- Trip volume analysis
- Top high-risk zones

### Settings (Admin Only)
- Geofence management
- Officer account management
- Alert sensitivity configuration
- System preferences

## 🔄 Mock Data & API Simulation

All data is stored in `/src/data/*.js` files. Functions that simulate API calls use `setTimeout` to mimic async behavior.

Example:
```javascript
const login = (credentials) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Validation logic
    }, 1000);
  });
};
```

## 🎯 Role-Based Features

- **Station Admin:** Access to all modules including Settings
- **Inspector:** Access to all modules except Settings
- **Operator:** Access to all modules except Settings

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop (1920x1080 and above)
- Tablet (768px - 1024px)
- Mobile (320px - 767px)

## 🚧 Future Enhancements

1. **Real Map Integration**
   - Integrate Leaflet maps with actual markers
   - Display trip routes and risk zone polygons

2. **Real-time Updates**
   - Implement WebSocket connections
   - Live trip location updates
   - Real-time SOS notifications

3. **Backend Integration**
   - Replace mock data with actual API calls
   - Implement real authentication
   - Database integration

4. **Advanced Features**
   - Voice calling integration
   - SMS notification system
   - PDF report generation
   - Multi-language support

## 🎨 Color Scheme

- **Primary Blue:** `#3b82f6`
- **Critical Red:** `#ef4444`
- **Warning Yellow:** `#f59e0b`
- **Success Green:** `#10b981`
- **Dark Gray:** `#1f2937`

## 📄 Build for Production

```bash
npm run build
```

Build output will be in the `dist/` folder.

## 🔍 Preview Production Build

```bash
npm run preview
```

## 🤝 Contributing

This is a demo/prototype application. For production use:
1. Replace all mock data with real API endpoints
2. Implement proper error handling
3. Add loading states for all async operations
4. Implement proper form validation
5. Add unit and integration tests

## 📝 License

ISC

## 👨‍💻 Author

Police Admin Portal - Smart Tourist Safety System

---

**Note:** This is a frontend-only application with mock data. No backend server is required to run this application.
