
---
# 1. Framework

## Definition
A framework can be a tool for organizing information, or a platform for developing software applications.

In software engineering, a framework is a collection of reusable software components that help developers build apps, websites, and digital systems.

## Key Feature
- Offering conventions for a standardized structure.

## Explanation
Frameworks can include predefined rules, guidelines, libraries, and tools that abstract common functionalities and simplify the development process.

## Flexibility
Developers can modify the framework by adding or replacing features to suit their specific project needs

---

# 2. Benefits of Using a Framework

- Saving developers time and energy
- Providing a basic outline for coders to follow
- Allowing coders to focus on more specific tasks
- Creating clean and adaptable code

---

## Types of Software Frameworks
![[Pasted image 20260329174732.png]]

---

# 3. Types of Frameworks

## Frontend Frameworks
Frontend frameworks (client-side web frameworks) deal mostly with the external part of a web application. Briefly, it’s what a user sees when they open the app. The inside stuff is the work of the backend.

## Server-side Frameworks
Server-side frameworks. The rules and architecture of these frameworks allows you to create simple pages, landings and forms of different types

---

# 4. Framework Characteristics

Frameworks offer reusable components and establish conventions that developers can build upon for specific application requirements.

- Their primary goal is to provide a standardized structure and promote code reuse to enhance productivity and maintainability.

---

# 5. Software Architecture

Software architecture defines the overall structure and organization of a software system or an application.

It encompasses the high-level design decisions, principles, and patterns that guide the development and deployment of an application.

---

# 6. Components of Framework

## Static and Flexible Components

The central basic components of a software framework constitute cooperating classes with associated methods. These are code blocks that describe the properties of software objects and their behavior.

- Some of these components are static and therefore invariable.
- Others can be adapted by the user e.g. by overwriting methods.

This allows the program structure to be adapted to a specific task.

- The term 'hot spots' was established to refer to a framework’s flexible components.
- The static components are called 'frozen spots'.

---

## Structure of the Web Framework
![[Pasted image 20260329175831.png|637]]

---

# 7. Inversion of Control (IoC)

Web frameworks generally follow the concept of inversion of control (IoC).

This is an abstract principle describing an aspect of some software architecture designs in which the flow of control of systems is inverted, unlike the case with procedural programming.

---

# 8. MVC Architecture

## Separation of Data Model, Presentation, and Program Control

The web application frameworks are based on an architectural pattern called the Model View Controller (MVC).

This is separation of application logic and presentation layer and divides software into three areas:
- model (data model)
- view (presentation)
- controller (program control)

---

### Data Model
The model is the section of a framework that contains the data to be displayed as well as the application logic and rules.

---

### Presentation (View)
The basic task of view is to display the data provided by the model.

- The view makes inquiries on the state of the model via through different methods and is informed of any changes.
- The view to receive user input (keyboard strokes, mouse clicks) and then forward them to the controller.

---

### Program Control (Controller)
The controller acts as an interface between the model and the view.

- It manages one or several views, evaluates user input and reacts accordingly e.g. by passing data to the model or by making changes to the view

---

# 9. Classification of Web Frameworks

## Overview

- The market for web applications is very diverse.
- Apps that are available to users via the browser don’t just differ in size and appearance and design.
- Web frameworks use different technologies and follow different approaches in software design.

### Types of Approaches
- single and multi-page approaches
- server-centric and client-centric approaches
- action-based or component-based

---

## 9.1 Single and Multi-page Approaches

- A multi-page applications consist of several HTML pages connected using hyperlinks.
- A single-page application consists only of an HTML page divided by panels, tabs, or registration cards.
- The URL of a single-page application does not change within the scope of the navigation.

---

## 9.2 Server Centric and Client Centric Frameworks

### Client Centric
- Entire UI and logic loaded on client
- E.g.: Angular JS, EmberJS

### Server Centric
- Logic remains on server and UI is generated there
- Used in multi-page apps
- E.g.: Django, Zend, Ruby on Rails

---

## 9.3 Action-based vs Component-based Frameworks

### Action-based
- Controller handles requests and triggers actions
- Requires creation of software objects for each action
- E.g.: Django, Ruby on Rails, Symfony, Spring MVC, CodeIgniter

### Component-based
- UI treated as collection of components
- Linked with server-side objects
- Event-driven interaction
- E.g.: Lift, Apache Tapestry, JavaServer Faces, Apache Wicket

---

# 10. Basic Design Principles

- Don’t Repeat Yourself (DRY)
- aims to avoid redundancy in the context of software development.

- Keep It Short and Simple (KISS)

- One problem, One solution (basic idea of the design principle)

