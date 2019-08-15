# Project Title

Video processor "The farmer"

## About

"The farmer" is a video processing tool that has been leading the bussiness for decades, it has a great support for multiple environments and formats working on multiple platforms. Videos are gathered in reels and batches that are processed, improved and encoded into different formats by the tool. All processes are managed from the tool using a desktop environment in a high-performant machine, they don't provide a web application nor APIs for using video processing services.

All the customers are now asking to fetch data from "The farmer" to share it via web-pages or custom reports, but "The farmer" developers are limited by the technology for development and time constraints. What they do have is a replica database (MySQL) where they write all the videos metadata and related information, but such database is read-only and accessible from a single host.

What approach can "The farmer" company provide for their customers to enable data-sharing with the mentioned constraints?

### Solution

In this scenario where there is only query access to the database, and there are many clients who require reports, we propose the implementation of the Adapter Mediator Pattern.
Where clients make their request to an API client, this API puts each request in a queue and then sends each request from the queue to the Adapter. This Adapter is the layer in charge of interpreting the request and making the request to the MySQL database. 
This will allow scalability, because for each new requirement the necessary Adapters can be created. 
Helping in the communication and integration between the Farmer System and its clients, without having to modify or alter the original System.


### Installation

* Install dependencies: `npm install`. This will install express and node-mysql.

* Start the node server: `node app` (if you don't have nodejs installed, go to: http://nodejs.org/)

* Now, open your browser and go to `http://localhost:3000`. You should be able to see a nested result object.

## Running the tests

$ npm run test

## Built With

* [NodeJs](http://nodejs.org/) - The web framework used
* [Nest](https://github.com/nestjs/nest) - The web framework used
* [MySql](https://www.mysql.com/) - DataBase used

## C4 Model and Pattern adapter

Please read for design implementation.

* [C4 Model](https://drive.google.com/file/d/1QdgQowRhUkyFh9Vn96wG7-F_Q-BZTrSt/view)
* [Messaging - pattern adapter/mediator](https://drive.google.com/file/d/1QdgQowRhUkyFh9Vn96wG7-F_Q-BZTrSt/view)

## Authors

* **David Batista** - *Initial work* (https://github.com/dbatistat)
* **Ruth Vargas** - *Initial work* (https://github.com/vargasmruth)
* **Brenda Lopez** - *Initial work* (https://github.com/blopezv)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

