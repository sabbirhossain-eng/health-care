import { Card, CardHeader } from "@material-tailwind/react";
import Container from "../Shared/Container/Container";

const Banner = () => {
  return (
    <div>
      <Container>
        <Card
          className="relative grid h-[30rem] w-full max-w-full items-end justify-center overflow-hidden rounded-3xl"
        >
          <CardHeader
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full rounded-3xl bg-[url('https://i.ibb.co/sPF5NBR/Banner.png')] bg-cover bg-center"
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-primary/40 via-primary/15" />
          </CardHeader>
        </Card>
      </Container>
    </div>
  );
};

export default Banner;
