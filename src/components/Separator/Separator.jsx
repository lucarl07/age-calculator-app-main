import arrow from "../../assets/images/icon-arrow.svg"

const Separator = () => {
  return (
    <>
      <hr />
      <div className="circle" style={{ 
        backgroundColor: 'purple', 
        width: 'max-content'
      }}>
        <img src={arrow} alt="Down arrow" />
      </div>
    </>
  );
}

export default Separator;