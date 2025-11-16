# 📂 Complete File Structure

```
police-admin-portal/
│
├── node_modules/              # Dependencies (created after npm install)
│
├── public/                    # Static assets
│
├── src/                       # Source code
│   ├── components/           # Reusable UI components
│   │   ├── UI.jsx           # Badge, Card, Button, Modal, Input, Select, Table, Textarea
│   │   ├── Sidebar.jsx      # Navigation sidebar with menu items
│   │   ├── Topbar.jsx       # Top bar with search and notifications
│   │   ├── NotificationPanel.jsx  # Slide-out notification panel
│   │   └── MainLayout.jsx   # Main app layout wrapper
│   │
│   ├── context/             # React Context providers
│   │   ├── AuthContext.jsx  # Authentication & user management
│   │   └── NotificationContext.jsx  # Notification state management
│   │
│   ├── data/                # Mock data (simulates backend)
│   │   ├── users.js         # Mock user accounts (admin, inspector, operator)
│   │   ├── sos.js           # Mock SOS alerts data
│   │   ├── tourists.js      # Mock tourist profiles
│   │   ├── trips.js         # Mock trip data with routes
│   │   ├── stations.js      # Police stations and officers data
│   │   ├── riskzones.js     # Risk zones and geofences
│   │   ├── notifications.js # System notifications
│   │   └── vehicles.js      # Police vehicles and chat messages
│   │
│   ├── pages/               # Application pages/routes
│   │   ├── Login.jsx        # Login page with role selection
│   │   ├── Dashboard.jsx    # Main dashboard with widgets
│   │   ├── SOSManagement.jsx    # SOS incident management
│   │   ├── Tourists.jsx     # Tourist identity & verification
│   │   ├── LiveTrips.jsx    # Live trip monitoring with map
│   │   ├── RiskMap.jsx      # High-risk zone heat map
│   │   ├── Stations.jsx     # Station coordination interface
│   │   ├── Reports.jsx      # Reports & analytics with charts
│   │   ├── Settings.jsx     # Settings & management (Admin only)
│   │   ├── Chat.jsx         # Chat & communication interface
│   │   └── Vehicles.jsx     # Police vehicle tracking
│   │
│   ├── App.jsx              # Main app component with routing
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles with Tailwind directives
│
├── .gitignore               # Git ignore file
├── index.html               # HTML entry point
├── package.json             # Project dependencies and scripts
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── vite.config.js           # Vite build configuration
├── README.md                # Comprehensive documentation
├── QUICKSTART.md            # Quick start guide
└── STRUCTURE.md             # This file - project structure

```

## 📊 Component Hierarchy

```
App (Router)
└── AuthProvider
    └── NotificationProvider
        ├── Login (Public Route)
        └── MainLayout (Protected Routes)
            ├── Sidebar
            ├── Topbar
            ├── NotificationPanel
            └── Outlet (Page Content)
                ├── Dashboard
                ├── SOSManagement
                ├── Tourists
                ├── LiveTrips
                ├── RiskMap
                ├── Stations
                ├── Reports
                ├── Settings (Admin only)
                ├── Chat
                └── Vehicles
```

## 🎨 UI Component Library

### UI.jsx exports:
- `Badge` - Status badges with color variants
- `Card` - Container component with optional title and action
- `Button` - Styled buttons with variants and sizes
- `Modal` - Popup modal dialog
- `Input` - Form input field with label and error
- `Select` - Dropdown select with options
- `Table` - Data table with sortable columns
- `Textarea` - Multi-line text input

## 🗺️ Route Structure

| Path | Component | Access | Description |
|------|-----------|--------|-------------|
| `/login` | Login | Public | Authentication page |
| `/` | Redirect to /dashboard | Protected | Root redirect |
| `/dashboard` | Dashboard | Protected | Main control panel |
| `/sos` | SOSManagement | Protected | SOS alert management |
| `/tourists` | Tourists | Protected | Tourist database |
| `/trips` | LiveTrips | Protected | Active trip monitoring |
| `/risk-map` | RiskMap | Protected | Risk zone visualization |
| `/stations` | Stations | Protected | Station coordination |
| `/reports` | Reports | Protected | Analytics and logs |
| `/settings` | Settings | Admin Only | System configuration |
| `/chat` | Chat | Protected | Communication interface |
| `/vehicles` | Vehicles | Protected | Vehicle tracking |

## 📦 Key Dependencies

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.23.0",
  "leaflet": "^1.9.4",
  "react-leaflet": "^4.2.1",
  "recharts": "^2.12.3",
  "lucide-react": "^0.378.0",
  "tailwindcss": "^3.4.3",
  "vite": "^5.2.10"
}
```

## 🔄 Data Flow

```
User Interaction
      ↓
Component State / Context
      ↓
Mock Data (JavaScript Arrays)
      ↓
UI Update / Re-render
```

## 🎯 Key Features by File

### AuthContext.jsx
- User authentication
- Role management
- localStorage persistence
- Protected route logic

### NotificationContext.jsx
- Notification state
- Unread count
- Panel visibility
- Mark as read functionality

### Dashboard.jsx
- Stats widgets
- Live SOS alerts
- Active trips
- Interactive maps
- Alert banners

### SOSManagement.jsx
- SOS list with filters
- Detail drawer
- Officer assignment
- Resolution workflow
- Map integration

### Tourists.jsx
- Search functionality
- Tourist profiles
- DID verification
- Trip history
- Safety scores

### LiveTrips.jsx
- Map with markers
- Trip status monitoring
- Route visualization
- Network alerts
- Speed tracking

### RiskMap.jsx
- Heat map with layers
- Toggle filters
- Risk clusters
- Circle overlays
- Popup details

### Reports.jsx
- Pie chart (SOS by type)
- Line chart (Response time)
- Bar charts (Trips, Risk zones)
- Activity logs table
- Export functionality

## 💾 Mock Data Files

Each file in `/src/data/` exports:
- **users.js**: Array of user objects with credentials
- **sos.js**: Array of SOS alert objects
- **tourists.js**: Array of tourist profile objects
- **trips.js**: Array of trip objects with routes
- **stations.js**: Arrays of stations and officers
- **riskzones.js**: Arrays of risk zones and geofences
- **notifications.js**: Array of notification objects
- **vehicles.js**: Arrays of vehicles and chat messages

## 🎨 Styling Approach

- **Tailwind CSS** for utility-first styling
- Custom components in `index.css` using `@apply`
- Responsive design with breakpoints
- Color palette defined in `tailwind.config.js`
- Dark theme ready (can be extended)

## 🔧 Configuration Files

- **vite.config.js**: Vite development server config
- **tailwind.config.js**: Tailwind theme and content paths
- **postcss.config.js**: PostCSS with Tailwind and Autoprefixer
- **package.json**: Dependencies and npm scripts

---

This structure ensures:
✅ Clear separation of concerns
✅ Reusable components
✅ Easy maintenance
✅ Scalable architecture
✅ Type-safe patterns (can add TypeScript later)
