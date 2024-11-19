export default function Forum(){
return(
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Submit a Ticket</h1>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Requester *
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            placeholder="Subject"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
            Description *
          </label>
          <textarea
            id="description"
            placeholder="Description"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows={5}
          ></textarea>
        </div>
        <div className="mb-4">
          <a href="#" className="text-blue-500 text-sm">
            + Attach a file
          </a>
        </div>
        <div className="mb-6">
          <div className="g-recaptcha" data-sitekey="your-site-key"></div>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
          <button
            type="button"
            className="bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Cancel
          </button>
        </div>
      </form>
    
<div className="-m-96 mt-96 pl-72">
<footer className="md:h-16 flex justify-items-center bg-neutral-50">
  <nav className="footer-links">
    <a href="/support/home" className="px-4 text-gray-500">
      Home /
    </a>
    <a href="/support/solutions" className="text-gray-500">
      Solutions /
    </a>
    <a href="http://dontpayfull.com" className="text-gray-500">
      Main Website /
    </a>
    <a href="http://forum.dontpayfull.com" className="text-gray-500">
      Forum /
    </a>
    <a href="http://blog.dontpayfull.com" className="text-gray-500">
      Blog
    </a>
  </nav>
</footer>
</div>
</div>
  );
};