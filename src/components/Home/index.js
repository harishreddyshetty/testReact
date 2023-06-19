import { useNavigate } from "react-router-dom";


const Home = () => {

    const navigate = useNavigate();
    
  const onClickBtn = () => {
    navigate("/test");
  };

  return (
    <>
      <h1>Welcome to home</h1>
      <button type="button" onClick={onClickBtn}>CLick me</button>
    </>
  );
};
export default Home;
