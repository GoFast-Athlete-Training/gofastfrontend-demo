# GoFast Backend v2

Clean, Render-friendly backend structure for GoFast MVP1.

## 🚀 Structure

```
gofastbackendv2-fall2025/
├── src/
│   └── index.js          # Main server file
├── prisma/
│   └── schema.prisma      # Database schema
├── config/               # Configuration files
├── package.json          # Dependencies & scripts
└── README.md            # This file
```

## 📋 Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   - Copy `.env.example` to `.env`
   - Fill in your database and API keys

3. **Generate Prisma client:**
   ```bash
   npm run db:generate
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

## 🎯 Render Deployment

- **Build Command:** `npm install`
- **Start Command:** `npm start`
- **Environment:** Node.js

The `postinstall` script automatically generates the Prisma client during deployment.

## 📊 API Endpoints

- `GET /api/health` - Health check
- `GET /api` - API info
- More endpoints to be added...

## 🔧 Next Steps

1. Add athlete routes
2. Add Firebase middleware
3. Add Garmin integration
4. Add RunCrew features

