import { Link } from "react-router-dom";

export default function UserList() {
  return (
    <>
      <ul className="list-unstyled">
        <li>
          <Link to={"/userlist/1"}>User one</Link>
        </li>
        <li>
          <Link to={"/userlist/2"}>User two</Link>
        </li>
        <li>
          <Link to={"/userlist/3"}>User three</Link>
        </li>
        <li>
          <Link to={"/userlist/4"}>User four</Link>
        </li>
      </ul>
    </>
  );
}
