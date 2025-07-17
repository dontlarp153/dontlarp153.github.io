export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress || "unknown";
  const data = req.body || {};

  console.log("📍 IP:", ip);
  console.log("💻 User-Agent:", data.userAgent || "unknown");
  console.log("🌐 Language:", data.language || "unknown");
  console.log("📺 Screen:", JSON.stringify(data.screen));
  console.log("🔋 Battery:", data.battery);
  console.log("🧠 Memory:", data.deviceMemory);
  console.log("🔗 Referrer:", data.referrer);
  console.log("🕓 Time:", data.time);
  console.log("==================================");

  res.status(200).json({ message: "Logged" });
}
