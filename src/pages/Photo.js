export const Photo = () => {
  return (
    <>
      <h1 className="text-center text-5xl font-mono border-t-2 border-b-2 m-5">
        Photography (Still life,Landscape, Event, Artistic/Street){' '}
      </h1>
      <div className="container">
        <div className="grid grid-cols-2 gap-4">
          <div className="m-2">
            <img
              src="https://project2ejmq.s3.us-east-2.amazonaws.com/images/wedding-1.jpeg"
              alt="cross communion plate"
            ></img>
          </div>
          <div className="m-2 mb-2 object-contain">
            {' '}
            <img
              src="https://project2ejmq.s3.us-east-2.amazonaws.com/images/trees.jpeg"
              alt="Tree landscape"
            ></img>
          </div>
          <div className="m-2">
            {' '}
            <img
              src="https://project2ejmq.s3.us-east-2.amazonaws.com/images/wedding-2.JPG"
              alt="wedding flowers in vase"
            ></img>
          </div>
          <div className="m-2">
            {' '}
            <img
              src="https://project2ejmq.s3.us-east-2.amazonaws.com/images/greenle.JPG"
              alt="Greenly Colorado Christmas"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};
