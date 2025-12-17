import Hero from "@/components/sections/how-it-works/hero";
import StepOne from "@/components/sections/how-it-works/step-one";
import StepTwo from "@/components/sections/how-it-works/step-two";
import StepThree from "@/components/sections/how-it-works/step-three";
import StepFour from "@/components/sections/how-it-works/step-four";
import StepFive from "@/components/sections/how-it-works/step-five";
import Join from "@/components/sections/home/join";

export default function Page() {
  return (
    <>
      <Hero />
      <StepOne />
      <StepTwo />
      <StepThree />
      <StepFour />
      <StepFive />
      <Join />
    </>
  );
}
