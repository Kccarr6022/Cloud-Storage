# Cloud-Storage
AWS website that hosts cloud footage to record lightning strikes. The following project utilizes AWS free tier for an EC2 instance connected to an S3 bucket as well as an AWS RDS SQL database. The code below uses the Flask framework to combine HTML/CSS design with machine learning in Python to create a weather tracking application on the cloud.

1.1 Purpose
The goal of the project is to provide a live stream of the weather in the Fort Myers area by utilizing a camera to track the weather. We have a site to display information such as the lightning strikes that were recorded along with the classification for each lightning strike. The user shall be able to go on the website to view the status of the weather as well as an archive of different classified lightning strikes.

1.2 Document Conventions
The typographical methodologies followed within the document. For e.g. any abbreviations, typographical stylization of content or change of fonts and its significance.

1.3 Intended Audience
The intended audience for this Software Requirements Specification involves the Software Team involved in the project. The software team consists of Gilbert Green and Kaden Carr as well as the professor overseeing the project and future software.

1.4 Scope
The benefits of our project is to analyze the lightning strikes in the area along with what separate lightning strikes provided by their classification. In this site you will be able to view footage of all available lightning strikes in the area in to separate classified strike footage.

2.1 Product Perspective  

A way of recording data of the weather into areas regarding the weather strikes. Allowing people to see the current weather as well as download various lightning strike data.

2.2 Product Features
Product features include the Home Page, the Live Stream page, and About Us page, as well as a Login system. The Login system provides EDU Users access to content for free, COM users will be redirected to a payment page whereas those users will have to pay $0.50 per download on the site and a monthly subscription of $2.00 to access cameras. 

2.3 User Class Characteristics
The classification involves the Admin and the Authorized User. The user class can be .COM or .EDU after authorization. EDU is a free access User class while .COM requires payment to be an authorized user. The default user class has the options to “Signup”, “View Data”. “Live”, “Download Data”, “.Com Download Payment”(each download from .COM requires $0.50 payment), “View History”, “Download History”, “User Login”, and “Query Data”.

![image](https://user-images.githubusercontent.com/71856219/203687431-162daad1-8290-4fc8-994d-1f9954d1ed23.png)

2.4 Operating Environment
The software is designed to operate in a Linux Ubuntu Amazon EC2 environment. The dependencies required for our Software are involved in the pip virtual environment. These dependencies include “flask”, “flask_sqlalchemy”, and “flask_marshmallow” with Python 3.10.4 installed. 
![image](https://user-images.githubusercontent.com/71856219/203687730-5a4901bf-7335-41a5-9b3d-eb3dbad2ad52.png)


2.5 Constraints
The constraints of the project involve access to AWS, the on-premise camera server staying online, as well as S3 to remain in operations.

2.6 Assumptions and Dependencies
The assumptions involve that the system has access to Python version 3.10.4, Package Installer for Python at version 22, and port 8080 open to all HTTP and HTTPS access as well as a valid IAM account for the EC2 with S3 access.

3.1 Functional Requirements
- The user shall be able to login
- The user shall be able to download classified lightning strike footage when logged in
- The user shall be able to view live stream data when logged in
- The user shall be able to view their history(view history and downloads) when logged in

4.1 User Interfaces
Our user interface consists of 5 pages the user can interact with. The first page the user must interact with is the “Login” page. The “Login” page consists of username and password input boxes, a “Remember me” checkbox, and a “Forgot Password?” and “Login” button. If the user had a .COM email the page will be directed to a “Payment” page to access the system, which must be filled out to gain access to the site. If the user has a .EDU email address the user will then gain access to the site. Additionally, the pages that will be accessed after Login involve Archive and Live page. The “Archive” Page will have three identification checkboxes as well as a table of clips utilizing the camera from our object detection model, and the user can download clips from the table on this page, with these checkbox inputs to query through the database of recorded videos the user can download. The “History and Downloads” page will contain information regarding, data view history as well as the downloads by the given user. The final page is the “Live” page which has direct access to our camera server. 

4.2 Hardware Interfaces
The hardware interfaces involved with our website involves the camera server which is hosted on premise. The camera will be streamed to our server through an Iframe html tag. The website will be hosted on an Amazon virtual machine and will interact with data storage which will be an s3 which contains URI addresses and IAM controls allowing our systems to interact.

4.3 Communications Interfaces
Communication interfaces involved with the system involved streamlining our camera server from on premise to an inline frame tag, hosting our server through http and https requests at our ip address with the port 8080 open. Connection through URI to S3 mp4 objects.

4.4 Software Interfaces
The frontend component of the software will involve a React.js implementation to connect with the backend components. The backend will run through a database management system using SQL Alchemy connected to our server framework of Flask and Python for the backend code.

5.1 Performance Requirements
5.1 Security Requirements
-  Our web service shall ensure sitewide SSL.
-  Input forms shall validate input
-  Port 8080 shall be open to only HTTP/HTTPS traffic
- TBD

5.3 

Detailing on the additional qualities that need to be incorporated within the software like maintainability, adaptability, flexibility, usability, reliability, portability etc.
