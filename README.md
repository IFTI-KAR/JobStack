# JobStack - Job Listing Web App

JobStack is a professional job portal where users can explore top companies, view detailed job listings, and manage their profiles. Built using React, Firebase Auth, and React Router DOM, it offers a modern and responsive experience.

## 🌐 Live Links

* **Netlify**: [https://fascinating-caramel-059b4c.netlify.app/](https://fascinating-caramel-059b4c.netlify.app/)
* **Firebase**: [https://jobstack-ac268.web.app/](https://jobstack-ac268.web.app/)

---

## 🚀 Getting Started (Development)

1. **Clone this repository**

   ```bash
   git clone https://github.com/your-username/jobstack.git
   cd jobstack
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```



## 📁 Project Structure

```
├── public
│   ├── company-jobs.json      # Static JSON for job listings
│   ├── index.html
│   └── vite.svg
│
├── src
│   ├── assets                 # Static assets (images, etc.)
│   ├── components             # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── herosection.jsx
│   │   ├── Howitworks.jsx
│   │   ├── increasingNumbers.jsx
│   │   └── Latestblogs.jsx
│   │
│   ├── firebase
│   │   └── firebase.config.js # Firebase configuration
│   │
│   ├── layouts
│   │   ├── AuthLayout.jsx
│   │   └── HomeLayout.jsx
│   │
│   ├── pages                  # Application pages
│   │   ├── Companies.jsx
│   │   ├── CompanyDetails.jsx
│   │   ├── contactUs.jsx
│   │   ├── EditProfile.jsx
│   │   ├── ErrorPage.jsx
│   │   ├── ForgotPass.jsx
│   │   ├── Loading.jsx
│   │   ├── Login.jsx
│   │   ├── MyProfile.jsx
│   │   ├── pages.jsx
│   │   └── Regiter.jsx
│   │
│   ├── provider
│   │   ├── AuthProvider.jsx   # Context for authentication
│   │   └── PrivateRoute.jsx   # Protects private routes
│   │
│   ├── routes
│   │   └── router.jsx         # Route definitions
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .eslintrc.js
├── vite.config.js
└── package.json
```

---

## 💡 Features

* ✉️ **Browse Jobs**: Filter through jobs listed by top tech companies.
* 👤 **User Auth**: Secure login/register using Firebase Authentication.
* 🏢 **Company Details**: View company info and all its job openings.
* 📅 **Protected Routes**: Authenticated access for profile editing and job details.
* 🌐 **Responsive Design**: Fully optimized for all screen sizes.

---

#

---

## 🔧 Technologies Used

* **Frontend**: React, TailwindCSS, DaisyUI
* **Routing**: `react-router-dom`
* **Authentication**: Firebase Auth
* **Deployment**: Netlify (static), Firebase Hosting (auth + fallback)
* **Data**: Local JSON (`company-jobs.json`) used with loaders




---

> Built with passion and code ❤️
