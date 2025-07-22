export default function Contact() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-6">Have questions or want to get in touch? Use the form below or email us directly at <a href="mailto:info@buildingbozrah.com" className="text-blue-700 underline">info@buildingbozrah.com</a>.</p>
      
      <form className="space-y-4 max-w-md">
        <div>
          <label className="block mb-1 font-medium" htmlFor="name">Name</label>
          <input className="w-full border border-gray-300 p-2 rounded" type="text" id="name" placeholder="Your name" />
        </div>

        <div>
          <label className="block mb-1 font-medium" htmlFor="email">Email</label>
          <input className="w-full border border-gray-300 p-2 rounded" type="email" id="email" placeholder="you@example.com" />
        </div>

        <div>
          <label className="block mb-1 font-medium" htmlFor="message">Message</label>
          <textarea className="w-full border border-gray-300 p-2 rounded" id="message" rows="4" placeholder="Your message"></textarea>
        </div>

        <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">Send Message</button>
      </form>
    </div>
  );
}