import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Home.module.css';
import { useDispatch, useSelector } from 'react-redux';



function Tweet(props) {

    return (
        <div className={styles.tweet}>
            <h6>{props.username}</h6>
            <p>{props.content}</p>
            <span><FontAwesomeIcon icon={faHeart} className="like" />0</span>

        </div>


    )
}

export default Tweet;