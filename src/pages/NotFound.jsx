import { Result, Button } from "antd";

import { Link } from "react-router-dom";

const NotFound = () => {
  return (

<Result

status="404"

title="404"

subTitle="Page Not Found"

extra={

<Link to="/">

<Button type="primary">

Go Dashboard

</Button>

</Link>

}

/>

  );
};

export default NotFound;