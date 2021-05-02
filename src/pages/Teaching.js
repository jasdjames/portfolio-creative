export const Teaching = () => {
  return (
    <div className="container ml-6 p-2">
      <div className="place-content-center">
        <h1 className="text-center text-5xl font-mono border-t-2 border-b-2 m-5">
          Teaching
        </h1>
        <div className="grid grid-cols-3 gap-4 place-items-center">
          <div className="float-left">
            <img
              className="m-2 border-4 rounded-lg"
              src="https://project2ejmq.s3.us-east-2.amazonaws.com/images/class.jpeg"
              alt="Teaching "
            />
          </div>

          <div className="ml-2 float-right col-span-2 ">
            <p className="m-4 p-4 text-xl">
              As a classroom teacher for five years, I have experience in
              teaching virtual, face-to-face, and small group environments.
              Teaching writing and literacy (in the forms of reading, media
              literacy, and math literacy) have been an essential part of my
              life for the last ten years or more (the last five as a high
              school teacher, two years as an academic tutor in a K-12
              environment, and as a private tutor before that). Teaching and
              education in some form are things that I know will always be an
              integral part of my life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
