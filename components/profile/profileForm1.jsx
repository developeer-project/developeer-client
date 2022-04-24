import { useForm } from "@mantine/hooks";
import { TextInput, Box, Group, Button, ActionIcon, MultiSelect } from "@mantine/core";
import { Rotate } from "tabler-icons-react";
import { useState } from "react";
import { useLocalStorage } from "../../lib/utils/useLocalSt";
import { useSession } from "next-auth/react";
import InterestSelection from "./interesetSelector";

const ProfileFormPart1 = (props) => {
  const { nextStep, prevStep, saveFormData, fullFormData, arr, arr_skills } = props;
  const [skillsData, setSkillsData] = useState(arr_skills);
  const [storedForm1, setStoredForm1] = useLocalStorage("formSaved1", {
    name: "",
    location: "",
    interests: [],
  });
  
  const { data: session, status: authStatus } = useSession();

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
  const value = "pandyamaulik2001@gmail.com"
  return (
    <Box sx={{ minWidth: 400, width: "55%" }} mx="auto">
      <form onSubmit={handleFormSave}>
        <TextInput
          label="Name"
          placeholder="Your public name"
          required
          {...form.getInputProps("name")}
        />
        <TextInput
          label="Email"
          required
          value = {session ? session.user.email : null}          
          placeholder="Your email"
          {...form.getInputProps("email")}
        />

        <TextInput
          mt="sm"
          mb="xs"
          label="City"
          placeholder="Name of the city"
          required
          {...form.getInputProps("location")}
        />
        <InterestSelection required {...form.getInputProps("interests")} arr={arr} />

        <MultiSelect
                style={{ height: "80px" }}
                label="Skills"
                {...form.getInputProps("skills")}
                data={skillsData}
                placeholder="Select items"
                required
                searchable
                creatable
                getCreateLabel={(query) => `+ Create ${query}`}
                onCreate={(query) => setSkillsData((current) => [...current, query])}
              />

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
