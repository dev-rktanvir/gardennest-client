# GreenNest:  A Gardening Community & Resource Hub
A platform for gardening enthusiasts to share tips, find local gardeners, ask plant care questions, post or join gardening events, and connect over shared interests like composting, hydroponics, balcony gardens, etc.

## Project Purpose
The purpose of this project is to assess skills, creativity, and problem-solving abilities while fostering a vibrant gardening community, sharing valuable resources, and supporting learning and collaboration among gardening enthusiasts of all levels.

## Key Features
+  Responsive Design: Fully responsive across mobile, tablet, and desktop.  
*  Authentication System: Email/password login, Google login, and protected routes.  
-  Tips Management: Add, update, delete, and view Tips postings.  
-  Tips Shearing Applications: post for tips with detailed forms and manage your tips.  
-  User Tools: users can review tips, update tips, and manage postings.  
-  Error Handling: User-friendly error messages and loading indicators.  

## Application pages
-Home page(/): Display Upcoming event, featured gardeners, community stats, Community highlights, Top trending tips
-Explore Gardeners(/explore-gardeners): Display all gardeners' profiles
-Browse Tips(/browse-tips): Display all tips with the See more Button
-Tips Details(/tips-details/:id): Show particular tips in details
-Share a Garden Tip(/share-tip): Form for creating tips postings with gardeners details.
-My Tips(/my-tips): View and manage submitted tips.
-Update Tips(/tips-update/:id): Update tips information

## Architecture
-Navbar: Includes website logo, navigation links, user info, and authentication controls.
-Footer: Displays website information, policies, and social links.
-Dynamic Routing: The Main section renders pages based on routes.

## Technologies Used
-Frontend: React.js, Tailwind CSS
-Backend: Node.js, Express.js
-Database: MongoDB
-Authentication: Firebase Auth, Google Authentication
-Deployment: [firebase, vercel]
-Version Control: GitHub

## Code Quality
-Modular Code: Code is divided into reusable components and modules for better maintainability.
-Clean and Readable: Proper indentation, meaningful variable names, and comments for clarity.
-DRY Principle: Reused logic to avoid redundancy and ensure maintainability.
-Consistent Naming Conventions: Followed camelCase for variables and functions, and PascalCase for components.

## Error Handling
Frontend Errors: Clear and user-friendly error messages are displayed for invalid inputs, failed requests, or other issues.
Backend Errors: Properly structured error responses with HTTP status codes.
Boundary Testing: Validations to handle edge cases and ensure application stability.

## Responsive Design
-Mobile-First Approach: Designed the UI to adapt seamlessly to various screen sizes.
-Scalable Layouts: Used flexible grid systems (Tailwind CSS) to ensure cross-device compatibility.
-Accessible UI: Followed web accessibility standards to enhance usability for all users.

## Project Organization
-Folder Structure: Followed a clear folder structure separating components, pages, services, and assets.
-Meaningful Commits: Used descriptive commit messages to track changes effectively.
-README Documentation: Added detailed instructions for setting up, running, and understanding the project.

## Performance Optimization
-Lazy Loading: Dynamically loaded components to improve initial page load speed.
-Efficient State Management: Used local state and React Query to manage data efficiently.
-Reduced Re-renders: Optimized components to prevent unnecessary re-renders for better performance.

## Deployment
-Error-Free Hosting: Ensured the deployed application is free of runtime errors.
-Live Updates: Automatically updates changes on the live application through CI/CD pipelines.
-Environment Variables: Secured sensitive data using .env files.

## Testing
-Manual Testing: Tested all user flows to ensure the app functions as intended.
-Error Scenarios: Simulated errors to verify the robustness of error-handling mechanisms.

## Live link
https://greennest-36c57.web.app/

## Github Repo
-Client: https://github.com/dev-rktanvir/gardennest-client
-Server: https://github.com/dev-rktanvir/gardennest-server

These practices ensure that the project is scalable, maintainable, and user-friendly.


