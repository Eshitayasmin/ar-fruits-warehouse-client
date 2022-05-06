import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            <div className='qna'>
                <h3 className='text-primary text-center mb-3'> Difference between javascript and nodejs</h3>
                <div className='answer'>
                <div>
                    <h3>Javascript</h3>
                    <ul>
                        <li>Javascript is a programming language that is used for writing scripts on the website.</li>
                        <li>Javascript can only be run in the browsers.</li>
                        <li>It is basically used on the client-side.</li>
                        <li>Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. </li>
                        <li>Some of the javascript frameworks are RamdaJS, TypedJS, etc.</li>
                    </ul>
                </div>
                <div>
                    <h3>Node JS</h3>
                    <ul>
                        <li>NodeJS is a Javascript runtime environment.</li>
                        <li>We can run Javascript outside the browser with the help of NodeJS.</li>
                        <li>It is mostly used on the server-side.</li>
                        <li>V8 is the Javascript engine inside of node.js that parses and runs Javascript. </li>
                        <li>Some of the Nodejs modules are Lodash, express etc.</li>
                    </ul>
                </div>
                </div>
            </div>

            <div className='qna'>
                <h3 className='text-primary text-center mb-3'> Differences between sql and nosql databases</h3>
                <div className='answer'>
                <div>
                    <h3>SQL</h3>
                    <ul>
                        <li>SQL databases are primarily called RDBMS or Relational Databases.</li>
                        <li> Language	Structured query language (SQL).</li>
                        <li>RDBMS database is the right option for solving ACID problems.</li>
                        <li>These databases are best suited for complex queries.</li>
                        <li>Vertically Scalable.</li>
                    </ul>
                </div>
                <div>
                    <h3>NoSQL</h3>
                    <ul>
                        <li>NoSQL databases are primarily called as Non-relational or distributed database.</li>
                        <li>No declarative query language.</li>
                        <li>NoSQL is a best used for solving data availability problems.</li>
                        <li>These databases are not so good for complex queries.</li>
                        <li>Horizontally scalable.</li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;