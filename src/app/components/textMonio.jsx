
const TextMonio = () => {
  return (
    <>
      <div className="h-[500px] flex justify-center items-center flex-col gap-5 text-center z-10 footer">
        <div className="flex justify-center flex-col items-center">
          <h1 className="uppercase text-[50px] z-10 font-medium">
            Get Started on Your <br /> Journey to Excellence
          </h1>
          <div className="">
            <p className="font-semibold">
              Embark on a transformative journey towards excellence with our
              expert guidance. Take the first 
              <br />
              step today to elevate your
              business to new heights of success.
            </p>
          </div>
        </div>
        <a href="/events">
        <button className="rounded-full py-2 px-10 text-[#fff] bg-[#ff0099]">
          Lets Go
        </button>
        </a>
      </div>
    </>
  );
};

export default TextMonio;
