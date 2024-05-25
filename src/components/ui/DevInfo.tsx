const DevInfo = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className=" px-4 md:px-6">
        <div className="mx-auto max-w-4xl space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#374151]">
              Express Yourself
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
              I am a full stack web engineer with extensive experience in
              front-end technologies like React and NextJS, and back-end
              frameworks including NodeJS, TypeScript, and ExpressJS. Proficient
              in database management (MongoDB, PostgreSQL), I prioritize user
              experience and security, employing JWT Token authentication. With
              strong skills in Git, deployment platforms, and Visual Studio
              Code, I am enthusiastic about sharing my knowledge and guiding
              others in the field of web development.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#374151]">
                Educational Background
              </h3>
              <div className="space-y-2">
                <div>
                  <h4 className="text-lg font-medium">
                    Bachelor of Science in Computer Science Engineering
                  </h4>
                  <p className="text-gray-500 ">
                    International University of Business Agriculture and
                    Technology
                  </p>
                  <p className="text-gray-500 ">2022 - Present</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#374151]">Experience</h3>
              <div className="space-y-2">
                <div>
                  <h4 className="text-lg font-medium">ReactJS Developer</h4>
                  <p className="text-gray-500 ">MIMI</p>
                  <p className="text-gray-500 ">August 2022 - November 2022</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium">Full Stack Developer</h4>
                  <p className="text-gray-500 ">Inflo</p>
                  <p className="text-gray-500 ">March 2024 - Present</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium">
                    Full Stack Developer (Freelance)
                  </h4>
                  <p className="text-gray-500 ">Level - 1, Fiverr</p>
                  <p className="text-gray-500 ">2022 - Present</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#374151]">Technologies</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              <div className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium ">
                JavaScript
              </div>
              <div className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium ">
                React
              </div>
              <div className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium ">
                Next.js
              </div>
              <div className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium ">
                Redux
              </div>
              <div className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium ">
                TypeScript
              </div>
              <div className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium ">
                Firebase
              </div>
              <div className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium ">
                Tailwind CSS
              </div>
              <div className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium ">
                Ant Design
              </div>
              <div className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium ">
                Node.js
              </div>
              <div className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium ">
                ExpressJS
              </div>
              <div className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium ">
                Prisma
              </div>
              <div className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium ">
                Mongoose
              </div>
              <div className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium ">
                MongoDB
              </div>
              <div className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium ">
                PostgreSQL
              </div>
              <div className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium ">
                Git
              </div>
              <div className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium ">
                Figma
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevInfo;
