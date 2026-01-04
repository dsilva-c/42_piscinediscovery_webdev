# 42 Piscine Discovery Web 🏊‍♂️ 💻

![42 Web](https://img.shields.io/badge/42-Piscine_Discovery_Web-00babc?style=for-the-badge&logo=42)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

## 📌 About The Project

This repository contains my work from the 1st edition of the **Piscine Discovery Web** at **42 Porto**.

The **Piscine Discovery** is an intensive 5-day bootcamp designed to introduce students and non-students to the world of web development. Operating under 42's **peer-learning pedagogy**, this curriculum challenges us to build a functional web stack from the ground up without formal lectures. We solve problems by reading documentation, testing code, and collaborating with peers.

### Curriculum Overview

The curriculum is structured into specific modules called "Cells," each focusing on a distinct layer of web technology:

1.  **Cell 00 (Unix & Shell):** The foundation. Navigating the terminal, managing file permissions, and writing basic shell scripts to automate tasks.
2.  **Cell 01 (HTML5):** The skeleton. Learning semantic markup, DOM structure, and building the structural layout of web pages.
3.  **Cell 02 (CSS3):** The skin. Mastering styling, cascading rules, flexbox, animations, and responsive design principles.
4.  **Cell 03 (JavaScript & jQuery):** The muscles. Adding logic, event handling, data persistence (cookies), and dynamic behavior to the browser.
5.  **Rush (Integration):** The application. A final team project to combine all learned skills into a production-ready website.

---

## 📂 Repository Contents

### 🐚 [cell00](discovery_piscine/cell00/) - Filesystem & Command Line
*Introduction to the Unix Shell, file management, and permissions.*

* **[ex00](discovery_piscine/cell00/ex00)**: **Filesystem Navigation** — Basics of `ls`, `cd`, and `pwd` to navigate the terminal.
* **[ex01](discovery_piscine/cell00/ex01)**: **Z** — Creating a file with specific character output using commands.
* **[ex02](discovery_piscine/cell00/ex02)**: **midLS** — Specific `ls` command to list files/directories (excluding hidden ones), comma-separated.
* **[ex03](discovery_piscine/cell00/ex03)**: **count_files** — A shell script to count regular files and directories in a target path.
* **[ex04](discovery_piscine/cell00/ex04)**: **argv** — A script demonstrating how to handle command-line arguments in Bash.
* **[ex05](discovery_piscine/cell00/ex05)**: **build** — An automation script to dynamically generate exercise folders (e.g., `ex00`) based on arguments.

### 🧱 [cell01](cell01/) - HTML5 Structure
*Building the skeletal structure of web pages using semantic HTML.*

* **[ex00](discovery_piscine/cell01/ex00)**: **Hello World** — Creating the first valid HTML page.
* **[ex01](discovery_piscine/cell01/ex01)**: **Title** — Structuring text with headings and centering content.
* **[ex02](discovery_piscine/cell01/ex02)**: **Image** — Embedding and sizing images from external sources.
* **[ex03](discovery_piscine/cell01/ex03)**: **Link** — Creating anchor tags and hyperlinks to external URLs (YouTube).
* **[ex04](discovery_piscine/cell01/ex04)**: **Basics** — Advanced layout combining backgrounds, headers, footers, and HTML entities.
* **[ex05](discovery_piscine/cell01/ex05)**: **Tab** — Structuring data using HTML tables.
* **[ex06](discovery_piscine/cell01/ex06)**: **Responsive** — A challenge to create a fluid table that resizes with the window without using JavaScript.

### 🎨 [cell02](cell02/) - CSS3 & Layouts
*Styling web pages and mastering modern layout systems.*

* **[ex00](discovery_piscine/cell02/ex00)**: **Responsive II** — Converting the HTML table to a responsive design using an external `.css` stylesheet.
* **[ex01](discovery_piscine/cell02/ex01)**: **SNCF Sandwich** — Building a complex dropdown menu ("sandwich" menu) using only CSS states (hover/active).
* **[ex02](discovery_piscine/cell02/ex02)**: **Parallax** — Implementing a parallax scrolling effect using absolute positioning and CSS blocks.
* **[ex03](discovery_piscine/cell02/ex03)**: **Card** — Designing a professional user profile card using Flexbox for alignment and spacing.

### ⚡ [cell03](cell03/) - JavaScript & jQuery
*Adding interactivity and logic to the web browser.*

* **[ex00](discovery_piscine/cell03/ex00)**: **Background** — A script that generates random colors and changes the page background on click (Vanilla JS).
* **[ex01](discovery_piscine/cell03/ex01)**: **Balloon** — An interactive game where a balloon grows on click and explodes if it gets too big, handling multiple event listeners.
* **[ex02](discovery_piscine/cell03/ex02)**: **Calculator** — A functional calculator built from scratch with input validation, alerts, and console logging.
* **[ex03](discovery_piscine/cell03/ex03)**: **To-Do** — A Task Manager application using `cookies` or `localStorage` to save tasks persistently between reloads.
* **[ex04](discovery_piscine/cell03/ex04)**: **If jQuery, I'm going too** — Refactoring the previous exercises using the **jQuery** library to understand the difference between Vanilla JS and libraries:
    * **[ex00bis](discovery_piscine/cell03/ex04/ex00bis)** (Background)
    * **[ex01bis](discovery_piscine/cell03/ex04/ex01bis)** (Balloon)
    * **[ex02bis](discovery_piscine/cell03/ex04/ex02bis)** (Calculator)
    * **[ex03bis](discovery_piscine/cell03/ex04/ex03bis)** (To-Do)

### 🚀 [rush](rush/) - The Final Project
*The capstone team project simulating a real-world client request.*

**Team Members:** `dcardoso` & `wdsilva`

The **Rush** challenges us to build a complete, cohesive mini-website consisting of a landing page and two professional resumes.

* **Goal:** Create a showcase site where a unified landing page links to two distinct, professional CVs.
* **Structure:**
    1.  **Landing Page (`index.html`):** A welcome hub allowing users to select a profile to view.
    2.  **Resumes (`cv_*.html`):** Two separate, fully detailed pages featuring:
        * Fixed Navigation Bar.
        * Profile Header (Photo, Name, Job Title).
        * Experience & Skills Section.
        * Portfolio & Contact Section.
* **Implementation:**
    * **Responsiveness:** Utilized **Bootstrap** to handle the grid system, ensuring compatibility across all devices.
    * **Design:** Adapted a professional template from BootstrapMade to meet the strict subject requirements while maintaining a unique visual identity for each team member.
    * **Interactivity:** Implemented custom JavaScript for interactive elements (e.g., typing effects, dynamic backgrounds).

---

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Core** | ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white) ![JS](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black) |
| **Libraries** | ![jQuery](https://img.shields.io/badge/-jQuery-0769AD?logo=jquery&logoColor=white) *(Cell 03)* |
| **Frameworks** | ![Bootstrap](https://img.shields.io/badge/-Bootstrap-563D7C?logo=bootstrap&logoColor=white) *(Rush)* |
| **Tools** | ![Git](https://img.shields.io/badge/-Git-F05032?logo=git&logoColor=white) ![Shell](https://img.shields.io/badge/-Shell-4EAA25?logo=gnu-bash&logoColor=white) |

---

## 📝 License & Credits

* **Curriculum:** [42 Porto](https://www.42network.org/campus/42-porto/)
* **Rush Template:** [BootstrapMade](https://bootstrapmade.com/)

> *This project is part of the 42 Student Network curriculum.*
