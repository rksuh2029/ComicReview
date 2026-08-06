import { useParams } from "react-router-dom";

function ComicProfile() {
  const { id } = useParams();
  return <h1>Comic Profile {id}</h1>;
}

export default ComicProfile;