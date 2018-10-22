import React from 'react';


const Form = (props) => (
    <div className="container form-layout">
        <form onSubmit={props.getGituser}>
        <div className="form-group col-12 col-sm-12">
          <input type="text" name="gitusername" className="form-control" placeholder="Enter GitHub Username" />
        </div>
            <button className="btn btn-default">Search</button>
        </form>
    </div>
);


export default Form;