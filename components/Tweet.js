import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Home.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';



function Tweet(props) {

    const [nblike, setNbLike] = useState(0);

    const handleLike = () => {
        setNbLike(nblike + 1);
    }

    return (
        <div className={styles.tweet}>
            <h6>{props.user.username}</h6>
            <p>{props.content}</p>
            <span><FontAwesomeIcon icon={faHeart} className="like" onClick={() => handleLike()} />{nblike}</span>
            <span><FontAwesomeIcon icon={faTrash} className="delete" /></span>

        </div>


    )
}

export default Tweet;