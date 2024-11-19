

export default function Home() {
  return (
    <div>
      <h2 className="flex p-12 md:ml-80 font-bold text-3xl text-center md:text-left">How can we help you today?</h2>
      <form className="flex items-center ml-4 md:ml-36 relative w-full max-w-6xl mx-auto border-gray-300 md:-mt-7">
        <span className="absolute left-0 md:left-56">
          
        </span>
        <input
          type="text"
          placeholder="Enter your search term here"
          className="md:pl-7 ml-4 md:ml-16 pr-4 py-2.5 border border-orange-200 w-full md:w-3/4" 
        />
        <button className="bg-orange-500 md:w-48 h-11 text-white ml-4 mt-4 md:mt-0">SEARCH</button>
      </form>

      <nav className="mt-8">
        <div className="text-green-800 font-bold text-center md:text-left">
          <a href="/support/tickets/new" className="block px-8 py-2" title="New support ticket">
            <span>New support ticket</span>
          </a>
        </div>

        <div className="pt-2 text-green-700 font-bold text-center md:text-left">
          <a href="/support/tickets" className="block px-8 py-2" title="Check ticket status">
            <span>Check ticket status</span>
          </a>
        </div>
      </nav>

      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6 pl-4 md:pl-32">Knowledge Base</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-4 md:pl-32">
        
        <div>
          <h3 className="font-bold text-xl">My Account</h3>
          <ul className="text-sm text-green-800">
            <li><a href="#create-account">How do I create an account?</a></li>
            <li><a href="#edit-info">How do I edit my personal information?</a></li>
            <li><a href="#change-password">How do I change my password?</a></li>
            <li><a href="#login">How do I log in?</a></li>
          </ul>

          <h3 className="font-bold text-xl mt-4">Adding and Editing a Store</h3>
          <ul className="text-sm text-green-800">
            <li><a href="#add-store">How do I add my store?</a></li>
            <li><a href="#store-not-seeing">Why am I not seeing my store?</a></li>
            <li><a href="#store-no-longer">Why is my store no longer on DontPayFull?</a></li>
            <li><a href="#change-store-logo">How do I add or change the logo for my store?</a></li>
          </ul>

          <h3 className="font-bold text-xl mt-4">Amazon Shopping Tools Extension</h3>
          <ul className="text-sm text-green-800">
            <li><a href="#install-uninstall">How do I install and uninstall the Amazon Shopping Tools extension?</a></li>
            <li><a href="#free-extension">Is Amazon Shopping Tools extension free?</a></li>
            <li><a href="#supported-browsers">What browsers does Amazon Shopping Tools extension work on?</a></li>
            <li><a href="#available-tools">What tools are available on Amazon Shopping Tools extension?</a></li>
          </ul>

          <h3 className="font-bold text-xl mt-4">Coupon Extension</h3>
          <ul className="text-sm text-green-800">
            <li><a href="#install-coupons-extension">How do I Install / Uninstall the Coupons Extension?</a></li>
            <li><a href="#control-popups">Can I control how often Coupons Extension pops up or displays information?</a></li>
            <li><a href="#free-coupons-extension">Is the Coupons Extension free to use?</a></li>
            <li><a href="#how-extension-works">How does the Coupons Extensions work?</a></li>
            <li><a href="#coupons-not-working">Coupons Extension isn't finding savings for my shopping cart.</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-semibold text-lg mb-2">For Consumers</h3>
          <ul className="text-sm font-bold text-green-800">
            <li><a href="#online-coupons">What are online coupons?</a></li>
            <li><a href="#use-coupon-code">How do I use a coupon code?</a></li>
            <li><a href="#coupon-didnt-work">A coupon I tried didn't work. What's next?</a></li>
            <li><a href="#charge-to-use">How much do you charge to use DontPayFull.com?</a></li>
          </ul>

          <h3 className="font-bold text-xl mt-4">For Merchants</h3>
          <ul className="text-sm text-green-800">
            <li><a href="#preferential-position">Is it possible to place the coupons in preferential position?</a></li>
            <li><a href="#homepage-coupons">How can my deal or coupon be on home page?</a></li>
            <li><a href="#charge-to-put-deals">How much do you charge to put our deals on your site?</a></li>
            <li><a href="#increase-sales">How can I increase my sales through DontPayFull?</a></li>
          </ul>

          <h3 className="font-bold text-xl mt-4">Advertising</h3>
          <ul className="text-sm text-green-800">
            <li><a href="#blog-presence">How can we be present on DontPayFull blog?</a></li>
            <li><a href="#advertise">How can I advertise on your site?</a></li>
          </ul>

          <h3 className="font-bold text-xl mt-4">General Questions</h3>
          <ul className="text-sm text-green-800">
            <li><a href="#exclusive-coupon">What is an exclusive coupon/deal?</a></li>
          </ul>
        </div>
      </div>

      <footer className="md:h-16 flex justify-center items-center bg-neutral-50 mt-16">
        <nav className="footer-links flex flex-wrap justify-center">
          <a href="/support/home" className="px-4 text-gray-500">Home /</a>
          <a href="/support/solutions" className="px-4 text-gray-500">Solutions /</a>
          <a href="http://dontpayfull.com" className="px-4 text-gray-500">Main Website /</a>
          <a href="http://forum.dontpayfull.com" className="px-4 text-gray-500">Forum /</a>
          <a href="http://blog.dontpayfull.com" className="px-4 text-gray-500">Blog</a>
        </nav>
      </footer>
    </div>
  );
}
