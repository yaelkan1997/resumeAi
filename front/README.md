# Project Overview

This project is designed to streamline and personalize the job application process for junior developers. It allows users to manage all of their job applications in one place, track application statuses, and dynamically generate tailored resumes. The system is built with future integration in mind—leveraging AI to analyze job descriptions and optimize resume content accordingly.

The platform features an intuitive interface for submitting and tracking job applications, filtering by status, and previewing dynamically updated resumes. It aims to save time, reduce manual work, and increase the chances of landing interviews by making each resume more relevant to the specific role.

The project is implemented using React for the frontend and Node.js for the backend, with SQLite currently used as the database solution.

# PAGE 1
The main page of the project displays all the jobs the user has applied to. The status of each job can be updated, and the changes are dynamically reflected in the data.
Users can navigate between pages to view the job data, and there's also an option to filter by status.
Deletion is not allowed, as the idea is that in the future, the integration with OpenAI will utilize the data from jobs that haven't received a response.

![Screenshot 2025-04-17 121002](https://github.com/user-attachments/assets/fe1c640c-b13c-4300-b002-5ca60ab4904f)

# PAGE 2
This page is dedicated to submitting a new job application. On the left side, there is a visual indicator showing that the user is currently on the second step of the process.

![Screenshot 2025-04-17 121042](https://github.com/user-attachments/assets/5e4729ce-5abb-4b8e-91b3-af71cb1d4ecb)

# PAGE 3
This page allows for the dynamic creation of the resume. As the user fills in the form on the left side, the corresponding changes are reflected in real time on the right side.
The purpose of this page is to provide a flexible structure that will allow easy updates in the future, once the integration with the API is implemented.
For now, it serves as a visual representation, but it is designed to support more accurate and personalized adjustments once the model is connected. Currently, it provides the most relevant layout for building the resume.

![Screenshot 2025-04-17 121107](https://github.com/user-attachments/assets/6092546b-6782-4abe-b30a-e0a71b3cf06f)
