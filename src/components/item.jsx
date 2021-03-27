

function Item({repo}) {
    return (
        <div className="card mb-3">
            <div className="row">
                <div className="col-md-2">
                    <a href={repo.owner.html_url}>
                        <img src={repo.owner.avatar_url} alt="" className="img-fluid"/>
                    </a>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">
                            <a href={repo.html_url}>{repo.name}</a>
                        </h5>
                        <p className="card-text">{repo.description}</p>
                        <p className="card-text"> <span className="border border-dark p-1">Stars: {repo.stargazers_count}</span>
                            <span className="border border-dark p-1 ml-2">Issues: {repo.open_issues_count}</span>
                        </p>
                        <p className="card-text"><small className="text-muted">created: {repo.created_at}
                        by 
                        <a href={repo.owner.html_url}> {repo.owner.login}</a>
                        </small></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;
