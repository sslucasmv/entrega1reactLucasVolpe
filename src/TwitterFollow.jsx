

export function TwitterFollow( {formatUsername,userName, name, isFollowing }) {
    console.log(isFollowing)

    return (
         
            <article className="twitter-card">
                <header>
                    <img src={`https://unavatar.io/x/${userName}`}/>
                    <div className="info">
                        <strong>{name}</strong>
                    <span>{formatUsername(userName)}</span>
                    </div>
                </header>
                <aside className="btn">
                    <button className="twitter-follow-btn">Seguir</button>
                </aside>
            </article>
    )
}