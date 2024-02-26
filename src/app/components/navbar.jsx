"use client"
import Link from 'next/link';
const Navbar = () => {
  return (
    <div className="flex justify-between items-center my-5 font-bold mx-[50px]">
      <div className="flex justify-center items-center gap-1 text-[#ff0099] text-[25px]">
        ANITS
      </div>
      <div className="flex gap-12 py-2 px-10 items-center cursor-pointer">
        <Link href="/" passHref>
          <div className="nav">Home</div>
        </Link>
        <Link href="/events" passHref>
          <div className="nav">Events</div>
        </Link>
        <Link href="/about" passHref>
          <div className="nav">About</div>
        </Link>
        <Link href="/gallery" passHref>
          <div className="nav">Gallery</div>
        </Link>
        <Link href="/contact" passHref>
          <div className="nav">Contact Us</div>
        </Link>
        <button className=" bg-[#ff0099] text-[#fff] rounded-lg py-2 px-10">
          <h1>Lets Go</h1>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