- Convention over Configuration (CoC)

- The more configuration, the more complex the operation will become.

- Conventions (agreement) provide a way to reduce complexity in most of the operations

---

# 11. Advantages of Web Frameworks

- Web frameworks are used to reduce time and cost of software development since codes are basically re-used.

- Users and developers converse in forums dedicated to the project with some of these being moderated by support teams.

- Well-known programming languages uses frameworks such as:
  - PHP (e.g. Zend, Symfony, CakePHP, and CodeIgniter)
  - Java (e.g. JavaServer Faces or Apache Wicket)
  - Python (e.g Django)
  - Ruby in web development done on Rails web framework
  - Client centric web frameworks typically rely on the JavaScript scripting language

# **Overview of the Internet**
---

# 1. Index

- Definition of Internet
- History of Internet (ARPANET)
- Evolution of the World Wide Web
- Internet vs WWW
- Intranet & Extranet
- Internet Architecture
- Internet Protocols
- Web Browsers & Search Engines
- Web Technologies
- Internet Services
- Internet Security
- Internet Governance & Standards

---

# 2. Introduction of Internet

- The Internet is a global network of interconnected computers.
- It connects millions of private, public, academic, and government networks.
- Uses TCP/IP protocol suite for communication.
- Enables data sharing, communication, and online services.
- Works on packet-switching technology.
- It is a network of networks

## Definition

The Internet is a worldwide system of interconnected computer networks that communicate using TCP/IP protocols.

---

# 3. History of Internet
## 3.1 A Brief Journey of the Internet

### Origins
- In 1960s the US Department Of Defense (DoD) interested in developing large scale computer network.
- The purpose of network were communication, program sharing, and remote computer access for researchers working on defense related contracts.
- One fundamental requirement was that network should be robust (sturdy) enough so that network node should not lost due to sabotage, war etc.
- The DoD’s introduced first such network named (ARPA) Advance Research Project Agency - 19686
---

## 3.2 Advance Research Project Agency (ARPANET)
### Origins of ARPAnet
- ARPAnet - late 1960s and early 1970s
- Network reliability
- Used for ARPA-funded research organizations
- ARPAnet was simple text based communication through email.
- US Deference developed (DARPA-1972)
---
### Problem Scenario
- ARPA net was available only to laboratories and universities that conducted ARPA-funded research but it was not connected with educational institutions.
- As a result various other network was developed like BITNET and CSNET
---
# 4. Evolution Towards Internet

## BITNET and CSNET

- BITNET (Because It’s Time Network) in New York
- CSNET (Computer Science Network) – Delware university etc.
- BITnet, CSnet developed in late 1970s & early 1980s
- Rest of the world don’t have access to ARPANET so other researcher invented BITNET and CSNET
- Used for email and file transfer for other institutions
---
## NSFNET (1986)

- NSFnet - 1986 (National Science Foundation)
- Originally for non-DOD funded places
- Initially connected five universities supercomputers
- By 1990, it had replaced ARPAnet for non-military uses
- Soon became the network for all (by the early 1990s)
---
## Final Transition

- NSFnet eventually became known as the Internet
---
# 1. Intranet & Extranet

## Extranet

- Extension of intranet.
- Provides controlled access to external users.
- Used for business partners, suppliers.
- Secured using authentication methods.
---
# 2. Internet Architecture

- Based on Client-Server model.
- Uses layered architecture (TCP/IP model)
## Layers
- Application Layer
- Transport Layer
- Internet Layer
- Network Access Layer
---
## Key Points
- ISPs provide connectivity.
- Data is transmitted in packets.
- Routing handled by routers.
---
## Basic Flow

User → ISP → Internet Backbone → Server → Response back to User

---
# 3. Internet Protocols used by Web

- TCP/IP Model
- IP Addressing (IPv4, IPv6)
- HTTP & HTTPS
- FTP
- SMTP, POP3, IMAP
- DNS (Domain Name System)
---

# 4. TCP/IP Model

- TCP/IP stands for Transmission Control Protocol / Internet Protocol.
- It is the standard communication model used on the Internet.
- TCP/IP is a four-layer communication model used for Internet data transmission.
- Developed for ARPANET.

## Application Layer

Protocols used by Web Browsers:
- HTTP
- FTP
- SMTP
- DNS
---

# 5. IP Addressing (IPv4)

- Unique logical address assigned to each device.
- Used to identify sender & receiver.

## IPv4

- IPv4 is a 32-bit address

- Format: 192.168.1.1
- Divided into 4 octets
- Total addresses ≈ 4.3 billion

---

# 6. HTTP & HTTPS

## HTTP

