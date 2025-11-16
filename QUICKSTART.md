# 🚀 Quick Start Guide

## Installation & Setup

### Step 1: Install Dependencies
Open PowerShell in the project directory and run:

```powershell
npm install
```

This will install all required packages:
- React & React DOM
- React Router
- Tailwind CSS
- Leaflet (Maps)
- Recharts (Charts)
- Lucide React (Icons)
- Vite (Build tool)

### Step 2: Start Development Server

```powershell
npm run dev
```

The application will automatically open in your browser at `http://localhost:3000`

### Step 3: Login

Use any of these demo credentials:

**Station Admin (Full Access):**
- Email: `admin@police.gov.in`
- Password: `admin123`

**Inspector:**
- Email: `inspector@police.gov.in`
- Password: `inspector123`

**Operator:**
- Email: `operator@police.gov.in`
- Password: `operator123`

## 🎯 Features Overview

### 1. Dashboard
- View live SOS alerts
- Monitor active trips
- See tourist distribution on map
- Check weather alerts

### 2. SOS Management
- View all SOS alerts
- Filter by type and status
- Assign officers to incidents
- Mark incidents as resolved

### 3. Tourists
- Search tourist database
- View detailed profiles
- Check safety scores
- Review trip history

### 4. Live Trips
- Track all active trips on map
- Monitor speed and ETA
- Check network connectivity
- View route deviations

### 5. Risk Map
- Interactive heat map
- Toggle risk layers (Wildlife, Flood, Crime, etc.)
- View risk clusters
- Monitor incident counts

### 6. Stations
- View nearby stations
- Check resource availability
- Transfer SOS between stations
- Request backup

### 7. Reports
- View analytics charts
- Export data to CSV
- Review activity logs
- Monitor performance metrics

### 8. Settings (Admin Only)
- Configure alert thresholds
- Manage geofences
- Add/remove officers
- Adjust system settings

### 9. Chat
- Communicate with tourists
- Real-time messaging
- Call options
- View conversation history

### 10. Vehicles
- Track police vehicles on map
- Monitor fleet status
- View assigned SOS
- Check ETAs

## 📱 Notifications

Click the bell icon in the top-right corner to:
- View all notifications
- Mark as read
- Navigate to related alerts

## 🔐 Role-Based Access

- **Station Admin**: Full access to all features including Settings
- **Inspector**: Access to all operational modules
- **Operator**: Basic operational access

## 💡 Tips

1. **Mock Data**: All data is stored in the frontend. Changes won't persist on page refresh.

2. **Maps**: Interactive maps use Leaflet. Click markers for details.

3. **Filters**: Most pages have filters to narrow down data.

4. **Responsive**: Works on desktop, tablet, and mobile devices.

5. **Export**: Report export functionality is simulated (shows alert).

## 🛠️ Build for Production

```powershell
npm run build
```

This creates an optimized production build in the `/dist` folder.

## 👀 Preview Production Build

```powershell
npm run preview
```

## ⚙️ Technology Stack

- **React 18**: Modern UI library
- **Vite**: Lightning-fast build tool
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **Leaflet**: Interactive maps
- **Recharts**: Responsive charts
- **Lucide React**: Beautiful icons

## 🐛 Troubleshooting

### Issue: Module not found
**Solution**: Run `npm install` again

### Issue: Port already in use
**Solution**: Vite will automatically use the next available port

### Issue: Maps not loading
**Solution**: Check internet connection (maps load tiles from CDN)

### Issue: CSS not applying
**Solution**: Make sure Tailwind is properly configured in `tailwind.config.js`

## 📞 Need Help?

- Check `README.md` for detailed documentation
- Review code comments in source files
- Inspect mock data files in `/src/data/`

---

**Happy Coding! 🎉**
