# e-commerce-app-frontend

This is a modern e-commerce frontend application built with React and Redux Toolkit. It provides a seamless shopping experience, including product browsing, cart management, checkout with Stripe, and user authentication (including OAuth with Google, Facebook, and GitHub).

---

## 🚀 Features

- **Product Catalog:** Browse products by category, view product details, and search for items.
- **Shopping Cart:** Add, remove, and update product quantities in your cart.
- **User Authentication:** Register, log in, and log out with email/password or OAuth providers (Google, Facebook, GitHub).
- **Order Management:** Place orders, view past orders, and see order details.
- **Checkout:** Secure payments via Stripe integration.
- **Responsive Design:** Works well on desktop and mobile devices.

---

## 🛠️ Technologies Used

- **React 19** — UI library for building interactive interfaces
- **Redux Toolkit** — State management
- **React Router v7** — Client-side routing
- **Axios** — HTTP client for API requests
- **Styled-components** — CSS-in-JS styling
- **Stripe.js & @stripe/react-stripe-js** — Payment processing
- **React Toastify** — Notifications
- **Vite** — Fast development/build tool
- **Express.js** (for backend, not included here) — REST API and session management

---

## 📦 Project Structure

```
src/
├── components/          # Reusable components
├── features/            # Redux slices and async thunks
├── pages/               # Page components
├── app/                 # Redux store and app setup
├── assets/              # Static assets like images and fonts
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
├── index.js             # App entry point
└── ...
```

---

## 📖 Usage

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the development server
4. Open `http://localhost:3000` in your browser

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/YourFeature`)
6. Open a pull request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Redux Toolkit](https://redux-toolkit.js.org/) - Official, opinionated, batteries-included toolset for efficient Redux development
- [React Router](https://reactrouter.com/) - Declarative routing for React.js
- [Axios](https://axios-http.com/) - Promise based HTTP client for the browser and node.js
- [Styled-components](https://styled-components.com/) - Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress.
- [Stripe](https://stripe.com/docs/js) - Stripe.js and React Stripe.js for payment processing
- [React Toastify](https://fkhadra.github.io/react-toastify/) - React notification made easy 🚀

---

## 📫 Contact

For any inquiries, please contact me at [your-email@example.com](mailto:your-email@example.com).

---

Happy shopping! 🛒
