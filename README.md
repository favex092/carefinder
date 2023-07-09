# carefinder

React was used to create the web application carefinder. It offers customers a simple way to search for and locate hospitals close to where they are. The program uses Firebase for authentication, storage, and real-time database functionality. It combines with the Google Places API to retrieve comprehensive information about hospitals.

## Features

- "Hospital Search": Users can look up hospitals depending on their location or address. Using the Google Places API, the program retrieves data about hospitals, including names, addresses, ratings, and more.
- "User Authentication": Carefinder uses Firebase Authentication to manage user sign-up, login, and authentication. Users can set up accounts, log in, and access the application safely.
- "Share Hospitals: Users can quickly share hospitals with others by email, WhatsApp, or by creating a shareable link. The software offers practical sharing possibilities for easy communication.
- "Google Map Integration: Hospital locations are shown on an interactive map with the Google Maps API integrated. Users can get directions, get a visual representation of the hospitals in their region, and explore local places.


## Technologies Used

- *React*: React is a popular JavaScript library for building user interfaces. It enables the creation of reusable UI components and facilitates efficient rendering and state management.
- *Google Places API*: The Google Places API provides detailed information about places, including hospitals. Hospital Carefinder utilizes this API to fetch hospital data based on user searches and display it in the application.
- *Firebase*: Firebase is a comprehensive suite of cloud-based tools provided by Google. In this project, Firebase Authentication is used for user authentication, Firebase Firestore for real-time data storage, and Firebase Hosting to host the application.
- *React Router*: React Router is a popular routing library for React applications. It enables navigation and routing functionality in Hospital Carefinder, allowing users to move between different pages and components seamlessly.
- *Sass*: Sass stands for Syntactically Awesome Stylesheet; Sass is an extension to CSS; Sass is a CSS pre-processor; Sass is completely compatible with all versions.

## Installation and Setup

To run Hospital Carefinder locally, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/your-username/carefinder.git
   

2. Navigate to the project directory:

   ```shell
   cd carefinder
   

3. Install the dependencies:

   ```shell
   npm install
   

4. Configure Firebase:

   - Create a new Firebase project at [https://firebase.google.com/](https://firebase.google.com/).
   - Enable Firebase Authentication, Firestore, and Storage in your project settings.
   - Obtain the necessary Firebase project credentials (API key, project ID, etc.).
   - Update the Firebase configuration in the source code of the carefinder application.

5. Start the development server:

   ```shell
   npm run dev
   

6. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to access the Hospital Carefinder application.

## Usage

Once you have the Hospital Carefinder application up and running, you can perform the following actions:

- *React*: React is a popular JavaScript library for building user interfaces. It enables the creation of reusable UI components and facilitates efficient rendering and state management.
- *Google Places API*: The Google Places API provides detailed information about places, including hospitals. Hospital Carefinder utilizes this API to fetch hospital data based on user searches and display it in the application.
- *Firebase*: Firebase is a comprehensive suite of cloud-based tools provided by Google. In this project, Firebase Authentication is used for user authentication, Firebase Firestore for real-time data storage, and Firebase Hosting to host the application.
- *React Router*: React Router is a popular routing library for React applications. It enables navigation and routing functionality in Hospital Carefinder, allowing users to move between different pages and components seamlessly.
- *Sass*: Sass stands for Syntactically Awesome Stylesheet; Sass is an extension to CSS; Sass is a CSS pre-processor; Sass is completely compatible with all versions.
  
## Testing

Hospital Carefinder includes unit and component tests to ensure the reliability and correctness of its functionalities. To run the tests, use the following command:


npm run test


 ## The test suite utilizes React-test scripts as the testing framework and includes tests for various components and functionalities of the application.








## Contributing

Contributions to carefinder are welcome! If you would like to contribute to the project, please follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch for your feature or bug fix.
3. Make the necessary changes in your branch.
4. Commit and push your changes to your forked repository.
5. Submit a pull request to the main repository, providing a detailed description of your changes and any relevant information.

## License

This project is licensed under the MIT License. You can find the full license information in the [LICENSE](LICENSE) file.
