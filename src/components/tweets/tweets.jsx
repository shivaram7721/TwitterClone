import Grid from "@mui/material/Grid";
import styles from "./tweets.module.css";
import {
  BiDotsHorizontalRounded,
  BiMessageRounded
} from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { MdOutlinePoll } from "react-icons/md";
import { CiExport } from "react-icons/ci";
import { tweetsData } from "../../atoms/atoms";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
export function Tweets() {
  const [tweets, setTweets] = useRecoilState(tweetsData);
  // const name = JSON.parse(localStorage.getItem('loginName'))
  // const timeStamp = new Date().toLocaleString();
  // const allTweets = getTweets();

  useEffect(() => {
    fetch("/tweets.json")
      .then((res) => res.json())
      .then((data) => setTweets(data));
  }, []);

  function handleLike(id) {
    setTweets((prevTweets) =>
      prevTweets.map((tweet) =>
        tweet.id === id
          ? {
              ...tweet,
              likeCount: tweet.liked ? tweet.likeCount - 1 : tweet.likeCount + 1,
              liked: !tweet.liked,
            }
          : tweet
      )
    );
  }

  return (
    <div className={styles.tweetsDivMain}>
        {tweets.map((tweet) => (
          <Grid className={styles.tweetsContainer} key={tweet.id} >
            <div className={styles.tweetHead}>
              <img className={styles.profileImg} src={tweet.image} />

              <div className={styles.namePara}>
                <div className={styles.profileHead}>
                  <span className={styles.head4}>{tweet.tweetedBy.name}</span>
                  <span className={styles.mention}>@{tweet.tweetedBy.name} {tweet.createdAt}</span>
                    <span>
                      <BiDotsHorizontalRounded className={styles.dots} />
                    </span>
                </div>

                <div className={styles.tweetContent}>
                  <span className={styles.content}>{tweet.content}</span>
                </div>
              </div>
              <div className={styles.dotsDiv}>
              </div>
            </div>

            <div className={styles.postContainer}>
              <img className={styles.postImg} src={tweet.image} />

              <div className={styles.iconsDiv}>
                <p>
                  <BiMessageRounded className={styles.count} />
                  {tweet.commentCount}
                </p>
                <p className={styles.count}>
                  <FaRetweet />
                  {tweet.reTweetsCount}
                </p>
                <p className={styles.count}>
                  <AiFillHeart onClick={() => handleLike(tweet.id)} className={tweet.liked ? styles.liked : ""} />
                  {tweet.likeCount}
                </p>
                <p className={styles.count}>
                  <MdOutlinePoll />
                  193.2k
                </p>
                <p>
                  <CiExport />
                </p>
              </div>
            </div>
          </Grid>
        ))}
    </div>
  );
}