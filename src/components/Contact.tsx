const Contact = () => {
  return (
    <section className="py-8 flex flex-col items-center">
      <ul className="w-full max-w-[1024px] flex flex-col gap-y-8 text-5xl font-medium px-4">
        <li>
          <a href="https://instagram.com/fadhilkholaf" target="_blank">
            Instagram
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/fadhilkholaf" target="_blank">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/fadhilkholaf" target="_blank">
            Github
          </a>
        </li>
        <li>
          <a href="tel:+6285790510346">Phone Number</a>
        </li>
        <li>
          <a href="mailto:fadhilkholafbusiness@gmail.com">Email</a>
        </li>
        <li>
          <a
            href="https://docs.google.com/document/d/1YiTeiRCyGrtfB01SgHnMxjhpKAOmkCD3ZiD5g91_GDc/edit?usp=sharing"
            target="_blank"
          >
            CV
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
