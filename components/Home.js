import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { logout } from '../reducers/user';
import { useDispatch, useSelector } from 'react-redux';
import { addTweet, loadTweets } from '../reducers/tweets';
import Tweet from '../components/Tweet';

function Home() {
  const [message, setMessage] = useState('');
  const [remainingChars, setRemainingChars] = useState(280);
  //const [showTweets, setTweets] = useState([]); //Etat pour stoker les tweets ajoutés

  //console.log(message);

  const handleMessageChange = (event) => {
    const inputMessage = event.target.value;
    setMessage(inputMessage);
    setRemainingChars(280 - inputMessage.length);
  };


  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const tweet = useSelector((state) => state.tweets.value)

  useEffect(() => {
    fetch('http://localhost:3000/tweets')
      .then(response => response.json())
      .then(data => {
        dispatch(loadTweets(data.tweet))
      })
  }, [message]);

  const handleClickIcon = () => {
    console.log('Direction Home');
    return <Home />;
  }

  const handleClickLogout = () => {
    console.log('Logout');
    dispatch(logout());
  }

  const handleAddTweet = () => {

    fetch(`http://localhost:3000/tweets/${user.token}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: message }),
    }).then(response => response.json())
      .then(data => {
        console.log(data)
        if (data.result) {
          const createdTweet = { ...data.tweet, author: user }; // Penser a utiliser author pour les maj de tweet par exemple
          dispatch(addTweet(createdTweet));
          setMessage('');
        }
      });

  }

  const tweets = tweet.map((data, i) => {
    if (!tweet.length <= 0)
      return <Tweet {...data} key={i} />
  })


  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.containerLeft}>
          <header className={styles.header}>
            <img src="logo-twitter-blanc-png.png" alt="logo" className={styles.image} onClick={() => handleClickIcon()} />
          </header>
          <div className={styles.vide}></div>
          <footer className={styles.footer}>
            <FontAwesomeIcon className={styles.logout} icon={faRightFromBracket} onClick={() => handleClickLogout()} />
            <p className={styles.user}>Welcome {user.username}</p>
          </footer>
        </div>

        <div className={styles.containerCenter}>
          <h1 className={styles.title}>Home</h1>

          <div className={styles.addTweet}>
            <input className={styles.addmessage} type="text" placeholder=" What's up?" value={message} onChange={handleMessageChange} maxLength={280} />
            <span className={styles.remainingChars}>{remainingChars}</span>
            <button className={styles.tweetButton} onClick={handleAddTweet}>Tweet</button>
          </div>

          <div className={styles.tweetAdded}>

            <div className={styles.tweet}>{tweets}</div>

          </div>
          
          <div></div>
        </div>
        <div className={styles.containerRight}>
          <h1 className={styles.title}>Trends</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;