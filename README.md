
# marcenaria-portfolio-custom-woodworking-website-react

This project is a website for a custom woodworking business based in Brazil. The website was built using React to meet their needs: a portfolio showcasing their work, including a photo gallery and contact information.

# Website Structure

The website includes only the essential sections: Home, About, Gallery, and Contact. These were chosen based on the company’s requirements and workflow. Below is a breakdown of each section:

* Home: Features an image carousel.
* About: Contains a brief description of the company along with a photo.
* Gallery:  Showcases a collection of eight images.
* Contact: Provides company details such as address, phone number, email, a map, and a contact form for customer inquiries.

The footer includes social media icons, and a WhatsApp button is fixed on the lower right corner, allowing direct messaging with the company.

# Tech Stack

This website was developed using React with Vite as the build tool. Vite was chosen for its fast build times and efficient development experience, offering better performance compared to the traditional Create React App setup.

Several libraries were used to enhance functionality, particularly for the photo portfolio:

* Swiper – for the image carousel.

*  LightGallery – for the photo gallery.

For contact information and social media integration:

* Icons: The react-icons/fa library was used to include Instagram, Facebook, and WhatsApp buttons.

* Forms: Contact forms were implemented using the emailjs library, allowing customer inquiries to be sent directly to the company's email.

# Customization for the Client

Since the client may need to update content periodically, a JSON file was created to store all customizable text fields (key-value pairs). This allows them to edit information without modifying the website’s code.

For example, the JSON file includes:

{
  "address": "XXX",
  "cellphone": "1111111"
}

The client simply updates the values as needed.


# Cloning the Project

To clone this website to your local machine, run the following commands:

1. git clone https://github.com/Arthurchagas01/portfolio-custom-woodworking-website-react
2. cd marcenaria-portfolio-custom-woodworking-website-react
3. npm install
4. npm start

## Screenshots

[Excalidraw](https://excalidraw.com/#json=bAvCAe_GshnL6lHG9_H9i,7F49Woy9_KpQzB0Xs07Eog)
[Figma](https://www.figma.com/design/x34o4XOERUgSHbfmQsCudi/MSM-Marcenaria?t=69xUuSFnckqI2b1r-1)