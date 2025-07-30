import { useState } from "react";

export function TwFollowCard ({ formatUsername, username, name, initialIsFollowing}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const textBtn = isFollowing ? 'Siguiendo' : 'Seguir';
  const btnClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button';

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };


  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar'
          alt="avatar01"
          src={`https://unavatar.io/${username}`}/>
        <div className='tw-followCard-info'>
          <strong className='tw-followCard-name'>
            {name}
          </strong>
          <span className='tw-followCard-info-username'>
            {formatUsername(username)}
          </span>
        </div>
      </header>

      <aside className="tw-followCard-aside">
        <button className={btnClassName} onClick={handleClick}>
          <span className='tw-followCard-text'>{textBtn}</span>
          <span className='tw-followCard-stop-follow'>No seguir</span>
        </button>
      </aside>
    </article>
  );
}