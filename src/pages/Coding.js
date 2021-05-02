import code from '../design/img/code.jpeg';
import { Project } from '../components/Project';

export const Coding = () => {
  return (
    <div className="container ml-6 p-2">
      <div className="place-content-center">
        <h1 className="text-center text-5xl font-mono border-t-2 border-b-2 m-5">
          Responsive Web Design/ Full-Stack Development
        </h1>
        <div className="grid grid-cols-3 gap-4 place-items-center">
          <div className="float-left">
            <img
              className="m-2 border-4 rounded-lg"
              src={code}
              alt="code from creating this page "
            />
          </div>

          <div className="ml-2 float-right col-span-2 ">
            <p className="m-4 p-4 text-xl">
              With an undergraduate minor in Communications-Media Production and
              MA in Media Studies, design and design-related course-work were
              driving forces of my creative journey. Over the past few years, I
              have found myself returning to basic HTML and CSS knowledge to
              design pages from small businesses as a tertiary (Teaching and
              Photography being primary and secondary) form of income. With the
              Covid-19 pandemic onset, I finally decided to dedicate more time
              professionally and make this creative interest a more primary
              means for fulfilling my creative passion. I enrolled in the Rice
              University Coding Boot Camp for Full-Stack Development.
            </p>
          </div>
        </div>
        <div className="grid grid cols-3 place-items-center">
          <div className="">
            <h2 className="col-span-3 text-center object-center text-2xl font-mono border-t-2 border-b-2">
              {' '}
              <a href="https://github.com/jasdjames">
                Link to my GitHub{' '}
                <img
                  className="inline-block"
                  src="https://project2ejmq.s3.us-east-2.amazonaws.com/GitHub-Mark-64px.png"
                  alt="GitHub Logo"
                ></img>{' '}
                the location of my repositories
              </a>
            </h2>
            <div className="col-span-3">
              <h2 className="text-center text-2xl mt-2">Example Projects</h2>

              {/* Try Grid Span instead ??? Whole page */}
            </div>
            <div className="grid grid-cols-3 gap-4 place-items-center">
              <Project />
              {/* <div className=" mb-4">
                <a href="https://condescending-nobel-29ef6b.netlify.app/">
                  <img
                    className="border-4 rounded-lg"
                    src="https://project2ejmq.s3.us-east-2.amazonaws.com/images/fullApp.png"
                    alt="employee directory application using React"
                  />
                </a>
                <p>
                  Click the photo for the deployed application and click here
                  for the{' '}
                  <a
                    href="https://github.com/jasdjames/employee-directory-react"
                    className="hover:bg-white"
                  >
                    {' '}
                    Employee Directory repository.
                  </a>
                </p>
              </div> */}
              {/* 
              <div className="mb-4  ">
                <a href="https://pedagu-gu.herokuapp.com/profile">
                  <img
                    className="m-2 border-4 rounded-lg"
                    src="https://project2ejmq.s3.us-east-2.amazonaws.com/images/Sshot-p1.png"
                    alt="face analyzing application "
                  ></img>
                </a>
                <p>
                  <span>
                    Click the photo for the deployed application and click here
                    for the{' '}
                    <a
                      href="https://github.com/erumd/Project2-repository"
                      className="hover:bg-white"
                    >
                      {' '}
                      PedaGOgue repository
                    </a>
                    .{' '}
                  </span>
                </p>
              </div>

              <div className=" mb-4 ">
                <a href="https://pure-peak-57226.herokuapp.com/">
                  <img
                    className="m-2 border-4 rounded-lg"
                    src="https://github.com/jasdjames/note-taker-express/raw/main/public/assets/img/first.png"
                    alt="new note being created"
                    // src="https://project2ejmq.s3.us-east-2.amazonaws.com/images/fullApp.png"

                    // alt="employee directory application using React"
                  ></img>
                </a>
                <p>
                  Click the photo for the deployed application and click here
                  for the{' '}
                  <a
                    href="https://github.com/jasdjames/note-taker-express"
                    className="hover:bg-white"
                  >
                    {' '}
                    Note Taker repository.
                  </a>
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
