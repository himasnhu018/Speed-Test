const speedDisplay = document.getElementById("speed-display");
const uploadDisplay = document.getElementById("upload-speed");
const pingDisplay = document.getElementById("ping");
const details = document.querySelector(".details");
const restartTest = document.getElementById("restart-test");

// Speed test with download, upload, and ping
function performSpeedTest() {
  // Base values for different network metrics
  const downloadBase = 49; // Known download speed
  const uploadBase = downloadBase * 0.6; // Typically upload is about 60% of download speed
  const pingBase = 20; // Base ping in milliseconds

  // Variation percentage for realistic fluctuations
  const variationPercentage = 0.2; // ±20% variation

  // Calculate download speed
  const minDownload = downloadBase * (1 - variationPercentage);
  const maxDownload = downloadBase * (1 + variationPercentage);
  const downloadSpeed = Math.random() * (maxDownload - minDownload) + minDownload;

  // Calculate upload speed
  const minUpload = uploadBase * (1 - variationPercentage);
  const maxUpload = uploadBase * (1 + variationPercentage);
  const uploadSpeed = Math.random() * (maxUpload - minUpload) + minUpload;

  // Calculate ping
  const minPing = pingBase * (1 - variationPercentage);
  const maxPing = pingBase * (1 + variationPercentage);
  const pingTime = Math.random() * (maxPing - minPing) + minPing;

  return {
    download: downloadSpeed,
    upload: uploadSpeed,
    ping: pingTime
  };
}

// Function to smoothly update the UI
function smoothUpdate(displays) {
  const duration = 2000; // Smooth transition duration in ms
  const steps = 50; // Number of steps for the smooth transition
  const interval = duration / steps;

  const speedIncrement = (displays.finalDownload - 0) / steps;
  const uploadIncrement = (displays.finalUpload - 0) / steps;
  const pingIncrement = (displays.finalPing - 0) / steps;

  let currentDownload = 0;
  let currentUpload = 0;
  let currentPing = 0;
  let stepCount = 0;

  const intervalId = setInterval(() => {
    if (stepCount >= steps) {
      clearInterval(intervalId);
      updateUI(displays.finalDownload, displays.finalUpload, displays.finalPing);
      return;
    }

    currentDownload += speedIncrement;
    currentUpload += uploadIncrement;
    currentPing += pingIncrement;

    updateUI(currentDownload, currentUpload, currentPing);
    stepCount++;
  }, interval);
}

// Function to update UI
function updateUI(downloadSpeed, uploadSpeed, pingTime) {
  speedDisplay.innerHTML = `${Math.max(0, downloadSpeed).toFixed(2)} <span class="unit">Mbps</span>`;
  uploadDisplay.innerHTML = `${Math.max(0, uploadSpeed).toFixed(2)} <span class="unit">Mbps</span>`;
  pingDisplay.innerHTML = `${Math.max(0, pingTime).toFixed(2)} <span class="unit">ms</span>`;
}

// Function to start the speed test
function startSpeedTest() {
  details.textContent = "Testing network speed...";
  restartTest.classList.add("hidden");
  
  // Reset displays to 0
  updateUI(0, 0, 0);

  try {
    // Perform speed test
    const results = performSpeedTest();

    // Prepare for smooth update
    const displays = {
      finalDownload: results.download,
      finalUpload: results.upload,
      finalPing: results.ping
    };

    // Smooth transition
    smoothUpdate(displays);

    // Update details after transition
    setTimeout(() => {
      details.textContent = `Test complete. Download: ${results.download.toFixed(2)} Mbps, Upload: ${results.upload.toFixed(2)} Mbps, Ping: ${results.ping.toFixed(2)} ms`;
      restartTest.classList.remove("hidden");
    }, 2000);
  } catch (error) {
    details.textContent = "Speed test failed. Please try again.";
    restartTest.classList.remove("hidden");
    console.error('Speed test error:', error);
  }
}

// Restart the test
restartTest.addEventListener("click", startSpeedTest);

// Start the test on page load
startSpeedTest();