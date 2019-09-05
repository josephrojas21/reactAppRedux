import React from 'react'

function ProjectDetails(props) {
    const id = props.match.params.id    
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum velit, rerum blanditiis ad fugit cupiditate natus! Odio, debitis ab placeat voluptate sint, quam quaerat itaque tenetur sapiente facere architecto a.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by joseph enersinc</div>
                    <div>2nd september, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
