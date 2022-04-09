import { useForm } from "@mantine/hooks";
import { TextInput, Box, Group, Button, ActionIcon } from "@mantine/core";
import { Rotate } from "tabler-icons-react";
import InterestSelection from "./interesetSelector";

const ProfileFormPart1 = (props) => {
  const { nextStep, prevStep, saveFormData, fullFormData } = props;
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

  const handleFormSave = (e) => {
    e.preventDefault();
    saveFormData(form.values);
    nextStep();
  };

  return (
    <Box sx={{ maxWidth: 400 }} mx="auto">
      <form onSubmit={handleFormSave}>
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

        {/* // TODO this bottom button group is repeated in both form parts */}
        {/* // TODO make a reusable component for this if gets used again */}
        <Group position="apart" mt="lg">
          <Group spacing="sm">
            <Button variant="outline" onClick={prevStep}>
              Prev
            </Button>
            <ActionIcon
              color="red"
              variant="hover"
              onClick={() => alert("resetting")}>
              <Rotate size={16} />
            </ActionIcon>
          </Group>
          <Button type="submit" onClick={handleFormSave}>
            Next step
          </Button>
        </Group>
      </form>
    </Box>
  );
};
export default ProfileFormPart1;
