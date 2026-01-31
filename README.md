# ITPM Playwright Assignment 
Playwright Test Case Testing Project
This README explains step-by-step how to install dependencies and run tests in a Playwright testing project.
________________________________________
1. Prerequisites
Before starting, make sure you have the following installed:
•	Node.js (LTS version recommended – v18 or later)
o	Check installation:
o	node -v
o	npm -v
•	Git (optional, but recommended)
o	Check installation:
o	git --version
•	A code editor (VS Code recommended)
________________________________________
2. Clone the Project (If Using Git)
If the project is in GitHub:
git clone <your-repository-url>
cd <project-folder-name>
If you already downloaded the ZIP file, extract it and open the folder in VS Code.
________________________________________
3. Install Project Dependencies
Inside the project root folder, run:
npm install
This will:
•	Install Playwright
•	Install all required Node.js packages
•	Create the node_modules folder
________________________________________
4. Install Playwright Browsers (IMPORTANT)
Run this command once after installing dependencies:
npx playwright install
This installs:
•	Chromium
•	Firefox
•	WebKit
________________________________________
5. Project Folder Structure (Typical)
project-root/
│
├─ tests/                  # All Playwright test files (*.spec.js / *.spec.ts)
│   ├─ example.spec.js
│
├─ playwright.config.js    # Playwright configuration
├─ package.json
├─ package-lock.json
└─ README.md
________________________________________
6. Run All Tests
To run all Playwright tests:
npx playwright test
________________________________________
7. Run a Specific Test File
Example:
npx playwright test tests/example.spec.js
If you get “No tests found”, make sure:
•	File name ends with .spec.js or .spec.ts
•	Tests are inside the tests folder
________________________________________
8. Run Tests in Headed Mode (See Browser)
npx playwright test --headed
________________________________________
9. Run Tests Using UI Mode (Recommended for Beginners)
npx playwright test --ui
This allows:
•	Clicking tests manually
•	Watching steps live
•	Debugging easily
________________________________________
10. View Test Report
After running tests, open the HTML report:
npx playwright show-report
________________________________________
11. Record Tests Using Codegen
To auto-generate test scripts:
npx playwright codegen https://example.com
This opens:
•	A browser
•	Playwright Inspector
•	Auto-generated test code
________________________________________
12. Common Errors & Fixes
❌ Error: No tests found
✔ Fix:
•	File name must end with .spec.js
•	File must be inside tests/ folder
•	Test must use test() from @playwright/test
________________________________________
❌ Browser not found
✔ Fix:
npx playwright install
________________________________________
13. Useful Commands Summary
npm install
npx playwright install
npx playwright test
npx playwright test --ui
npx playwright test --headed
npx playwright show-report
________________________________________
14. Notes
•	Always run commands from the project root folder
•	Do not delete playwright.config.js
•	Commit package.json and package-lock.json to GitHub
________________________________________
✅ Your Playwright project is now ready to test!

