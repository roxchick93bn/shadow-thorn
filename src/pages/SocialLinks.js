const SocialLinks = () => {
  const socialLinks = [
    {
      name: "TikTok",
      url: "#",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
    },
    {
      name: "X (Twitter)",
      url: "#",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      url: "#",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex justify-center items-center gap-10">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          className="group"
          aria-label={social.name}
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-full transition-colors duration-200 ease-in-out">
            {social.name === "TikTok" && (
              <div className="bg-[#ff0050] rounded-full p-2 text-white hover:bg-[#ff1a66] transition-colors">
                {social.icon}
              </div>
            )}
            {social.name === "X (Twitter)" && (
              <div className="bg-black rounded-full p-3 text-white hover:bg-gray-800 transition-colors">
                {social.icon}
              </div>
            )}
            {social.name === "YouTube" && (
              <div className="bg-red-600 rounded-full p-2 text-white hover:bg-red-700 transition-colors">
                {social.icon}
              </div>
            )}
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
