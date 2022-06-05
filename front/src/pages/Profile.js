const Profile = ({ pseudo }) => {
  const date = new Date();
  return (
    <div className='tab-content'>
      <div className='card--main'>
        <div className='card border-info mb-3'>
          {/* <div className='card-header'>Informations</div> */}
          <div className='card-body'>
            <h4 className='card-title'>
              Bonjour <span>{pseudo}</span>
            </h4>
            <br></br>
            <p className='card-text'>
              date de création : <span></span>
              {("0" + date.getDate()).slice(-2) +
                "/" +
                ("0" + (date.getMonth() + 1)).slice(-2) +
                "/" +
                date.getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
