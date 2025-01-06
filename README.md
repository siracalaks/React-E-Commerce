# LA COLLECTION - React E-Commerce Project

A modern e-commerce web application built with React, featuring a responsive design, product filtering, shopping cart functionality, and user authentication.

![LA COLLECTION Screenshot](screenshot.png)

## 🌟 Features

- 📱 Responsive design for all devices
- 🔍 Product search and filtering
- 🛍️ Shopping cart management
- 👤 User authentication (Login/Register)
- 🎯 Category-based product filtering
- 💳 Checkout process
- 📦 Product details view

## 🚀 Live Demo

Check out the live demo: [Live Demo](https://sirac-ecommerce-react.netlify.app/)

## 🛠️ Technologies Used

- React 18
- Redux (State Management)
- React Router v6
- Bootstrap 5.3
- Font Awesome 6
- Fake Store API
- React Toastify

## ⚙️ Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/React-E-Commerce.git
```

2. Navigate to the project directory:
```bash
cd React-E-Commerce
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`

## 📚 Dependencies

```json
{
  "dependencies": {
    "@reduxjs/toolkit": "^1.9.7",
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "bootstrap": "^5.3.2",
    "font-awesome": "^4.7.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-loading-skeleton": "^3.3.1",
    "react-redux": "^8.1.3",
    "react-router-dom": "^6.20.1",
    "react-scripts": "5.0.1",
    "react-toastify": "^9.1.3",
    "redux": "^4.2.1",
    "web-vitals": "^2.1.4"
  }
}
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Products.jsx
│   ├── Product.jsx
│   ├── Cart.jsx
│   ├── Login.jsx
│   └── Register.jsx
├── redux/
│   ├── action/
│   └── reducer/
├── services/
│   └── toast.js
├── App.js
└── index.js
```

## 🔧 Configuration

The project uses environment variables for configuration. Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=https://fakestoreapi.com
```

## 🚀 Deployment

To deploy to Netlify:

1. Build the project:
```bash
npm run build
```

2. Deploy using Netlify CLI or connect your GitHub repository to Netlify for automatic deployments.

## 🧪 Testing

Run the test suite:
```bash
npm test
```

## 📝 API Reference

This project uses the [Fake Store API](https://fakestoreapi.com/) for product data:

- GET `/products` - Fetch all products
- GET `/products/{id}` - Fetch single product
- GET `/products/categories` - Fetch categories

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

## 👨‍💻 Developer

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/siracalaks">
        <img src="https://github.com/siracalaks.png" width="100px;" alt="Developer Profile Picture"/>
        <br />
        <sub><b>Sirac</b></sub>
      </a>
    </td>
  </tr>
</table>

### Contact
- 📧 Email: [siracalaks@gmail.com](mailto:email@example.com)
- 💼 LinkedIn: [https://www.linkedin.com/in/sirac-alakus-64a29917a/](https://www.linkedin.com/in/sirac-alakus-64a29917a/)

---

<div align="center">

⭐️ If you enjoyed this project, don’t forget to give it a star!

</div>


## 🙏 Acknowledgments

- [Fake Store API](https://fakestoreapi.com/) for providing the product data
- [Bootstrap](https://getbootstrap.com/) for the UI components
- [Font Awesome](https://fontawesome.com/) for the icons

## 🐛 Known Issues

Currently, there are no known issues. If you discover any bugs, please open an issue.

## 🔜 Future Improvements

- [ ] Add payment gateway integration
- [ ] Implement user profile management
- [ ] Add product reviews and ratings
- [ ] Implement wishlist functionality
- [ ] Add admin dashboard
- [ ] Implement real backend integration
