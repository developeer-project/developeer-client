import { Title } from "@mantine/core";
import { Button } from "@mantine/core";

const profile = () => {
  return (
    <div>
      <Title>Profile page</Title>
      <Button component="a" href="/app/activate-profile" variant="outline">
        Update profile
      </Button>
    </div>
  );
};

export default profile;
