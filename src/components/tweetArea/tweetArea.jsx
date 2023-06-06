import {
  BiPoll,
} from "react-icons/bi";
import {
  AiOutlineFileGif,
  AiOutlineSchedule,
} from "react-icons/ai";
import { CiImageOn } from "react-icons/ci";
import { BsEmojiSmile } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import styles from "./tweetArea.module.css"
import Tooltip from '@mui/material/Tooltip';
import { useState } from "react";
import { useRecoilState } from "recoil";
import { tweetsData } from "../../atoms/atoms";

export function TweetArea() {

  const [input, setInput] = useState('')
  const [tweet, setTweet] = useRecoilState(tweetsData);

  const timeStamp = new Date().toLocaleString();

  const name = JSON.parse(localStorage.getItem('loginName'))

  function handleAddTweet() {
    if(input) {
      const newtweet = {
        id: Date.now(),
        content: input,
        createdAt: timeStamp,
        // image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
        tweetedBy: {
          id: Date.now(),
          name: name
        },
        likeCount: 576,
        commentCount: 577,
        reTweetsCount: 174,
        isLiked: true
      }
  
      setTweet([newtweet, ...tweet])
      localStorage.setItem('tweets', JSON.stringify([newtweet, ...tweet]))
      setInput('')
    }
  }

  return (
      <div className={styles.tweetAreaContainer}>
          
          <div className={styles.tweetDiv}>
            <img className={styles.profileImg} src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" />

            <div>
              <input
                placeholder="What's happening?"
                className={styles.tweet}
                value={input}
                onChange={(e)=>setInput(e.target.value)}
              />
              {/* <textarea cols="68" rows="5" style={{backgroundColor:"black"}}></textarea> */}
            </div>
          </div>

          <div className={styles.tweetIcons}>
            <div className={styles.icons}>
              <Tooltip title="Media">
              <p>
                <CiImageOn />
              </p>
              </Tooltip>
              <Tooltip title="Gif">
              <p>
                <AiOutlineFileGif />
              </p>
              </Tooltip>
              <Tooltip title="Poll">
              <p>
                <BiPoll />
              </p>
              </Tooltip>
              <Tooltip title="Emoji">
              <p>
                <BsEmojiSmile />
              </p>
              </Tooltip>
              <Tooltip title="Schedule">
              <p>
                <AiOutlineSchedule />
              </p>
              </Tooltip>
              <Tooltip title="Location">
              <p>
                <GrLocation />
              </p>
              </Tooltip>
            </div>

            <div className={styles.tweetBtnDiv}>
              <button className={styles.tweetBtn} onClick={handleAddTweet}>Tweet</button>
            </div>
          </div>
      </div>
  );
}