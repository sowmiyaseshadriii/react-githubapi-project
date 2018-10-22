import React from 'react';


const UserRepos=(props)=>(
    <div className="container">
        <div className="row">
            {props.userRepos.map((gituser) => {
                return (
                    <div className="col-sm-12 col-12" key={gituser.id}>                         
                             <div className="user_repos" >
                                <a href={gituser.html_url} target="_blank">
                                    <h5>{gituser.name}</h5>
                                </a>                         
                                <p className="desc">
                                    <b>Description:</b> {gituser.description}
                                </p>
                             </div>
                    </div>

                )
            })}
        </div>        
    </div>
);

export default UserRepos;