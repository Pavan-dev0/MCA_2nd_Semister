# **1 Framework** 
- :- A tool for organizing the information / a platform for devloping the software applications.
- Includes the Rules, Guidelines, Libraries and tools
- provides the basic outline for the coders to follow 
- it makes the things easier
- Offers the reusable components

- Two types of frameworks
	- Frontend Frameworks:- Deals the external part of the application of usually what the user sees
	- Server Frameworks:- The rules of this framework allows you to create the simple pages, Landings and the forms of different types.

# 1.1 Structure of the Web Framework
- **Static and flexible components**
	- Static components are already defined by the framework where we are not able to use them 
	- They are also called as the Frozen Spots
	- Flexible components can be customised by us 
	- We can modify the behavior by overwriting methods
	- These are called as Hot-Spots

![[Pasted image 20260429194845.png]]

## Inversion of Control
- Web Framework follow the IOC Inversion of control which states that the Flow of the system is controlled by the framework itself(inverted) usually the older web architecture was controlled by humans but after introduction of the framework the control has been inverted.

# Structure of the web framework
- # **MVC**
- Model:- Acts as the data that it contains . Also it contains the rules and instructions
- View:- Displays the data provided by the model 
- Controller:- Acts as a interface Between the model and the view.

- **Software Design**
	- The software  That consists of several HTML Pages are known as the multi page Applications.(They are connected using the hyperlinks)
	- A single page application consists of only the html page divided by the panels or through the registration cards.
	- The entire Html including the JS everythin is loaded in the client once the computer is started which is known as the centric application.
	- Server Centric application is the application that remains on the seever side which is helpful to load the multi page apps 
	- The application control level web framework is divided into 2 classes 
	- Action Based web frameworks:- Controller serves as the central instance that accepts the client requests, validates them and triggers the suitable action. Here the user should write the logic for the each action. Example:- Django, Ruby on rails.
	- Component Based Web Frameworks:- Everything is built on the reusable components (UI Blocks). Instead of actions we build the components example:- React.

## Design Principles of the web framework:- 
- DRY :- Dont Repeat yourself aims to avoid redundancy in the context of software development.
- KISS:- Keep it short and simple One problem one solution.
- CoC:- Convention over Configuration:- The more configuration the more complex the operation will become. Provide the way to reduce the complexity in most of the operations.
- Convention provide way to reduce the complexity in most of the applicaton.