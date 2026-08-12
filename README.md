# B10---Web-Application
Final Project Submission of Steven Wielis (597042)

# Scenario Chosen: Campus Event & Workshop Hub (1)

A simple front-end web application project for managing university events and workshops.

The application allows students to browse and register for university events, while organizers can create and manage their own events and view registered students.

This project is built using **HTML5, CSS3, JavaScript, and jQuery**. Application data is stored locally.

How to run: open the file 'index.html' on your personal browser.

---

## 1. Project Overview

The Campus Event & Workshop Hub is designed for a university environment where we can publish events and workshops for students.

There are three user roles:

* **Guest** — Can browse and search events but cannot register.
* **Student** — Can browse events, register for events, and manage their own registrations.
* **Organizer / Admin** — Can create, edit, and delete their own events and view registered students.

---

## 2. Technologies Used

The project uses:

* HTML5
* CSS3
* JavaScript
* jQuery

---

## 3. Main Features

### Event Browsing

Users can browse our university events and workshops.

Each event contains information such as:

* Event title
* Description
* Date
* Time
* Location
* Category
* Department
* Organizer


### Event Filtering

Users can filter events by:

* Date
* Category
* Department


### Event Details

Users can open an individual event and view its full information.

### Student Registration

Students can register for an event using a registration form.

The form validates the user's information before the registration is saved.

### My Registrations

Students can view their registered events.

Students can:

* View their registrations
* Edit their registration details
* Cancel a registration

### Organizer Dashboard

Organizers have access to a dashboard where they can:

* Create events
* View their events
* Edit their events
* Delete their events
* View students registered for their events


## 4. User Roles & Permissions

### Guest

A guest can:

* View the event list
* Search events
* Filter events
* View event details

A guest cannot:

* Register for an event
* Create events
* Edit events
* Delete events
* Manage registrations

### Student

A student can:

* View events
* Search events
* Filter events
* View event details
* Register for events
* View their registrations
* Edit their registration details
* Cancel their registrations

A student cannot:

* Create events
* Edit events
* Delete events
* Manage registrations belonging to other students

### Organizer / Admin

An organizer can:

* View events
* Search events
* Filter events
* View event details
* Create events
* Edit their own events
* Delete their own events
* View students registered for their events
* Remove registrations from their events

---

