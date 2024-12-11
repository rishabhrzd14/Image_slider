Image Slider Component
This project is a simple React-based image slider component with navigation arrows, clickable indicators, and smooth transitions. It uses the react-icons library for navigation icons and fetches images from a provided API endpoint.

Features
Image Navigation: Navigate through images using left and right arrows.
Clickable Indicators: Jump directly to a specific image using indicators.
Smooth Transitions: Images fade in and out during transitions.
Loading/Error Handling: Displays appropriate messages for loading and error states.
Technologies Used
Frontend: React.js
Icons: React Icons (react-icons/bs)
CSS Styling: Custom styles in imageSlider.css
Installation & Setup
1. Clone the Repository
bash
Copy code
git clone https://github.com/your-username/image-slider.git
cd image-slider
2. Install Dependencies
bash
Copy code
npm install
3. Run the Application
bash
Copy code
npm start
Usage
Props
Prop Name	Type	Default	Description
url	String	-	API URL to fetch images
limit	Number	5	Number of images per page
page	Number	1	Page number to fetch
Code Explanation
1. State Management:
images: Stores fetched image data.
currentImage: Tracks the currently displayed image index.
errorMessage: Stores error messages in case of API failure.
loadingState: Tracks loading state during API requests.
2. Functions:
fetchImages(getUrl): Fetches images from the API and sets state.
handleClickPrev(): Navigates to the previous image.
handleClickNext(): Navigates to the next image.
3. Effects:
useEffect(): Triggers image fetching when the url prop changes.
File Structure
arduino
Copy code
/image-slider
  ├── src
  │   ├── components
  │   │   └── ImageSlider.js
  │   ├── styles
  │   │   └── imageSlider.css
  │   └── App.js
  ├── README.md
  └── package.json
Styling Overview (CSS)
Container (.container): Centers the entire component.
Navigation Arrows (.arrow, .arrow-left, .arrow-right): Positioned for intuitive navigation.
Images (.current-image, .hide-current-image): Visible and hidden styles for smooth transitions.
Indicators (.current-indicator, .hide-current-indicator): Shows active and inactive indicators.
Example API Response (Sample Data Format)
json
Copy code
[
  {
    "id": "1",
    "download_url": "https://example.com/image1.jpg"
  },
  {
    "id": "2",
    "download_url": "https://example.com/image2.jpg"
  }
]
Contributing
Fork the repository.
Create a feature branch (git checkout -b feature/YourFeature).
Commit your changes (git commit -m "Add YourFeature").
Push to the branch (git push origin feature/YourFeature).
Open a Pull Request.