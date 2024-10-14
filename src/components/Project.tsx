const Project = () => {
  return (
    <section className="flex flex-col items-center text-foreground text-xl font-semibold py-8">
      <ul className="w-full max-w-[1024px] flex flex-col gap-y-1">
        <li className="flex text-wrap gap-x-8 justify-between bg-background px-4 py-2">
          <p>LENTERA</p>
          <p>2024</p>
        </li>
        <li className="flex text-wrap gap-x-8 justify-between bg-background px-4 py-2">
          <p>SIMPM</p>
          <p>2024</p>
        </li>
        <li className="flex text-wrap gap-x-8 justify-between bg-background px-4 py-2">
          <p>SMP DARUNNAJAH</p>
          <p>2024</p>
        </li>
      </ul>
    </section>
  );
};

export default Project;
