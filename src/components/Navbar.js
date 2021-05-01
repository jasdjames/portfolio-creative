import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { Fragment } from 'react';

import { Link } from 'react-router-dom';
const solutions = [
  {
    name: 'Full-Stack Web Development',
    description: 'React, Node, JS, and MERN',
    href: '/coding',
    icon: IconOne,
  },
  {
    name: 'Photography',
    description: 'Landscape, Wedding, and Street',
    href: '/photography',
    icon: IconTwo,
  },
  {
    name: 'Teaching',
    description: 'Face-to-Face and Remote',
    href: '/teaching',
    icon: IconThree,
  },
];

export function NavBar() {
  return (
    <div className="w-screen max-w-sm px-4 m-6 top-16">
      <Popover>
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
                text-white group bg-orange-700 px-3 py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span>Portfolio Sections</span>
              <ChevronDownIcon
                className={`${open ? '' : 'text-opacity-70'}
                  ml-2 h-5 w-5 text-orange-300 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                static
                className="absolute z-10 w-screen max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl"
              >
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                    {solutions.map((item) => (
                      <Link to={item.href}>
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                        >
                          <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                            <item.icon aria-hidden="true" />
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-900">
                              {item.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {item.description}
                            </p>
                          </div>
                        </a>
                      </Link>
                    ))}
                  </div>
                  <div className="p-4 bg-gray-50">
                    <Link
                      to="/contact"
                      className="flow-root px-2 py-2 transition duration-150
                      ease-in-out rounded-md hover:bg-gray-100
                      focus:outline-none focus-visible:ring
                      focus-visible:ring-orange-500
                      focus-visible:ring-opacity-50"
                    >
                      <span className="flex items-center">
                        <span className="text-sm font-medium text-gray-900">
                          Contact Information
                        </span>
                      </span>
                      <span className="block text-sm text-gray-500">
                        JasDJames - Contact
                      </span>
                    </Link>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}

function IconOne() {
  return (
    // <svg
    //   width="48"
    //   height="48"
    //   viewBox="0 0 48 48"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <rect width="48" height="48" rx="8" fill="#FFEDD5" />
    //   <path
    //     d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
    //     stroke="#FB923C"
    //     strokeWidth="2"
    //   />
    //   <path
    //     fillRule="evenodd"
    //     clipRule="evenodd"
    //     d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
    //     stroke="#FDBA74"
    //     strokeWidth="2"
    //   />
    //   <path
    //     fillRule="evenodd"
    //     clipRule="evenodd"
    //     d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
    //     stroke="#FDBA74"
    //     strokeWidth="2"
    //   />
    // </svg>
    <svg
      width="48"
      height="48"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="#FFEDD5"
      viewBox="0 0 24 24"
      stroke="#FB923C"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    </svg>
  );
}

function IconTwo() {
  return (
    // <svg
    //   width="48"
    //   height="48"
    //   viewBox="0 0 48 48"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <rect width="48" height="48" rx="8" fill="#FFEDD5" />
    //   <path
    //     d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
    //     stroke="#FB923C"
    //     strokeWidth="2"
    //   />
    //   <path
    //     fillRule="evenodd"
    //     clipRule="evenodd"
    //     d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
    //     stroke="#FDBA74"
    //     strokeWidth="2"
    //   />
    // </svg>

    <svg
      width="48"
      height="48"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="#FFEDD5"
      viewBox="0 0 24 24"
      stroke="#FB923C"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
}

function IconThree() {
  return (
    <svg
      width="48"
      height="48"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="#FFEDD5"
      viewBox="0 0 24 24"
      stroke="#FB923C"
    >
      <path d="M12 14l9-5-9-5-9 5 9 5z" />
      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
      />
    </svg>
    // <svg
    //   width="48"
    //   height="48"
    //   viewBox="0 0 48 48"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <rect width="48" height="48" rx="8" fill="#FFEDD5" />
    //   <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
    //   <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
    //   <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
    //   <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
    //   <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
    //   <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    // </svg>
  );
}
