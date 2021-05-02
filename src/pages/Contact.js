export const Contact = () => {
  return (
    <>
      <div className="w-screen h-screen bg-white flex flex-row flex-wrap p-3">
        <div className="mx-auto w-2/3">
          <div className="rounded-lg shadow-lg bg-gray-600 w-full flex flex-row flex-wrap p-3 antialiased">
            <div className="md:w-1/3 w-full">
              <img
                className="rounded-lg shadow-lg antialiased"
                src="https://project2ejmq.s3.us-east-2.amazonaws.com/images/blue-small.png"
                alt="Jasmine headshot"
              />
            </div>
            <div className="md:w-2/3 w-full px-3 flex flex-row flex-wrap">
              <div className="w-full text-right text-gray-700 font-semibold relative pt-3 md:pt-0">
                <div className="text-2xl text-white leading-tight">Contact</div>
                <div className="text-normal text-gray-300 hover:text-gray-400 cursor-pointer">
                  <span className="border-b border-dashed border-gray-500 pb-1">
                    JasDJames
                  </span>
                  <div>
                    <h2> Contact Information</h2>

                    <h3>Email</h3>
                    <p> jasdjames@gmail.com</p>
                    <h3>Phone</h3>
                    <p> (832) 362-4165</p>
                    <h3>LinkedIn</h3>

                    <div
                      className="LI-profile-badge"
                      data-version="v1"
                      data-size="large"
                      data-locale="en_US"
                      data-type="horizontal"
                      data-theme="dark"
                      data-vanity="jasdjames"
                    >
                      <a
                        className="LI-simple-link"
                        href="https://www.linkedin.com/in/jasdjames?trk=profile-badge"
                      >
                        Jasmine James
                      </a>
                    </div>

                    <h3>Résumé </h3>
                    <p class="card-text">
                      Click here{' '}
                      <span id="resEm">
                        {' '}
                        <a
                          href="assets/resume/Jasmine_James - 01-21.docx.pdf"
                          download
                        >
                          📄
                        </a>
                      </span>{' '}
                      to download my Résumé
                    </p>
                  </div>
                </div>
                <div className="text-sm text-gray-300 hover:text-gray-400 cursor-pointer md:absolute pt-3 md:pt-0 bottom-0 right-0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
