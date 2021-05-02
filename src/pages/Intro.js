export const Intro = () => {
  return (
    <div className="container ml-6 p-2">
      <div className="place-content-center">
        <h1 className="text-center text-5xl font-mono border-t-2 border-b-2 m-5">
          JasDJames - Creative Portfolio
        </h1>
        <div className="grid grid-cols-3 gap-4 place-items-center">
          <div className="float-left">
            <img
              className="m-2 border-4 rounded-lg"
              src="https://project2ejmq.s3.us-east-2.amazonaws.com/images/blue.jpeg"
              alt="Jasmine Headshot "
            />
          </div>

          <div className="ml-2 float-right col-span-2 ">
            <p className="m-4 p-4 text-xl">
              A product of inner-city Houston, I grew up in a fast-moving urban
              environment. I transitioned from a small private school with a
              class size of 16 to a larger public high school with a graduating
              class of over 800. This part of my background taught me
              adaptability. I then begin my undergraduate journey at the second
              most diverse universities in the country - The University of
              Houston - Main Campus. This part of my journey helped me to be
              considerate, receptive, equitable, and balanced. Continuing my
              education to receive a Master of Arts in Media Studies from The
              New School taught me perseverance, patience, and diligence.
              Entering the workforce as a high school language arts teacher, I
              continued my education of life, by teaching me the importance of
              collaboration, compassion, and empathy. I have used these lessons
              to guide my creative journey, and I use them in every aspect of
              art that I create, including web development, filmmaking,
              screenwriting, photography, and writing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
