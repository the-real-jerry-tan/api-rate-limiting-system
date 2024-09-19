# API Rate Limiting System with TypeScript and Node.js

## Project Description

This project demonstrates an API rate limiting system using Node.js and TypeScript. It protects API endpoints from abuse by limiting requests based on IP and user. Rate limits are stored using Redis for distributed systems, ensuring that limits are enforced across multiple instances.

## Features

- **Rate Limiting**: Protect API endpoints by limiting requests per user/IP.
- **Distributed Rate Limiting**: Use Redis to manage rate limits across distributed instances.
- **REST API**: Expose endpoints protected with rate-limiting mechanisms.
- **Dockerized**: The system is containerized for easy deployment and scaling.

## Setup Instructions

### Prerequisites
- **Docker**: To run the application in containers.
- **Node.js**: Version 14 or later.
- **Redis**: A running Redis instance for distributed rate limiting.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/the-real-jerry-tan/typescript-api-rate-limiting-system.git
   cd typescript-api-rate-limiting-system
   ```

2. Build and run the Docker container:
   ```bash
   cd docker
   docker build -t ts-api-rate-limiting .
   docker run -p 3000:3000 ts-api-rate-limiting
   ```

3. Ensure that a Redis instance is running and accessible for rate limiting.

4. The REST API will be available at [http://localhost:3000/api/resource](http://localhost:3000/api/resource).

## Future Enhancements

- **User-Specific Limits**: Implement rate limiting based on user authentication rather than just IP.
- **API Key Support**: Add support for API keys with different rate limits per key.
- **Advanced Analytics**: Track and analyze usage patterns and blocked requests.

## Author

This project is maintained by [Jerry Tan](https://github.com/the-real-jerry-tan).

## License

© 2024 Jerry Tan. All Rights Reserved. Unauthorized use or distribution is prohibited.
