
const AllGroupBox = ({name,discriptiion, member}) => {
    return (
        <div className="all-group-box-main">
            <div className="group-box-discription">
                <div className="group-box-heading-member">
                    <img src="" alt="dsfn" />
                    <div className="group-box-name">
                        <h2>{name}</h2>
                        <h6>{member}+ Members</h6>
                    </div>
                </div>
                <div className="group-box-detail">
                    <p>{discriptiion}</p>
                </div>
            </div>
            <div className="group-box-button">
                <button className="btn">Request o Join</button>
            </div>
        </div>
    )
}

export default AllGroupBox;