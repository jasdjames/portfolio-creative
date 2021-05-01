import code from '../design/img/code.jpeg';

export const Coding = () => {
  return (
    <div className="container">
      <h1 className="text-center text-5xl font-mono border-t-2 border-b-2 m-5">
        Responsive Web Design/ Full-Stack Development
      </h1>
      <div className="flex flex-row">
        <div className="float-left">
          <img
            className="m-2 border-4 rounded-lg"
            src={code}
            alt="code from creating this page "
          />
        </div>

        <div className="ml-2 float-right">
          <p className="m-4 p-4 text-xl">
            With an undergraduate minor in Communications-Media Production and
            MA in Media Studies, design and design-related course-work were
            driving forces of my creative journey. Over the past few years, I
            have found myself returning to basic HTML and CSS knowledge to
            design pages from small businesses as a tertiary (Teaching and
            Photography being primary and secondary) form of income. With the
            Covid-19 pandemic onset, I finally decided to dedicate more time
            professionally and make this creative interest a more primary means
            for fulfilling my creative passion. I enrolled in the Rice
            University Coding Boot Camp for Full-Stack Development.
          </p>
        </div>
      </div>
      <div className="flex flex-row">
        <h2>Example Projects</h2>

        <ul className="list-disc ">
          <li className="">
            <div className="mb-4 w-1/4 h-1/4">
              <img
                src="https://github.com/jasdjames/note-taker-express/raw/main/public/assets/img/first.png"
                alt="new note being created"
              />
              <p></p>
            </div>
          </li>
          <li>
            <div className="mb-4 w-1/4 h-1/4">
              <img
                src="https://project2ejmq.s3.us-east-2.amazonaws.com/images/Sshot-p1.png"
                alt="face analyzing application "
              ></img>
              <p></p>
            </div>
          </li>
          <li>
            <div className="mb-4  w-1/4 h-1/4">
              <img
                src="https://project2ejmq.s3.us-east-2.amazonaws.com/images/fullApp.png"
                alt="employee directory application using React"
              ></img>
              <p></p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
