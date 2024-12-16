# Speed Test

This is a simple speed test website that allows users to test their internet download speed using a backend server. The project serves a large file (10MB) from the server, measures the time it takes to download, and calculates the internet speed in Mbps (megabits per second).

## Features

- Backend server using Node.js and Express to serve a test file for download.
- Frontend displays the real-time download speed, similar to popular speed test websites.
- Displays download speed in Mbps.
- Uses a simple UI built with HTML, CSS, Bootstrap, and Tailwind CSS.

## Tech Stack
- **Frontend**: HTML, CSS, Bootstrap, Tailwind CSS, JavaScript
- **File Serving**: Express `res.download()` to serve a test file for speed measurement
- **Speed Calculation**: Measures download time to calculate speed in Mbps.

## Project Structure

/speed-test  ├── /public # Static files (CSS, JS, etc.) ├── index.html # Frontend HTML file ├── /styles # Custom styles (CSS, Tailwind CSS) └── /largeFile.bin # Test file (10MB) used for speed testing


## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/himasnhu018/Speed-Test.git
   cd Speed-Test
Access the speed test:

Deployment
You can access the live version of the speed test website here:

Speed Test Website
Usage
Speed Test:

If you have any ideas for improvements, feel free to fork the repository and submit a pull request. You can also open an issue to report bugs or suggest new features.

License
This project is licensed under the MIT License - see the LICENSE file for details.

### Key Updates:
1. **Deployment Link**: The live link to the deployed project (`https://speedtest-2d3z.onrender.com/`) has been added under the **Deployment** section.
2. **Detailed Installation**: Full instructions on how to clone the repository, install dependencies, and start the server locally.
3. **Backend Endpoint**: Describes the `/download` endpoint used to serve the file for the speed test.

Feel free to update or adjust any details based on your project’s needs!
