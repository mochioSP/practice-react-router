import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const state = useLocation();
  const history = useHistory();

  const onClickback = () => history.push("/page1");
  return (
    <div>
      <h1>Page1DetailAです。</h1>
      <button onClick={onClickback}>戻る</button>
    </div>
  );
};