- Stands for HyperText Transfer Protocol
- Application layer protocol
- Stateless protocol
- Uses Port 80
- Transfers web pages
---

## HTTPS

- Secure version of HTTP
- Uses SSL/TLS encryption
- Port 443

## Ensures:

- Confidentiality
- Integrity
- Authentication
---

## Summary

HTTP is a protocol used for transferring web pages, while HTTPS is its secure encrypted version.

# **HTTP Communication and Request Methods**

![[Pasted image 20260329181414.png]]
![[Pasted image 20260329181435.png|445]]

![[Pasted image 20260329181624.png]]

---
## FTP (File Transfer Protocol)
- Used to transfer files between client and server.
- Application layer protocol
### Features
- Uses Port 21
- Supports upload & download
- Requires authentication

---
## SMTP, POP3, IMAP

### SMTP (Simple Mail Transfer Protocol)
- Used to send emails
- Port 25 / 587
- Works between mail servers

---
### POP3 (Post Office Protocol v3)
- Used to receive emails
- Downloads emails to local device
- Port 110
- Emails removed from server after download

---
### IMAP (Internet Message Access Protocol)
- Used to receive emails
- Keeps emails on server
- Port 143
- Supports synchronization across devices

---
### Note
POP3 Downloads mail in a single device but IMAP Syncs mail in multiple devices

---
## DNS (Domain Name System)

- DNS translates domain names into IP addresses.

### Example

- google.com → 142.250.xxx.xxx

---
### DNS Components

- DNS Resolver
- Root Server
- TLD Server
- Authoritative Server
---

## Domain Name Conversion

### Steps

1. User enters domain name
2. Query sent to DNS resolver
3. Resolver contacts root server
4. Finds correct IP
5. Browser connects to server

# Web Application Frameworks - I

---

## Web Browsers & Search Engines
### Popular Browsers
- Google Chrome
- Mozilla Firefox
- Opera etc.

---
### Search Engines
- Google
- Bing
- Baidu

---

### Topics Covered
- URL
- Cookies & Cache

---

## URL
- Uniform Resource Locator (URL)
- Locate resources on the internet

### General form
- scheme://domain/path

---

## Cookies & Cache
- Cache and cookies are stored browser data designed to improve web performance.
### Cache
- Cache stores static website files (images, scripts) to make pages load faster upon return.
### Cookies
- Cookies are small files storing user-specific data, such as login sessions, preferences, and tracking information.
### Note
- Clearing them resolves loading issues but may log you out of sites.

---
## Web Technologies for basic Internet Communication
- HTML (HyperText Markup Language)
- CSS (Cascading Style Sheets)
- JavaScript
### JavaScript
- Interactive client-side scripting language
- PHP, Node.js, Python
### Server-Side
- Server-Side Scripting for accessing database.

---
## Static vs Dynamic Websites
### Static Website
- Fixed content.
- Built using HTML & CSS.
- No database.
- Same content for all users.
- Easy to develop.
### Examples
- Personal portfolios
- Marketing landing pages
- Company brochure site
- Personal blogs

---
### Dynamic Website
- Content changes dynamically.
- Uses server-side scripting.
- Connected to database.
- Personalized content.
### Examples
- E-commerce
- social media

---
## Internet Services
- Email
- WWW
- VoIP (Voice over Internet Protocol)
- Cloud Computing
- Social Networking
- E-Commerce

---
## Internet Security
### Cyber Threats
Potential malicious activities that aim to damage, steal, or disrupt digital systems and data.

---
### Malware
Malicious software designed to harm, infect, or gain unauthorized access to a computer system.

---
### Phishing
A cyber attack that tricks users into revealing sensitive information through fake emails or websites.

---

### Firewalls
Security systems that monitor and control incoming and outgoing network traffic based on predefined rules.

---

### SSL/TLS
Encryption protocols that secure data transmission between a client and a server over the Internet.

---

### Digital Certificates
Electronic documents that verify the identity of a website or entity using cryptographic keys.

---

### VPN (Virtual Private Network)
A secure network connection that encrypts internet traffic and hides a user’s IP address.****

---

## Internet Governance & Standards
### IETF (Internet Engineering Task Force)
- An international organization that develops and promotes Internet standards, especially TCP/IP protocols

---
### ICANN (Internet Corporation for Assigned Names and Numbers)
- A global organization responsible for managing domain names, IP address allocation, and the DNS system.

---
### W3C (World Wide Web Consortium)
- An international body that develops standards and guidelines for the World Wide Web, including HTML and CSS.

---
### Internet Policies
- Rules and regulations that govern the use, security, and management of Internet resources and services.