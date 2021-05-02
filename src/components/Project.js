const proInfo = [
  {
    href: 'https://condescending-nobel-29ef6b.netlify.app',
    src: 'https://project2ejmq.s3.us-east-2.amazonaws.com/images/fullApp.png',
    hrefTwo: 'https://github.com/jasdjames/employee-directory-react',
    name: 'Employee Directory repository',
  },
  {
    href: 'https://pedagu-gu.herokuapp.com/profile',
    src: 'https://project2ejmq.s3.us-east-2.amazonaws.com/images/Sshot-p1.png',
    hrefTwo: 'https://github.com/erumd/Project2-repository',
    name: ' PedaGOgue repository',
  },
  {
    href: 'https://pure-peak-57226.herokuapp.com/',
    src:
      'https://github.com/jasdjames/note-taker-express/raw/main/public/assets/img/first.png',
    hrefTwo: 'https://github.com/jasdjames/note-taker-express',
    name: 'Note Taker repository',
  },
];

export const Project = () => {
  return (
    <>
      {proInfo.map((info) => (
        <div className=" mb-4">
          <a href={info.href}>
            <img
              className="border-4 rounded-lg"
              src={info.src}
              alt="employee directory application using React"
            />
          </a>
          <p>
            Click the photo for the deployed application and click here for the{' '}
            <a href={info.hrefTwo} className="hover:bg-white">
              {' '}
              {info.name}
            </a>
          </p>
        </div>
      ))}
    </>
  );
};
