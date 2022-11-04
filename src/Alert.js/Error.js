import React from "react";

const Error = ({close}) => {
    return(
        <div className='container'>
            <div className="alert alert-danger alert-white rounded">
        <button>
            <h3>Error</h3> <strong>The server is currently down, Try again later.</strong>
        </button>
            </div>

        </div>
    )
}

export default Error