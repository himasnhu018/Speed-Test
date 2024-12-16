# Speed Test

This is a simple speed test website that allows users to test their internet download speed using a backend server. The project serves a large file (10MB) from the server, measures the time it takes to download, and calculates the internet speed in Mbps (megabits per second).

## Features

- Backend server using Node.js and Express to serve a test file for download.
- Frontend displays the real-time download speed, similar to popular speed test websites.
- Displays download speed in Mbps.
- Uses a simple UI built with HTML, CSS, Bootstrap, and Tailwind CSS.

## Tech Stack

- **Backend**: Node.js, Express
- **Frontend**: HTML, CSS, Bootstrap, Tailwind CSS, JavaScript
- **File Serving**: Express `res.download()` to serve a test file for speed measurement
- **Speed Calculation**: Measures download time to calculate speed in Mbps.

## Project Structure

/speed-test ├── /node_modules # Node.js dependencies ├── /public # Static files (CSS, JS, etc.) ├── server.js # Backend server file (Express server) ├── index.html # Frontend HTML file ├── /styles # Custom styles (CSS, Tailwind CSS) └── /largeFile.bin # Test file (10MB) used for speed testing


## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/himasnhu018/Speed-Test.git
   cd Speed-Test
npm install
node server.js
The server will start running on http://localhost:3000 by default.

Access the speed test:

Open your browser and navigate to http://localhost:3000 to use the speed test.

Deployment
You can access the live version of the speed test website here:

Speed Test Website
Usage
Speed Test:

Once the page loads, the test will automatically start.
It will display the download speed in Mbps, showing the speed calculation based on the time it takes to download a 10MB file.
Backend:

The server uses the /download endpoint to serve the 10MB test file to the frontend, which is used to calculate the download speed.
Backend Endpoint
The backend uses the /download endpoint to serve a file for speed testing:
app.get("/download", (req, res) => {
  const filePath = path.join(__dirname, "largeFile.bin");
  res.download(filePath);
});
The file largeFile.bin is used as the test file for download speed.
Troubleshooting
If the website is not responding, ensure that the backend server is running and that the server is correctly configured to serve the largeFile.bin file.
Make sure you're accessing the correct port (http://localhost:3000 by default).
If you're getting CORS issues, ensure that your backend is correctly handling cross-origin requests.
Contributing
If you have any ideas for improvements, feel free to fork the repository and submit a pull request. You can also open an issue to report bugs or suggest new features.

License
This project is licensed under the MIT License - see the LICENSE file for details.

### Key Updates:
1. **Deployment Link**: The live link to the deployed project (`https://speedtest-2d3z.onrender.com/`) has been added under the **Deployment** section.
2. **Detailed Installation**: Full instructions on how to clone the repository, install dependencies, and start the server locally.
3. **Backend Endpoint**: Describes the `/download` endpoint used to serve the file for the speed test.

Feel free to update or adjust any details based on your project’s needs!
