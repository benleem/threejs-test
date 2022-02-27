# Goggle Earth

Goggle Earth is an application that can be used to satisfy your curiosity about our great blue planet! Set a pin by entering a latitude and longitude in the pin tab or simply search for a place in the search tab. Once the pin has been placed by search or coordinates, info related to that place will show up in the info tab. To open the info tab simply click the info button.

The full site can be found here: site URL

images go here       and here and here etc

## About This Project

Technologies/Libraries used:
- React
- JSX
- JavaScript
- CSS
- ThreeJs
- Framer Motion
- Axios

The purpose of building Goggle Earth was to refine my front-end skills as well as to learn libraries such as ThreeJs and Framer Motion. Although it was originally supposed to be a play project for testing ThreeJs features, it quickly became much more. I got sucked into all the possibilities of ThreeJs and decided to make it an app with functionality reminiscent of Google Earth.

Although this easily became my favorite project to date I did come across challenges aplenty. For example, I had no experience with 3D development and had to scour docs, videos, and other projects to get a proper footing to start development.

One such challenge was converting longitude and latitude values to 3D coordinates so that I could place a pin on Earth. To solve this I had to think back on my geometry days. To put it shortly, you must convert the latitude and longitude from degrees to radians. After this, you convert from radians to cartesian coordinates so you can plot points on 3 circular planes. Each one of these points on the planes then becomes x,y,z points, thus translating from 2D to 3D.

Another challenge was trying to make the camera go to the pin's location. Originally I had the camera outside the Earth group, this made it so the camera would be in the original position of the pin but it wouldn't account for the rotation. To remedy this I placed the camera in a group with the earth and pin and then rotated the group as a whole.

The most challenging part of this project was to get the atmosphere shader to work as expected. To get the desired fading effect I had to look at many examples and papers on GLSL. After much research, I figured I must find where the camera is looking and change the gl_FragColor by an intensity determined by the distance from the center of the camera view.

## Getting Started

To get started you will need to clone this repository onto your machine (you will need **node** and **npm** installed to properly recreate this project).

After the project files have been installed on your machine, go to the project directory and run the command below. This will install the dependencies found in the package.json.

```bash
npm install
```

After running the above command and installing the dependencies you can run this command to start a development server on localhost:3000:

```bash
npm start
```

After this, you can now play around with this project and code on a local development server as you see fit.