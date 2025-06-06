function App() {
  return (
    <>
      <div className="bg-[#222222] min-h-screen text-white">
        <div className="flex  justify-between pt-5">
          <div className="ms-10">
            <p className="text-3xl">Sourav Sarkar</p>
          </div>
          <div className="me-10 flex flex-row gap-10">
            <p className="hover:text-gray-300 cursor-pointer">About Me</p>
            <p className="hover:text-gray-300 cursor-pointer">Resume</p>
            <p className="hover:text-gray-300 cursor-pointer">Portfolio</p>
            <p className="hover:text-gray-300 cursor-pointer">Blog</p>
            <p className="hover:text-gray-300 cursor-pointer">Contact</p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10 gap-10 px-10">
          <div>
            <img
              className="rounded-full"
              src="https://placehold.co/300x300?text=Hello\nWorld"
              alt="user_image"
            />
          </div>
          <div className="max-w-[400px]">
            <p className="text-gray-500">Web Designer</p>
            <p className="text-3xl">Sourav Sarkar</p>
            <p className="my-5">
              Fusce tempor magna mi, non egestas velit ultricies nec. Aenean
              convallis, risus non condimentum gravida, odio mauris ullamcorper
              felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia
              urna, a placerat sapien pretium eu.
            </p>
            <span>
              <button className=" border border-blue-500 px-4 py-2 rounded-2xl hover:bg-blue-500 ">
                Download CV
              </button>
              <button className="border border-white px-6 py-2 rounded-3xl hover:bg-gray-200 hover:text-black ms-6">
                Contact
              </button>
            </span>
          </div>
        </div>
        <div className="px-8">
          <p className="my-5 text-2xl">What I Do</p>
          <div className="flex gap-10">
            <div className="flex my-5">
              <div>
                <img src="" alt="some_image" />
              </div>
              <div>
                <h3>Copywrite</h3>
                <p>
                  Mauris neque libero, aliquet vel mollis nec, euismod sed
                  tellus. Mauris convallis dictum elit id volutpat. Vivamus
                  blandit, dolor vitae lacinia maximus, risus velit vehicula
                  odio, a tincidunt turpis turpis tempus ex.
                </p>
              </div>
            </div>
            <div className="flex">
              <div>
                <img src="" alt="some_image" />
              </div>
              <div>
                <h3>E commerce</h3>
                <p>
                  Mauris neque libero, aliquet vel mollis nec, euismod sed
                  tellus. Mauris convallis dictum elit id volutpat. Vivamus
                  blandit, dolor vitae lacinia maximus, risus velit vehicula
                  odio, a tincidunt turpis turpis tempus ex.
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-10">
            <div className="flex">
              <div>
                <img src="" alt="some_image" />
              </div>
              <div>
                <h3>Web Design</h3>
                <p>
                  Mauris neque libero, aliquet vel mollis nec, euismod sed
                  tellus. Mauris convallis dictum elit id volutpat. Vivamus
                  blandit, dolor vitae lacinia maximus, risus velit vehicula
                  odio, a tincidunt turpis turpis tempus ex.
                </p>
              </div>
            </div>
            <div className="flex">
              <div>
                <img src="" alt="some_image" />
              </div>
              <div>
                <h3>Marketing</h3>
                <p>
                  Mauris neque libero, aliquet vel mollis nec, euismod sed
                  tellus. Mauris convallis dictum elit id volutpat. Vivamus
                  blandit, dolor vitae lacinia maximus, risus velit vehicula
                  odio, a tincidunt turpis turpis tempus ex.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-6">
          <p className="ps-5 mb-5">Testimonials</p>
          <div className="flex px-10 gap-4 flex-wrap">
            <div className="border flex flex-col px-5 justify-center border-gray-600 rounded-2xl h-[200px] w-[450px]">
              <p className="text-gray-400">
                Donec eu est vel metus consequat volutpat Nunc aliquet euismod
                mauris, a feugiat uma ullamcorper non.
              </p>
              <div className="mt-5">
                <p className="text-white">Billy Adams</p>
                <p className="text-gray-400">Rolling Thunder</p>
              </div>
            </div>
            <div className="border flex flex-col px-5 justify-center border-gray-600 rounded-2xl h-[200px] w-[450px]">
              <p className="text-gray-400">
                Donec eu est vel metus consequat volutpat Nunc aliquet euismod
                mauris, a feugiat uma ullamcorper non.
              </p>
              <div className="mt-5">
                <p>Billy Adams</p>
                <p className="text-gray-400">Rolling Thunder</p>
              </div>
            </div>
            <div className="border flex flex-col px-5 justify-center border-gray-600 rounded-2xl h-[200px] w-[450px]">
              <p className="text-gray-400">
                Donec eu est vel metus consequat volutpat Nunc aliquet euismod
                mauris, a feugiat uma ullamcorper non.
              </p>
              <div className="mt-5">
                <p>Billy Adams</p>
                <p className="text-gray-400">Rolling Thunder</p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-10 mb-5">
          <p>Clients</p>
          <div className="flex flex-wrap gap-5 mt-5">
            <img src="" alt="brand_name" />
            <img src="" alt="brand_name" />
            <img src="" alt="brand_name" />
            <img src="" alt="brand_name" />
            <img src="" alt="brand_name" />
            <img src="" alt="brand_name" />
            <img src="" alt="brand_name" />
            <img src="" alt="brand_name" />
          </div>
        </div>
        <div className="px-10">
          <p>Fun Facts</p>
          <div className="flex flex-wrap gap-5 mt-5">
            <div className="bg-gray-600 border rounded-2xl flex flex-col items-center justify-center border-gray-500 text-white h-[250px] w-[250px]">
              <img src="" alt="image" />
              <p>Happy Clients</p>
              <p>578</p>
            </div>
            <div className="bg-gray-600 border rounded-2xl flex flex-col items-center justify-center border-gray-500 text-white h-[250px] w-[250px]">
              <img src="" alt="image" />
              <p>Working Hours</p>
              <p>4780</p>
            </div>
            <div className="bg-gray-600 border rounded-2xl flex flex-col items-center justify-center border-gray-500 text-white h-[250px] w-[250px]">
              <img src="" alt="image" />
              <p>Awards Won</p>
              <p>15</p>
            </div>
            <div className="bg-gray-600 border rounded-2xl flex flex-col items-center justify-center border-gray-500 text-white h-[250px] w-[250px]">
              <img src="" alt="image" />
              <p>Coffee Consumed</p>
              <p>2330</p>
            </div>
          </div>
        </div>
        <footer className="pb-5 mt-5">
          <hr />
          <div className="flex justify-between mt-4">
            <div className="flex flex-row gap-5 ps-10">
              <p className="text-gray-300">Twitter</p>
              <p className="text-gray-300">Facebook</p>
              <p className="text-gray-300">Instagram</p>
            </div>
            <div className="pe-10">
              <p>&copy; 2024 All rights reserved</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
