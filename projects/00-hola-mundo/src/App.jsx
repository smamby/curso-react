
import './TwFollowCard.css';
import { TwFollowCard } from './TwFollowCard';


const users = function () {
  return [
    { username: 'kikobeats', name: 'Juan Robotaniol Juarez', initialIsFollowing: true },
    { username: 'pabloherz', name: 'Pablo Hernandez', initialIsFollowing: false },
    { username: 'midudev', name: 'Miguel Duran', initialIsFollowing: false },
    { username: 'soundcloud/gorillaz', name: 'Juan Gomez Diez', initialIsFollowing: true },
    { username: 'deviantart/spyed', name: 'Deviant Art', initialIsFollowing: false },
  ];
}
console.log(users());
export function App() {
  const format = (username) => `@${username}`;
  return (
    <section className='app'>
      {users().map(user => (
        <TwFollowCard key={user.username} formatUsername={format} {...user} />
      ))}
    </section>
  );
}