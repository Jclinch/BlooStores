# BlooStore E-Commerce Platform - Front-End Intern Challenge

## Overview

This project is a simplified e-commerce platform built as part of the Front-End Software Engineer Intern practical challenge. It includes a **Product Listing Page**, **Cart Management**, and a **Checkout Page** with shipping details form. The application is built using **React (Next.js)**, **TypeScript**, and **Tailwind CSS**, and integrates with a mock API for product data.

## Features

### 1. **Product Listing Page**
   - Fetches and displays a list of products from the [FakeStore API](https://fakestoreapi.com/products).
   - Each product includes an image, name, price, and an "Add to Cart" button.
   - Responsive grid layout using **Tailwind CSS**.

### 2. **Cart Management**
   - Users can add and remove items from the cart.
   - Dynamic display of the total price of selected items.
   - Global state management using **Zustand**.

### 3. **Checkout Page**
   - Displays selected items and the total amount.
   - Includes a form for entering shipping details (Name, Address, Phone Number, Email).
   - Basic form validation using **TypeScript**.

### 4. **API Integration**
   - Fetches product data from the FakeStore API.
   - Handles loading states and error scenarios gracefully.

### 5. **Bonus Features**
   - **Dark Mode**: Implemented using Tailwind CSS.
   - **Search Bar**: Allows users to filter products dynamically.
   - **Confirmation Modal**: Displays a modal before finalizing the checkout.
   - **Local Storage**: Persists cart data across page reloads.
   - **Deployment**: The project is deployed on **Vercel**.

## Technologies Used

- **React (Next.js)**: Framework for building the application.
- **TypeScript**: Ensures type safety and improves code quality.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Zustand**: Lightweight state management library.
- **FakeStore API**: Provides mock product data.
- **Vercel**: Deployment platform for hosting the application.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Jclinch/BlooStores.git
   cd e-commerce-platform
   ```

2. **Install dependencies**:
   ```bash
     yarn install
   ```

3. **Run the development server**:
   ```bash
     yarn dev
   ```

4. **Open the application**:
   Visit `http://localhost:3000` in your browser.

## Deployment

The application is deployed on **Vercel**. You can access it here:  
[Live Demo](https://e-commerce-platform.vercel.app)


## Evaluation Criteria

- **Code Quality & Structure**: Clean, readable, and well-organized code.
- **Functionality & Completeness**: Implementation of all required features.
- **User Experience (UI/UX)**: Responsive, visually appealing, and intuitive design.
- **Performance & Optimization**: Efficient API handling and state management.
- **Error Handling & Validation**: Graceful handling of edge cases.

## Submission

- **GitHub Repository**: [BlooStores](https://github.com/Jclinch/BlooStores.git)
- **Deployed Link**: [Live Demo](https://e-commerce-platform.vercel.app)
- **Contact Email**: sunnyugwu2011@gmail.com

---

## Screenshots

### Product Listing Page
![Product Listing Page](/ss/mProdLite.png)
![Product Listing Page](/ss/mProdDark.png)

### Cart Page
![Cart Page](/ss/mCartLite.png)
![Cart Page](/ss/mCartDark.png)

### Checkout Page
![Checkout Page](/ss/checkout.png)

### Dark Mode
![Dark Mode](/ss/dark-mode.png)

---

## License

This project is licensed under Sunny Ugwu

---

## Acknowledgments

- [FakeStore API](https://fakestoreapi.com) for providing mock product data.
- [Tailwind CSS](https://tailwindcss.com) for the utility-first CSS framework.
- [Zustand](https://zustand-demo.pmnd.rs) for lightweight state management.

---

Thank you for reviewing my submission! I look forward to your feedback.

---
