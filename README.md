# Greetings Web Part for SharePoint SPFx

## Overview
The Greetings Web Part is a custom SharePoint Framework (SPFx) web part designed to display personalized greeting messages based on the time of day. It allows customization of font properties and includes the capability to add a custom message alongside the greeting.

## Features
- **Dynamic Greetings:** Automatically displays "Good Morning", "Good Afternoon", or "Good Evening" based on the current time.
- **Custom Message:** Add a personalized message to accompany the greeting.
- **Customizable Text:** Modify the font color, size, weight, and position through the property pane.

## Screenshots
![1](https://github.com/rahulm-28/GreetingsWebPart/assets/64609744/c8b932e6-d02d-4189-9b24-00891f298b34)

![2](https://github.com/rahulm-28/GreetingsWebPart/assets/64609744/172a2823-b9ae-4d77-abfe-b92f40bf530c)

![3](https://github.com/rahulm-28/GreetingsWebPart/assets/64609744/ef8309fc-43f2-4d31-acd5-bf62d5d6f963)

![4](https://github.com/rahulm-28/GreetingsWebPart/assets/64609744/87c084c3-49c4-4fc1-b506-ba1ced1d49be)


## Installation
To use the Greetings Web Part, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/greetings-webpart.git
    ```
2. **Navigate to the project directory:**
    ```bash
    cd greetings-webpart
    ```
3. **Install dependencies:**
    ```bash
    npm install
    ```
4. **Build the project:**
    ```bash
    gulp build
    ```
5. **Bundle the project:**
    ```bash
    gulp bundle --ship
    ```
6. **Package the solution:**
    ```bash
    gulp package-solution --ship
    ```

## Deployment
To deploy the web part, upload the generated `.sppkg` file from the `sharepoint/solution` folder to your SharePoint App Catalog.

## Usage
1. Add the Greetings Web Part to a SharePoint page.
2. Use the property pane to customize the greeting message:
   - **Greeting Text:** Enter a custom message.
   - **Text Position:** Select the position (left, center, right).
   - **Font Size:** Set the font size.
   - **Font Weight:** Choose the font weight (e.g., normal, bold).
   - **Text Color:** Pick a color for the text.

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact
If you have any questions or feedback, please open an issue or contact me at [your email address].

---

Thank you for using the Greetings Web Part! We hope it enhances your SharePoint experience.
