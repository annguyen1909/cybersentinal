const ComingSoon = () => {
    return (
      <>
        <div className="relative min-h-[80vh] top-40 flex flex-col  place-items-center ">
          <h2 className="text-center font-heading m-10 text-6xl sm:text-7xl lg:text-8xl leading-[5rem] sm:leading-[7rem] lg:leading-[7rem] font-black	 ">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Coming Soon
            </span>
            <span className="">⏳</span>
          </h2>
          <p
            className="text-2xl md:text-3xl px-6 max-w-3xl text-center m-5 text-slate-800 dark:text-slate-100 font-thin"
            dangerouslySetInnerHTML={{
              __html: "Wait for our confirmation for the full project",
            }}
          ></p>
                    <p
            className="text-2xl md:text-3xl px-6 max-w-3xl text-center m-5 text-slate-800 dark:text-slate-100 font-thin"
            dangerouslySetInnerHTML={{
              __html: "Thank you !",
            }}
          ></p>
        </div>
      </>
    );
}

export default ComingSoon