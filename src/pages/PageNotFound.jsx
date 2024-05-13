import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div>
      <img
        className="w-full"
        src="https://lh6.googleusercontent.com/Bu-pRqU_tWZV7O3rJ5nV1P6NjqFnnAs8kVLC5VGz_Kf7ws0nDUXoGTc7pP87tyUCfu8VyXi0YviIm7CxAISDr2lJSwWwXQxxz98qxVfMcKTJfLPqbcfhn-QEeOowjrlwX1LYDFJN"
        alt="Page_Not_Fouond"
      />
      <Link to="/" className="flex justify-center">
        <button className="btn bg-[#FA5D3F] hover:bg-[#d35036] text-white mr-4 px-5 text-center">
          Back to home
        </button>
      </Link>
    </div>
  );
}

export default PageNotFound;
