import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='bg-secondary text-black p-2'>
            <h2>Blog page</h2>
                <div className='border p-2'>
                    <h5 className='text-info'>Difference between SQL and NoSQL </h5>
                    <small className='text-white'>
                        <b>SQL: </b>sql is a domain-specific language used in programming and designed for managing data held in a relational database management system, or for stream processing in a relational data stream management system <br />
                        <b>NoSQL: </b>
                        NoSQL is an approach to database management that can accommodate a wide variety of data models, including key-value, document, columnar and graph formats. A NoSQL database generally means that it is non-relational, distributed, flexible and scalable.
                    </small>
                </div>
                <br />
                <div className='border p-2'>
                    <h5 className='text-info'>What is JWT, and how does it work? </h5>
                    <p className='text-white'>
                        JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.
                        Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. Resource server then verifies the authenticity of the token using the secret salt/ public key
                    </p>
                </div>
                <br />
                <div className='border p-2'>
                    <h5 className='text-info'>What is the difference between javascript and NodeJS? </h5>
                    <p className='text-white'>
                        JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language
                    </p>
                </div>
                <br />
                <div className='border p-2'>
                    <h5 className='text-info'>How does NodeJS handle multiple requests at the same time?? </h5>
                    <p className='text-white'>
                        NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Blog;