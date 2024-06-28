# BlurIt
https://blurit.onrender.com/

### Project Description

Full stack web app that allows the automatic censoring of faces for use in public works, non-profit circles, news outlets, and any other sector that requires privacy. This app was made with the PERN dev stack (PostgreSQL, Express.js, React.js, Node.js) and gives a variety of features that will only be further expanded upon in the future. Users must first register with the website using a valid email address and password. This password is ensured to be protected as it is encrypted with the bcrypt hashing library prior to insertion into the database. Once registered and logged in, users have the ability to insert image URLs into the facial detection box, where the app leverages the Clarafai API to both detect and blur all faces within the image. BlurIt also keeps track of how many images the user has blurred, maintaining this count throughout sessions. When the user is done, they can simply Sign Out and Sign In at a later time should they desire!

### Project Inspiration

This project was whole-heartedly influenced by my desire to become a better javascript developer while solving a real issue. My family is very close to a variety of higher-ups and directors in the non-profit circle. More specifically, I am close with many directors of foster care nonprofits in which the identity of the families and children is crucial. Despite this, it is still necessary for the non-profits to market themselves and display the excellent work they are doing. The easiest way to do this is pictures, however it gets incredibly difficult for them to consistently edit images with dozens of faces that cannot be displayed for privacy reasons. This issue spurned the idea for BlurIt, which gives these non-profits the opportunity to focus more effort on helping the community and less effort on editing the pictures that display the great work they accomplish every single day.
