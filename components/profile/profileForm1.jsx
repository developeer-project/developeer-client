import { useForm } from "@mantine/hooks";
import { TextInput, Box } from "@mantine/core";

import InterestSelection from "./interesetSelector";

const ProfileFormPart1 = () => {
  const form = useForm({
    initialValues: {
      name: "",
      location: "",
      interests: [],
    },

    validate: {
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
    },
  });

  return (
    <Box sx={{ maxWidth: 400 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          label="Name"
          placeholder="Your public name"
          {...form.getInputProps("name")}
        />

        <TextInput
          mt="sm"
          mb="xs"
          label="City"
          placeholder="Name of the city"
          {...form.getInputProps("location")}
        />
        <InterestSelection {...form.getInputProps("interests")} />
        {/* <Group position="apart" mt="md">
            <Group spacing="sm">
              <Button variant="outline">Prev</Button>
              <ActionIcon
                color="red"
                variant="hover"
                onClick={() => form.removeListItem("interests", index)}>
                <Rotate size={16} />
              </ActionIcon>
            </Group>
            <Button type="submit">Submit</Button>
          </Group> */}
      </form>
    </Box>
  );
};
export default ProfileFormPart1;
