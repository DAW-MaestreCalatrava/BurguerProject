# BurgerProject

The BurgerProject is a landing page for a burger shop called **Paradise Burger** located in Ciudad Real. This project is built using **Web Components** to create reusable, modular, and encapsulated UI elements, providing a modern and flexible approach to front-end development.

The landing page is designed to showcase the offerings of **Paradise Burger**, with features such as an interactive menu, a contact form, and a visually appealing layout. The project demonstrates how to use Web Components to handle different sections of the page, such as custom forms, inputs, and burger-related features.

## Project Structure

```
.
├── LICENSE
├── README.md
├── components
│   └── index.html
├── conocenos
│   └── index.html
├── contacta
│   └── index.html
├── index.html
├── main.js
├── package-lock.json
├── package.json
├── requirements
│   └── Proyecto Lading - Paradise Burguer.pdf
└── src
    ├── components
    │   ├── burger-component
    │   │   ├── burger-component.css
    │   │   ├── burger-component.js
    │   │   ├── form-component.js
    │   │   ├── input-component.js
    │   │   └── input-focus-component.js
    │   ├── button-component
    │   │   ├── button-component.css
    │   │   └── button-component.js
    │   ├── card
    │   │   ├── card.css
    │   │   └── card.js
    │   ├── footer
    │   │   └── footer-component.js
    │   ├── footerComponents
    │   │   ├── globe-icon.js
    │   │   ├── instagram-icon.js
    │   │   └── truck-icon.js
    │   ├── form-component
    │   │   └── form-component.js
    │   ├── header-component
    │   │   └── header-component.js
    │   ├── hero-component
    │   ├── hero-section
    │   │   ├── hero.css
    │   │   └── hero.js
    │   ├── input-component
    │   │   └── input-component.js
    │   ├── input-focus-component
    │   │   └── input-focus-component.js
    │   ├── nav-component
    │   │   └── nav-component.js
    │   ├── section-component
    │   │   ├── section.css
    │   │   └── section.js
    │   └── text
    │       ├── text.css
    │       └── text.js
    ├── contacts.html
    ├── css
    │   ├── reset.css
    │   └── styles.css
    ├── img
    │   ├── fotoCo.png
    │   ├── hero-fondo.jpg
    │   └── logo.jpg
    └── index.js
```
## Features

- **Web Components**: The project leverages Web Components for modular and reusable elements such as buttons, forms, and inputs.
- **Interactive Design**: The landing page includes interactive elements like a burger menu, form inputs, and a responsive layout.
- **Modern Layout**: The design is clean and modern, aimed at attracting visitors and making it easy to navigate through the offerings of the burger shop.
- **Responsive Design**: The layout adjusts seamlessly across different screen sizes, ensuring a good experience on both desktop and mobile devices.

## How to Run the Project

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Run the project with `npm start`.
4. Alternatively, you can use `live-server` to run the project:
   - Install `live-server` globally with `npm install -g live-server`.
   - Run `live-server` in the project directory.

## Components

### burger-component
This is the main component of the landing page, responsible for displaying a visual representation of the burger items and menu options.

### form-component
A custom form component that allows users to fill out information for orders or inquiries.

### input-component
A reusable input field component that can be used throughout the page for different types of data input.

### input-focus-component
This component is used to manage and style input fields that require focus behavior (e.g., changing appearance on focus).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.≥