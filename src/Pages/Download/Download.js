import React from 'react';
// import './Download.css'
const Download = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 downloaded-section bg-slate-600 mt-5 text-white p-10 text-center'>
            <div>
                <h2 className="text-4xl">Download The APP</h2>
            </div>
            <div>
                <button className="btn btn-outline btn-accent">Download</button>
            </div>
        </div>
    );
};

export default Download;