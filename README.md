# ⭐ Star Wars Characters Explorer (React + Vite)

A responsive React application that fetches Star Wars character data from the public **SWAPI API** and displays it in a clean card layout with pagination, modal details, loading states, and URL-synced navigation.

---

## 🚀 Features

* Fetches data from the public REST API
  👉 https://swapi.dev/api/people

* Shows characters in a **3 × 3 card grid (9 per page)**

* Pagination synced with URL (`?page=2`)

* Loading spinner while fetching data

* Error handling if API fails

* Animated hover cards

* Click a card to open a **details modal**

* Character details include:

  * Name
  * Height in meters
  * Mass in kg
  * Birth year
  * Number of films
  * Date added (dd-MM-yyyy format)

* Dark gradient UI theme

* Clean component-based architecture

---

## 🧱 Tech Stack

* React (Vite)
* React Hooks
* React Router DOM
* CSS (custom styling)
* REST API integration using `fetch`

---

## 📂 Project Structure

```
src/
 ├── components/
 │   ├── Card.jsx
 │   ├── Modal.jsx
 │   ├── Loader.jsx
 │   ├── Error.jsx
 │   ├── Pagination.jsx
 │
 ├── App.jsx
 ├── App.css
 ├── main.jsx
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone <your-repo-url>
cd <project-folder>
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the development server

```bash
npm run dev
```

App will run on:

```
http://localhost:5173
```

---

## 🌐 URL Pagination

The page number is synced with the URL.

Examples:

```
/?page=1
/?page=2
/?page=3
```

This allows:

* Refreshing without losing page state
* Browser back/forward navigation
* Shareable links

---

## 📡 API Reference

This app uses the public Star Wars API:

```
https://swapi.dev/api/people
```

Example paginated request:

```
https://swapi.dev/api/people/?page=2
```

---

## 🎯 Future Improvements (Optional)

* Search characters by name
* Smart pagination (Google style)
* Skeleton loading cards
* Keyboard-accessible modal
* Dark/light theme toggle
* Animations and page transitions
* TypeScript support

---

## 👨‍💻 Author

Built as a React practice project to demonstrate:

* API integration
* Component architecture
* State management
* Pagination handling
* URL synchronization

---

## 📜 License

This project is open source and free to use.
