# Police Admin Portal - Smart Tourist Safety System

A complete, production-grade frontend-only Police Admin Portal for managing tourist safety operations.

## 🚀 Features

### Authentication & Access Control
- Role-based login (Station Admin, Inspector, Operator)
- Frontend-only authentication with mock data
- Role-specific UI rendering

### Main Dashboard
- Live SOS alerts widget
- Active trips monitoring
- Risk zone heatmap
- Tourist distribution map
- Weather and network alerts
- Real-time statistics

### SOS Incident Management
- Complete SOS list with advanced filters
- Detailed incident view with map
- Assign officers to incidents
- Mark incidents as resolved
- Add resolution notes
- Direct communication options

### Tourist Identity & Verification
- Search and filter tourists
- Detailed tourist profiles
- Digital ID (DID) display
- Trip history
- Safety scores
- Masked personal documents

### Live Trip Monitoring
- Real-time trip tracking on map
- Trip status indicators
- Speed and ETA monitoring
- Network connectivity status
- Route deviation alerts
- Dark zone entry notifications

### High-Risk Zone Map
- Interactive heat map
- Multiple risk layer filters (Crime, Wildlife, Flood, etc.)
- Risk cluster information
- Incident tracking
- Geofence visualization

### Station Coordination
- Station list with resource availability
- Officer management
- Transfer SOS between stations
- Request backup functionality
- Shared alert system

### Reports & Analytics
- SOS by type (Pie chart)
- Response time trends (Line chart)
- Trip volume analysis (Bar chart)
- Top risk zones (Bar chart)
- Activity logs table
- Export to CSV functionality

### Settings & Management (Admin Only)
- Alert sensitivity configuration
- Geofence management (Add/Edit/Delete)
- Officer account management
- Threshold adjustments

### Chat & Communication
- Real-time chat interface
- Active conversation list
- Message history
- Call and video call options

### Vehicle Tracking
- Live vehicle locations on map
- Fleet management table
- Vehicle status monitoring
- SOS assignment tracking
- ETA calculations

## 📦 Tech Stack

- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Maps**: Leaflet & React-Leaflet
- **Charts**: Recharts
- **Icons**: Lucide React
- **State Management**: React Context API

## 🛠️ Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup

1. **Install dependencies:**
   ```powershell
   npm install
   ```

2. **Start development server:**
   ```powershell
   npm run dev
   ```

3. **Open browser:**
   Navigate to `http://localhost:3000`

## 🔑 Demo Credentials

### Station Admin
- **Email/Gov ID**: `admin@police.gov.in` or `ADM001`
- **Password**: `admin123`
- **Access**: Full access including Settings

### Inspector
- **Email/Gov ID**: `inspector@police.gov.in` or `INS001`
- **Password**: `inspector123`
- **Access**: All operational modules

### Operator
- **Email/Gov ID**: `operator@police.gov.in` or `OPR001`
- **Password**: `operator123`
- **Access**: Basic operational modules

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── UI.jsx          # Button, Card, Modal, Input, etc.
│   ├── Sidebar.jsx     # Navigation sidebar
│   ├── Topbar.jsx      # Top navigation bar
│   ├── NotificationPanel.jsx
│   └── MainLayout.jsx  # Main app layout
├── context/            # React Context providers
│   ├── AuthContext.jsx
│   └── NotificationContext.jsx
├── data/               # Mock data files
│   ├── users.js
│   ├── sos.js
│   ├── tourists.js
│   ├── trips.js
│   ├── stations.js
│   ├── riskzones.js
│   ├── notifications.js
│   └── vehicles.js
├── pages/              # Application pages
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   ├── SOSManagement.jsx
│   ├── Tourists.jsx
│   ├── LiveTrips.jsx
│   ├── RiskMap.jsx
│   ├── Stations.jsx
│   ├── Reports.jsx
│   ├── Settings.jsx
│   ├── Chat.jsx
│   └── Vehicles.jsx
├── App.jsx             # Main app component with routing
├── main.jsx            # Application entry point
└── index.css           # Global styles with Tailwind

```

## 🎨 Key Features Implementation

### Mock Data Simulation
All data is stored in frontend JavaScript arrays and objects. API calls are simulated using `setTimeout` and Promise-based async functions.

### Routing
React Router v6 is used for navigation between modules:
- `/dashboard` - Mission Control
- `/sos` - SOS Management
- `/tourists` - Tourist Profiles
- `/trips` - Live Trip Monitoring
- `/risk-map` - Risk Zone Heat Map
- `/stations` - Station Coordination
- `/reports` - Reports & Analytics
- `/settings` - Admin Settings (Admin only)
- `/chat` - Communication
- `/vehicles` - Vehicle Tracking

### State Management
- **AuthContext**: Manages user authentication and role
- **NotificationContext**: Manages notification panel and alerts
- Local component state for page-specific data

### Responsive Design
Fully responsive UI built with Tailwind CSS, works on desktop, tablet, and mobile devices.

## 🔄 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎯 Usage Guidelines

### Login
1. Use any of the demo credentials provided above
2. Select appropriate role based on access needs

### Navigation
- Use the sidebar to navigate between modules
- Click on the notification bell to view alerts
- User profile in the sidebar shows current role

### SOS Management
- Filter alerts by type and status
- Click on any alert to view details
- Use action buttons to assign officers or resolve incidents

### Trip Monitoring
- View all active trips on the map
- Click on trips for detailed information
- Monitor network connectivity and alerts

### Settings (Admin Only)
- Adjust alert thresholds using sliders
- Add/remove geofences
- Manage officer accounts

## 🔒 Security Note

This is a **frontend-only application** with mock authentication. In a production environment:
- Implement proper backend authentication
- Use secure token-based auth (JWT)
- Encrypt sensitive data
- Implement proper access control
- Add HTTPS
- Implement CSRF protection

## 📝 License

This is a demonstration project for educational purposes.

## 👥 Support

For issues or questions, please refer to the code comments and documentation within the source files.

---

**Built with ❤️ for Smart Tourist Safety**
