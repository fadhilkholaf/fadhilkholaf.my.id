const Trash = () => {
  return (
    <section className="flex flex-col items-center text-foreground text-xl font-semibold py-8">
      <ul className="w-full max-w-[1024px] flex flex-col gap-y-1">
        <li className="flex text-wrap gap-x-8 justify-between bg-background px-4 py-2">
          <span>Trash</span>
        </li>
        <li>
          <a
            href="https://personal.fadhilkholaf.my.id"
            target="_blank"
            className="flex text-wrap gap-x-8 justify-between bg-background px-4 py-2"
          >
            <span className="underline underline-offset-2">
              personal.fadhilkholaf.my.id
            </span>
            <span>2024</span>
          </a>
        </li>
        <li>
          <a
            href="https://playground.fadhilkholaf.my.id"
            target="_blank"
            className="flex text-wrap gap-x-8 justify-between bg-background px-4 py-2"
          >
            <span className="underline underline-offset-2">
              playground.fadhilkholaf.my.id
            </span>
            <span>2024</span>
          </a>
        </li>
        <li>
          <a
            href="https://next.fadhilkholaf.my.id"
            target="_blank"
            className="flex text-wrap gap-x-8 justify-between bg-background px-4 py-2"
          >
            <span className="underline underline-offset-2">
              next.fadhilkholaf.my.id
            </span>
            <span>2024</span>
          </a>
        </li>
        <li>
          <a
            href="https://web.fadhilkholaf.my.id"
            target="_blank"
            className="flex text-wrap gap-x-8 justify-between bg-background px-4 py-2"
          >
            <span className="underline underline-offset-2">
              web.fadhilkholaf.my.id
            </span>
            <span>2023</span>
          </a>
        </li>
        <li>
          <a
            href="https://fadhilkholaf.github.io"
            target="_blank"
            className="flex text-wrap gap-x-8 justify-between bg-background px-4 py-2"
          >
            <span className="underline underline-offset-2">
              fadhilkholaf.github.io
            </span>
            <span>2022</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Trash;
