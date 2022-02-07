import { Helmet } from 'react-helmet';

const Games = () => {
  const sendGameRequest = e => {
    e.preventDefault();

    const name = e.target[0].value;
    const game = e.target[1].value;

    const link = document.createElement('a');
    link.href = `mailto:eliasbruhn123@gmail.com?subject=Regarding%20new%20game%20rule%20request:%20${game}&body=Hello,%20my%20name%20is%20${name},%20and%20I%20would%20like%20to%20request%20rules%20for%20"${game}"%20on%20your%20Game%20Rules%20site.`;
    setTimeout(() => {
      link.click();
    }, 1000);

    document.querySelector('.success').style.display = 'block';
    document.querySelector(
      '.success'
    ).innerText = `You successfully requested rules for "${game}"`;

    e.target.reset();

    setTimeout(() => {
      window.location.reload();
    }, 20000);
  };

  return (
    <>
      <Helmet>
        <title>Games | Game Rules</title>
      </Helmet>
      <h1>Games</h1>
      <form onSubmit={sendGameRequest}>
        <h2>Submit a game request:</h2>
        <label htmlFor="name">Your name</label>
        <input required type="name" name="name" placeholder="Your name.." />
        <label htmlFor="game">Game</label>
        <input
          required
          type="text"
          name="game"
          placeholder="Game you want to request.."
        />
        <input type="submit" value="Submit" className="submit" />
      </form>
      <div className="success"></div>
    </>
  );
};

export default Games;
