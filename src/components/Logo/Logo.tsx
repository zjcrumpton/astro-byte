import { Share_Tech_Mono } from "next/font/google";
const shareTech = Share_Tech_Mono({ subsets: ["latin"], weight: "400" });

export const Logo = () => {
  return (
    <h1
      className={`${shareTech.className} cursor-pointer text-3xl hover:drop-shadow-glow hover:text-glow-blue font-bold`}
    >
      AstroByte
    </h1>
  );
};
