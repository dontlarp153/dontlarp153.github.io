(async () => {
  const battery = await navigator.getBattery?.();
  const data = {
    userAgent: navigator.userAgent,
    language: navigator.language,
    screen: { width: window.innerWidth, height: window.innerHeight },
    deviceMemory: navigator.deviceMemory || "unknown",
    referrer: document.referrer || "none",
    battery: battery ? Math.round(battery.level * 100) + "%" : "unknown",
    time: new Date().toISOString(),
  };

  fetch("https://dontlarp153-github-io.vercel.app/api/log", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).catch((err) => console.error("Logging failed:", err));
})();
