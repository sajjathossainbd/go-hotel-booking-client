function NewsLetter() {
  return (
    <div className="flex flex-col gap-6 items-center my-10">
      <div className="">
        <h2 className="text-3xl font-bold mb-2">
          Subscribe To Your Newsletter
        </h2>
        <p className="text-center">
          Sing Up for regular updates, deals, and exclusive offers.
        </p>
      </div>
      <div className="join">
        <input
          className="input input-bordered join-item w-64"
          placeholder="Email"
        />
        <button className="btn join-item rounded-r-full">Subscribe</button>
      </div>
    </div>
  );
}

export default NewsLetter;
