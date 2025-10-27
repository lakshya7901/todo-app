const Footer = () => {
  return (
    <footer className="bg-amber-500/90 backdrop-blur-sm shadow-inner text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between text-sm">
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} <span className="font-semibold">Lakshya Sharma</span>. All rights reserved.
        </p>

        <p className="mt-2 sm:mt-0 text-center sm:text-right text-amber-100/90">
          Built with ❤️ using React & Tailwind CSS
        </p>
      </div>
    </footer>
  )
}

export default Footer