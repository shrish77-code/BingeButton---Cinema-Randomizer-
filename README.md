# 🎬 Binge Button

**Binge Button** is a web-based movie randomizer that helps users quickly decide what to watch.  
With a single click, the app randomly selects a movie and displays its details in a clean, modern interface.

This project was built as part of a **Python + Statistics + Data Analysis** course project, focusing on backend logic, data handling, and frontend–backend integration.

---

## 🚀 Features

- 🎲 **One-Click Movie Randomizer**
  - Instantly generates a random movie
  - Displays movie name and complete details at the center
- 🖼️ **Modern UI**
  - Dark-themed, immersive design
  - Smooth animations and transitions
- ⚡ **Backend-Driven Logic**
  - Random selection handled on the server
  - Clean API response structure
- 📊 **Data-Based Selection**
  - Movie data managed using Pandas and NumPy

---

## 🛠️ Tech Stack

### Frontend
- HTML5  
- CSS3  
- JavaScript  

### Backend
- Python 3.10  
- FastAPI / Flask  
- Pandas  
- NumPy  

---
## 📂 Project Structure
project/
│
│ ├── index.html
│ ├── randomizer.html
│ ├── styles.css
│
├── backend/
│ └── randomizer/
│ ├── app.py
│ ├── movies.csv
│-requirements.txt
│
├── README.md
└── .gitignore

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/binge-button.git
cd binge-button
uvicorn app:app --reload



