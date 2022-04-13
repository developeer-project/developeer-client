import { TextInput, Group, ActionIcon, Box } from "@mantine/core";
import { Trash } from "tabler-icons-react";
import { Textarea, Text, Button } from "@mantine/core";
import { useForm, yupResolver, formList } from "@mantine/form";
import {
  Rotate,
  BrandGithub,
  BrandLinkedin,
  BrandTwitter,
} from "tabler-icons-react";

import { useLocalStorage } from "../../lib/utils/useLocalSt";

const ProfileFormPart2 = (props) => {
  const { nextStep, prevStep, saveFormData, fullFormData } = props;
  const [storedForm2, setStoredForm2] = useLocalStorage("formSaved2", {
    college_name: "",
    bio: "",
    linkedInProfile: "",
    githubProfile: "",
    twitterProfile: "",
  });

  //   const schema = Yup.object().shape({
  //     name: Yup.string().min(2, "Name should have at least 2 letters"),
  //     email: Yup.string().email("Invalid email"),
  //     age: Yup.number().min(18, "You must be at least 18 to create an account"),
  //   });

  const form = useForm({
    // schema: yupResolver(schema),
    initialValues: storedForm2,
  });

  const handleFormSave = (e) => {
    e.preventDefault();
    saveFormData(form.values);
    setStoredForm2(form.values);
    nextStep();
  };

  return (
    <Box sx={{ minWidth: 400, width: "55%" }} mx="auto">
      <form onSubmit={handleFormSave}>
        <TextInput
          label="College"
          mb="xs"
          placeholder="College name (optional)"
          {...form.getInputProps("college_name")}
        />
        <Textarea
          placeholder="A nice bio"
          mb="xs"
          label="Bio"
          {...form.getInputProps("bio")}
        />
        <TextInput
          label="Github profile"
          mb="xs"
          icon={<BrandGithub />}
          placeholder="Github profile (optional)"
          {...form.getInputProps("githubProfile")}
        />
        <TextInput
          label="LinkedIn profile"
          mb="xs"
          icon={<BrandLinkedin />}
          placeholder="LinkedIn profile (optional)"
          {...form.getInputProps("linkedInProfile")}
        />
        <TextInput
          label="Twitter profile"
          icon={<BrandTwitter />}
          mb="xs"
          placeholder="Twitter profile (optional)"
          {...form.getInputProps("twitterProfile")}
        />

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
          <Button onClick={handleFormSave}>Next step</Button>
        </Group>
      </form>
    </Box>
  );
};

export default ProfileFormPart2;

// unit 3 , 4 AI
// unit 3,4 , CRC unit 2 CN
