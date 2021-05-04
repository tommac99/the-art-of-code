import { FC } from "react";
import Lottie from "react-lottie";
import loadingHand from "../../assets/lottie/loadingHand.json";
import { Screen } from "./styles";

export const LoadingScreen: FC = () => {
  return (
    <Screen>
      <Lottie
        height={400}
        width={200}
        options={{
          autoplay: true,
          loop: true,
          animationData: loadingHand,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
      />
    </Screen>
  );
};
