import Image from "next/image";

const About = () => {
  return (
    <section className="flex flex-col items-center py-8">
      <article className="w-full max-w-[1024px] p-4 text-5xl flex flex-col gap-y-16 font-medium">
        <p className="flex items-center gap-4 flex-wrap justify-between">
          <span>Hey,</span>
          <span>I’m</span>
          <span>Muhammad</span>
          <span>Fadhil</span>
          <span>
            <Image
              className="h-16 w-32 object-cover rounded-lg"
              src="/images/fadhilkholaf.jpeg"
              alt="fadhilkholaf"
              width={460}
              height={460}
            />
          </span>
          <span>Kholaf!</span>
        </p>
        <p className="flex items-center gap-4 flex-wrap justify-between">
          <span>I’m</span>
          <span>a</span>
          <span>frontend</span>
          <span>
            <video
              className="h-16 w-32 object-cover rounded-lg"
              autoPlay
              loop
              muted
              preload="none"
            >
              <source src="/videos/brick-by-brick.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </span>
          <span>developer</span>
          <span>from</span>
          <span>Tulungagung</span>
          <span>with</span>
          <span>about</span>
          <span>a</span>
          <span>year</span>
          <span>of</span>
          <span>
            <Image
              className="h-16 w-32 object-cover rounded-lg"
              src="/images/code.png"
              alt="Experience"
              width={1920}
              height={1080}
            />
          </span>
          <span>experience.</span>
          <span>I</span>
          <span>studied</span>
          <span>at</span>
          <span>SMK</span>
          <span>Telkom</span>
          <span>
            <Image
              className="h-16 w-32 object-cover rounded-lg"
              src="/images/smk-telkom-malang.jpg"
              alt="SMK Telkom Malang"
              width={1365}
              height={768}
            />
          </span>
          <span>Malang</span>
          <span>and</span>
          <span>love</span>
          <span>creating</span>
          <span>cool,</span>
          <span>responsive</span>
          <span>websites.</span>
        </p>
      </article>
    </section>
  );
};

export default About;
