import { Helmet } from 'react-helmet';

const Bang = () => (
  <div className="bang">
    <Helmet>
      <title>BANG! | Game Rules</title>
    </Helmet>
    <h1>BANG!</h1>
    <img src="/img/bang/bang.jpeg" alt="" />
    <p>
      BANG! is a shootout game, in Spaghetti Western style, between a group of
      Outlaws and the Sheriff, who is their primary target.
    </p>
    <p>
      The Deputies incognitos help the Sheriff, but there is also a Renegade
      pursuing his own goal! In BANG! each player plays one of these roles, and
      represents a famous Wild West inspired character.
    </p>

    <h2>Components</h2>
    <img src="/img/bang/components.jpeg" alt="" />
    <ul>
      <li>7 Roles: 1 Sheriff, 2 Deputies, 3 Outlaws, 1 Renegade</li>
      <li>16 Characters</li>
      <li>7 Summary cards</li>
      <li>80 Playing cards</li>
      <li>30 Bullets</li>
      <li>7 Playing boards;</li>
      <li>Instructions</li>
    </ul>

    <h2>Object of the Game</h2>
    <p>Each player has his own goal:</p>
    <div className="icon-and-text">
      <img src="/img/bang/game8.jpeg" alt="" />
      <p>
        <b>Sheriff:</b> must eliminate all the Outlaws and the Renegade, to
        protect law and order.
      </p>
    </div>
    <div className="icon-and-text">
      <img src="/img/bang/game8_.jpeg" alt="" />
      <p>
        <b>Outlaws:</b> they would like to kill the Sheriff, but they have no
        scruples " about eliminating each other to gain rewards!
      </p>
    </div>
    <div className="icon-and-text">
      <img src="/img/bang/game9_.jpeg" alt="" />
      <p>
        <b>Deputies:</b> they help and protect the Sheriff, and share his same
        goal, W at all costs!
      </p>
    </div>
    <div className="icon-and-text">
      <img src="/img/bang/game9.jpeg" alt="" />
      <p>
        <b>Renegade:</b> he wants to be the new Sheriff; his goal is to be the
        last character in play.
      </p>
    </div>

    <h2>Setup</h2>
    <p>
      (Before the first game remove carefully the bullet tokens from their
      frames). Each player takes a playing board (place it in front of you to
      hold your role, your character, your weapon and your bullets).
    </p>
    <p>Take as many role cards as the number of players, divided as follows:</p>
    <ul>
      <li>
        <b>4 players:</b> Sheriff, 1 Renegade, 2 Outlaws
      </li>
      <li>
        <b>5 players:</b> Sheriff, 1 Renegade, 2 Outlaws, 1 Deputy
      </li>
      <li>
        <b>6 players:</b> Sheriff, 1 Renegade, 3 Outlaws, 1 Deputy
      </li>
      <li>
        <b>7 players:</b> Sheriff, 1 Renegade, 3 Outlaws, 2 Deputy
      </li>
    </ul>
    <p>
      Shuffle the cards reveals himself by turning his card face up. All other
      players look at their role but keep it secret.
    </p>
    <img src="/img/bang/game10.jpeg" alt="" />
    <p>
      Shuffle the characters and give one face up to each player. Each player
      now announces the name of his character and reads his ability. Each player
      takes as many bullets as shown on his character.
    </p>
    <p>
      The Sheriff plays the game with one additional bullet: if his character
      card shows three bullets, he is considered for all effects to have four;
      if he has four bullets, then the Sheriff plays with five.
    </p>
    <p>Put the remaining roles, boards and character cards back in the box.</p>
    <p>
      Shuffle the playing cards, and give each player as many cards, face down,
      as the bullets he has. Put the remaining playing cards face down in the
      middle of the table, as a draw pile. Leave room for the discard pile.
    </p>

    <p>
      <b>Note:</b> for your first few games, you can try a simplified version of
      the game by removing all cards with the symbol of a book before getting
      started.
    </p>

    <h4>Characters</h4>
    <p>
      Each Western character has some special abilities, which make you unique.
      The bullets you have show how many life points you begin the game with,
      i.e. how many times you can be hit before being eliminated from play.
    </p>
    <p>
      Moreover, the bullets indicate how many cards the player can hold in his
      hand at the end of his turn (hand size limit).
    </p>
    <p>
      <i>Example:</i> Jesse Jones has 4 life points: he can be hit four times
      before being eliminated from the game. Moreover, he can hold up to four
      cards in his hands at the end of his turn.
    </p>
    <p>
      If during game Jesse loses one life point and he is down at 3, he can only
      hold up to three cards in his hand at the end of his turn. But fear not!
      Life points can be recovered!
    </p>

    <h2>Game Play</h2>
    <p>
      The Sheriff begins. The game is played in turns, in clockwise order. Each
      player's turn is divided into three phases:
    </p>
    <ol>
      <li>Draw two cards;</li>
      <li>Play any number of cards;</li>
      <li>Discard excess cards.</li>
    </ol>
    <h2>1. Draw two cards</h2>
    <p>
      Draw the top two cards from the draw pile. As soon as the draw pile is
      empty, shuffle the discard pile to create a new playing deck.
    </p>
    <h2>2. Play any number of cards</h2>
    <p>
      Now you may play cards to help yourself or hurt the other players, trying
      to eliminate them. You can only play cards during your turn (exception:
      Missed! and Beer, see below).
    </p>
    <p>
      You are not forced to play cards during this phase. You can play any
      number of cards; there are only three limitations:
    </p>
    <ul>
      <li>
        you can play only 1 BANG! card per turn; (this applies only to BANG!
        cards, not to cards with the symbol)
      </li>
      <li>
        you can have only 1 copy of any one card in play; (one card is a copy of
        another if they have the same name)
      </li>
      <li>
        you can have only 1 weapon in play. (when you play a new weapon, discard
        the one you have in play)
      </li>
    </ul>
    <p>
      <i>Example:</i> If you put a Barrel in play, you cannot play another one,
      since you would end up having two copies of the same card in front of you.
    </p>
    <p>
      There are two types of cards: brown-bordered cards (= play and discard)
      and blue-bordered cards (= weapons and other objects).
    </p>
    <img src="/img/bang/game13.jpeg" alt="" />
    <p>
      <b>Brown-bordered cards</b> are played by putting them directly into the
      discard pile and applying the effect described with text or with symbols
      on the cards (illustrated in the next paragraphs).
    </p>
    <p>
      <b>Blue-bordered cards</b> are played face up in front of you (exception:
      Jail). Blue cards in front of you are hence defined to be "in play".
    </p>
    <p>
      The effect of these cards lasts until they are discarded or removed
      somehow (e.g. through the play of a Cat Balou), or a special event occurs
      (e.g. in the case of Dynamite). There is no limit on the cards you can
      have in front of you provided that they do not share the same name.
    </p>
    <h2>3. Discard Excess Cards</h2>
    <p>
      Once the second phase is over (you do not want to or cannot play any more
      cards), then you must discard from your hand any cards exceeding your
      hand-size limit.
    </p>
    <p>
      Remember that your hand size limit, at the end of your turn, is equal to
      the number of bullets (i.e. life points) you currently have.
    </p>
    <p>Then it is the next player's turn, in clockwise order.</p>
    <h3>Distance Between Players</h3>
    <img src="/img/bang/game14.jpeg" alt="" />
    <p>
      The distance between two players is the minimum number of places between
      them, counting clockwise or counterclockwise (see figure). The distance is
      very important, because all cards with a sight take it into account.
    </p>
    <p>
      Normally you can reach only targets (players or cards) within a distance
      of 1 (note the{' '}
      <img src="/img/bang/game11.jpeg" alt="" className="img-in-text" /> of your
      Colt .45 on your playing board).
    </p>
    <p>
      When a character is eliminated, he is no longer counted when evaluating
      the distance: some players will get "closer" when someone is eliminated.
    </p>
    <h3>Eliminating a character</h3>
    <p>
      When you lose your last life point, you are eliminated and your game is
      over, unless you immediately play a Beer (see below).
    </p>
    <p>
      When you are eliminated from the game, show your role card and discard all
      the cards you have in hand and in play.
    </p>
    <h3>Penalties and Rewards</h3>
    <ul>
      <li>
        <p>
          If the Sheriff eliminates a Deputy, the Sheriff must discard all the
          cards he has in hand and in play.
        </p>
      </li>
      <li>
        <p>
          Any player eliminating an Outlaw (even if the eliminating player is
          himself an Outlaw!) must draw a reward of 3 cards from the deck.
        </p>
      </li>
    </ul>
    <h2>End of the Game</h2>
    <p>The game ends when one of the following conditions is met:</p>
    <ul>
      <li>
        <p>
          the Sheriff is killed. If the Renegade is the only one alive, then he
          wins. Otherwise, the Outlaws win;
        </p>
      </li>
      <li>
        <p>
          all the Outlaws and the Renegade are killed. The Sheriff and his
          Deputies win.
        </p>
      </li>
    </ul>
    <p>
      <i>Example 1:</i> All the Outlaws are eliminated, but the Renegade is
      still in play. In this case, the game continues. The Renegade must now
      face the Sheriff and his Deputies alone.
    </p>
    <p>
      <i>Example 2:</i> The Sheriff is killed, but all Outlaws are eliminated,
      and one Deputy and the Renegade are still in play. The game ends with the
      Outlaws winning! They achieved their goal at the cost of their own lives!
    </p>
    <h3>New Game</h3>
    <p>
      If you play more than one game in a row, players still "alive" at the end
      of the game may choose to keep their character (but not the cards in hand
      or in play!) for the following game; players which have been eliminated
      must draw a new character randomly.
    </p>
    <p>
      If you want to give each player the opportunity of playing the Sheriff,
      you may decide, before starting the game, to pass this role among players
      from game to game, randomly assigning the other roles.
    </p>
    <p>
      Now that you are familiar with the rules, let's see the cards of BANG! in
      detail!
    </p>
    <h3>Remember</h3>
    <ul>
      <li>
        Any card with a Missed! symbol can be used to cancel the effect of a
        card with a BANG! symbol
      </li>
      <li>
        you can only play one BANG! card per turn, but you can play any number
        of other cards which show the symbol
      </li>
      <li>you cannot have two cards with the same name in front of you</li>
      <li>
        you can only have one weapon in play, but at least you always have a
        Colt .45
      </li>
      <li>
        weapons do not change the distance between players, they represent only
        your shooting range
      </li>
      <li>Beer has no effect when there are only 2 players left in the game</li>
      <li>
        when you are losing your last life point, you can only play a Beer, and
        not a Saloon.
      </li>
    </ul>
    <h2>Curiosity</h2>
    <div className="curiosity">
      <img src="/img/bang/game59.jpeg" alt="" />
      <div>
        <p>
          In order to keep track of your life points, you can use another
          character card, from the ones left over. Turn it face down and cover /
          uncover the bullets by sliding your character card on it, just like in
          the picture.
        </p>
        <p>This makes easier to bring BANG! with you and play it anywhere!</p>
        <p>
          <i>Jesse Jones with three life points.</i>
        </p>
      </div>
    </div>
  </div>
);

export default Bang;
