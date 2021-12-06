import React from 'react';

const Navigation = () => {
  return (
    <nav className="bg-gray-200">
      <div className="flex justify-between items-center p-3">
        <div className="flex space-x-6 items-center">
          {/** logo */}
          <div >
            <a  className='flex items-center no-underline' href='#'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
              <span className='font-bold text-black'> Better Design </span>
            </a>
          </div>

          {/*** Primary div */}
          <div className=' space-x-3'>
            <a >
              Home
            </a>
            <a>About</a>

          </div>
        </div>

        {/*** Secondary div */}
        <div className=' space-x-3'> 
        <a className=' border-2 border-red-200 rounded-xl p-2 no-underline bg-yellow-300 text-black'> Contact</a>
        <a>Register</a>
        <a>Login</a>
         </div>
      </div>
    </nav>
  );
};

export default Navigation;
