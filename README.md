# UkrMobil Service Notes

![UkrMobil Service Notes Logo](https://ukr-mobil.com/image/catalog/logo.png)

## Main Objectives

The website "UkrMobil Service Notes" aims to simplify the work of the mobile repair shop in Rivne. The project is designed for use by multiple individuals and has several main objectives:

### Navigation:

- **Login Page:** When accessing the website, users are greeted with a login page where they can select their user profile from a dropdown menu. The selected user will be saved in the local storage and will be used as the "master" field when sending data to Firebase, ensuring correct assignment of avatars for order tracking. The page also features a "Logout" button to return to the login page and switch to a different user.

- **MARKETS Page:** This page allows managers or technicians to fill out an order form with details such as item, date, recipient, arrival date, and comments from a modal window. The page displays a table with information about the orders and a delete button. Deleted orders from the MARKETS page are transferred to the ARCHIVE page.

- **ARCHIVE Page:** This page stores the history of orders from the MARKETS page. When an order is deleted from the MARKETS page, it is moved to the ARCHIVE page. On the ARCHIVE page, administrators have the option to permanently delete orders from the Firebase database.

- **STORAGE Page:** The STORAGE page manages the inventory of spare parts available in the repair shop. Over the years, the technicians have accumulated a significant number of phone parts that can be reused. However, these parts are not properly tracked, leading to unnecessary financial expenses when parts are re-ordered unnecessarily. The page features a form to add new items to the database, and a search bar to quickly find items based on keywords, such as "iPhone 11 Display."

- **REPAIRS Page:** This page displays the live queue of ongoing phone repairs. Managers can enter details about the repair, assign a technician, set the deadline, and have the flexibility to modify the information if needed. This ensures customers are informed about repair timelines, and the workshop maintains a reputation for timely service.

These objectives are geared towards enhancing the efficiency and organization of the mobile repair workshop, making it easier for managers and technicians to handle orders, manage inventory, and keep track of repairs. The use of Firebase and various technologies such as Vite, React, and Typescript ensures a robust and modern web application. The project also utilizes SCSS and the Material-UI library to achieve a visually appealing and consistent design for a better user experience.

## Technologies

The project is built using Vite with React + Typescript.

## Styling

For styling, we use SCSS along with the Material-UI library to achieve a visually appealing and consistent design.

## Libraries used

- Material-UI
- Firebase
- Moment
- Sass
- Yup
- i18next
- Normalize.css
- React-hook-form
- React-router-dom

## My contacts:

  - **Mobile phone and Telegram: +380970553062**
  - **Email: dimamaksymiuk01@gmail.com**
  - **Linkedin: [Dmytro Maksymiuk](https://www.linkedin.com/in/dmytro-maksymiuk-091645252/)**
  - **Discord: demetrius1**
