import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import { env } from "./config/env.js";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();


// =========================
// Security
// =========================

app.use(helmet());


// =========================
// CORS
// =========================

app.use(
  cors({
    origin: env.clientUrl,
    methods: ["POST", "GET"],
    allowedHeaders: ["Content-Type"],
  })
);


// =========================
// Body Parser
// =========================

app.use(
  express.json({
    limit: "10kb",
  })
);


// =========================
// Contact Rate Limit
// =========================

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,

  max: 5,

  standardHeaders: true,

  legacyHeaders: false,

  message: {
    success: false,
    message:
      "Too many enquiries. Please try again later.",
  },
});


// =========================
// Health Check
// =========================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Chakrin API is running.",
  });
});


// =========================
// Contact API
// =========================

app.use(
  "/api/contact",
  contactLimiter,
  contactRoutes
);


// =========================
// 404
// =========================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found.",
  });
});


// =========================
// Start Server
// =========================

app.listen(env.port, () => {
  console.log(
    `🚀 Chakrin server running on http://localhost:${env.port}`
  );
});