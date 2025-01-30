import { useParams } from "react-router-dom";

export default function UserDetail() {
  const param = useParams();

  console.log(param);

  return <div>User {param.id} detail</div>;
}
