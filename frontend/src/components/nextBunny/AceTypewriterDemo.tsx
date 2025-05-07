import AceTypewriter from "@/components/nextBunny/AceTypewriter";
export default function AceTypewriterDemo() {
  const words = [{
    text: "Build"
  }, {
    text: "awesome"
  }, {
    text: "apps"
  }, {
    text: "with"
  }, {
    text: "Nextbunny.",
    className: "text-primary"
  }];
  return <div className="flex flex-col items-center justify-center h-[40rem]">
      <p className="text-muted-foreground text-base mb-10">
        The road to freedom starts from here
      </p>
      <AceTypewriter words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <button className="w-40 h-10 rounded-xl border border-input text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-primary text-primary-foreground border border-input text-sm">
          Signup
        </button>
      </div>
    </div>;
}