import Post from "../playerPost";
import { Posts } from "../../dummyData";

export default function PlayerFeed() {

  return (
    <div className="feed">
      <div className="feedWrapper">
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}