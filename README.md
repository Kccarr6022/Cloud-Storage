# Cloud-Storage 

#--Demonstration Video (Release 1.0) --



https://user-images.githubusercontent.com/71856219/206829770-52fba03c-bf2c-44ae-bf82-1668970c4dff.mp4



Cloud Storage is a system that enables users to create an account, login, view and download public videos and the user’s private videos, and upload videos publicly or privately. For research videos, video metadata is also stored and displayed.  Our goals was to maintain the integrity of video quality, to store important metadata, and to give access to a Live Broadcast Camera stream of local weather conditions, so as to build an understanding of their effects. An example of public data will contain lightning videos with reduced FPS, to gain a better understanding of these high speed events. To make all this possible we will be using several PaaS’s provided by AWS, an python framework, additional cloud services and libraries. The website has been built using Amazon Web Services(AWS). We utilized AWS free tier for an EC2 instance, that connects to an S3 bucket and an AWS RDS SQL database. The code below uses the Flask framework to combine React, HTML, and CSS designed in Python to create a weather archive application on that is hosted on the cloud.

**1.1 Purpose**  <br />
With ideal meteorological conditions for thunderstorms during the summer season in SWFL, there is an opportunity to research and monitor meteorological and atmospheric conditions. In accumulating optical data of daily meteorological conditions, our group’s goal was to find a way to store and distribute this data using modern PaaS’s to make this possible. By creating this cloud storage platform, we hope to enable researchers to store certain data privately before publications, and share data with the public, producing an educational resource for those curious about local meteorological conditions, and in the future, to additional research projects.

**1.2 Document Conventions**  <br />
The typographical methodologies followed within the document. For e.g. any abbreviations, typographical stylization of content or change of fonts and its significance.

**1.3 Intended Audience**  <br />
The intended audience for this Software Requirements Specification involves the Software Team involved in the project. The software team consists of Gilbert Green and Kaden Carr as well as the professor overseeing the project and future software.

**1.4 Scope**  <br />
The benefits of our project is to analyze the lightning strikes in the area along with what separate lightning strikes provided by their classification. In this site you will be able to view footage of all available lightning strikes in the area in to separate classified strike footage.

**2.1 Product Perspective**   <br />
A way of recording data of the weather into areas regarding the weather strikes. Allowing people to see the current weather as well as download various lightning strike data.

**2.2 Product Features**  <br />
Product features include the Home Page, the Live Stream page, and About Us page, as well as a Login system. The Login system provides EDU Users access to content for free, COM users will be redirected to a payment page whereas those users will have to pay $0.50 per download on the site and a monthly subscription of $2.00 to access cameras. 

**2.3 User Class Characteristics**  <br />
The classification involves the Admin and the Authorized User. The user class can be .COM or .EDU after authorization. EDU is a free access User class while .COM requires payment to be an authorized user. The default user class has the options to “Signup”, “View Data”. “Live”, “Download Data”, “.Com Download Payment”(each download from .COM requires $0.50 payment), “View History”, “Download History”, “User Login”, and “Query Data”.

![image](https://user-images.githubusercontent.com/71856219/203687431-162daad1-8290-4fc8-994d-1f9954d1ed23.png)

**2.4 Operating Environment**  <br />
The software is designed to operate in a Linux Ubuntu Amazon EC2 environment. The dependencies required for our Software are involved in the pip virtual environment. These dependencies include “flask”, “flask_sqlalchemy”, and “flask_marshmallow” with Python 3.10.4 installed. 
![image](https://user-images.githubusercontent.com/71856219/203687730-5a4901bf-7335-41a5-9b3d-eb3dbad2ad52.png)


**2.5 Constraints**  <br />
The constraints of the project involve access to AWS, the on-premise camera server staying online, as well as S3 to remain in operations.

**2.6 Assumptions and Dependencies**  <br />
The assumptions involve that the system has access to Python version 3.10.4, Package Installer for Python at version 22, and port 8080 open to all HTTP and HTTPS access as well as a valid IAM account for the EC2 with S3 access. <br />
The following is a list of dependencies used to develop this project: <br />
- Teams for Communication
- Git/Github for Version Control
- Flask Framework
- React for UI frontend
- User Login, Authorization/Authentication 
- AWS Lambda, API Gateway, Serverless/CloudFront
- S3 PaaS for video storage, CloudFront CDN
- RDS PaaS for metadata storage, Postgres SQL for Database 
- Marshall Camera Livestream RTMP via MediaLive and MediaPackage


**3.1 Functional Requirements**  <br />
- The user shall be able to login
- The user shall be able to download classified lightning strike footage when logged in
- The user shall be able to view live stream data when logged in
- The user shall be able to view their history(view history and downloads) when logged in

**4.1 User Interfaces**  <br />
Our user interface consists of 5 pages the user can interact with. The first page the user must interact with is the “Login” page. The “Login” page consists of username and password input boxes, a “Remember me” checkbox, and a “Forgot Password?” and “Login” button. If the user had a .COM email the page will be directed to a “Payment” page to access the system, which must be filled out to gain access to the site. If the user has a .EDU email address the user will then gain access to the site. Additionally, the pages that will be accessed after Login involve Archive and Live page. The “Archive” Page will have three identification checkboxes as well as a table of clips utilizing the camera from our object detection model, and the user can download clips from the table on this page, with these checkbox inputs to query through the database of recorded videos the user can download. The “History and Downloads” page will contain information regarding, data view history as well as the downloads by the given user. The final page is the “Live” page which has direct access to our camera server. 

**4.2 Hardware Interfaces**  <br />
The hardware interfaces involved with our website involves the camera server which is hosted on premise. The camera will be streamed to our server through an Iframe html tag. The website will be hosted on an Amazon virtual machine and will interact with data storage which will be an s3 which contains URI addresses and IAM controls allowing our systems to interact.

**4.3 Communications Interfaces**  <br />
Communication interfaces involved with the system involved streamlining our camera server from on premise to an inline frame tag, hosting our server through http and https requests at our ip address with the port 8080 open. Connection through URI to S3 mp4 objects.

**4.4 Software Interfaces**  <br />
The frontend component of the software will involve a React.js implementation to connect with the backend components. The backend will run through a database management system using SQL Alchemy connected to our server framework of Flask and Python for the backend code.

**5.1 Performance Requirements**  <br />
**5.2 Security Requirements**
-  Our web service shall ensure sitewide SSL.
-  Input forms shall validate input
-  Port 8080 shall be open to only HTTP/HTTPS traffic
- TBD

**5.3**  <br />
Detailing on the additional qualities that need to be incorporated within the software like maintainability, adaptability, flexibility, usability, reliability, portability etc.
