// GoFast Backend v2 - Clean Render-friendly structure
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: [
    'https://gofastfrontend-demo.vercel.app',
    'https://gofastfrontend-mvp1.vercel.app',
    'https://gofast-user-dashboard.vercel.app',
    /^https:\/\/gofastfrontend-demo-.*\.vercel\.app$/,
    /^https:\/\/gofastfrontend-mvp1-.*\.vercel\.app$/,
    /^https:\/\/gofast-user-dashboard-.*\.vercel\.app$/,
    /^https:\/\/gofast-.*\.vercel\.app$/
  ],
  credentials: true
}));

app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'GoFast Backend v2 is running!',
    timestamp: new Date().toISOString()
  });
});

// Basic API routes (to be expanded)
app.get('/api', (req, res) => {
  res.json({ 
    message: 'GoFast Backend v2 API',
    version: '1.0.0',
    endpoints: ['/api/health', '/api/athlete']
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 GoFast Backend v2 running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
});

export default app;

