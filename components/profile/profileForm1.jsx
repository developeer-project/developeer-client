import { useForm } from "@mantine/hooks";
import { TextInput, Box, Group, Button, ActionIcon } from "@mantine/core";
import { Rotate } from "tabler-icons-react";

import { useLocalStorage } from "../../lib/utils/useLocalSt";
import InterestSelection from "./interesetSelector";

const ProfileFormPart1 = (props) => {
  const { nextStep, prevStep, saveFormData, fullFormData } = props;
  const [storedForm1, setStoredForm1] = useLocalStorage("formSaved1", {
    name: "",
    location: "",
    interests: [],
  });
  const form = useForm({
    initialValues: storedForm1,
    validate: {
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
    },
  });

  const handleFormSave = (e) => {
    e.preventDefault();
    saveFormData(form.values);
    setStoredForm1(form.values);
    nextStep();
  };

  return (
    <Box sx={{ minWidth: 400, width: "55%" }} mx="auto">
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
              onClick={() =>
                form.reset() && localStorage.removeItem("formSaved2")
              }>
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
