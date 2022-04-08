import { TextInput, Group, ActionIcon, Box } from "@mantine/core";
import { Trash } from "tabler-icons-react";
import { Textarea, Text, Button } from "@mantine/core";
import { useForm, yupResolver, formList } from "@mantine/form";

const ProfileFormPart2 = () => {
  //   const schema = Yup.object().shape({
  //     name: Yup.string().min(2, "Name should have at least 2 letters"),
  //     email: Yup.string().email("Invalid email"),
  //     age: Yup.number().min(18, "You must be at least 18 to create an account"),
  //   });
  const form = useForm({
    // schema: yupResolver(schema),
    initialValues: {
      college_name: "",
      bio: "",
      socialLinks: formList([{ site: "", url: "" }]),
    },
  });
  const fields = form.values.socialLinks.map((_, index) => (
    <Group key={index} mb="xs">
      <TextInput
        placeholder="Social Site"
        required
        sx={{ flex: 0.6 }}
        {...form.getListInputProps("socialLinks", index, "site")}
      />
      <TextInput
        placeholder="URL to your profile"
        required
        sx={{ flex: 1 }}
        {...form.getListInputProps("socialLinks", index, "url")}
      />
      <ActionIcon
        color="red"
        variant="hover"
        onClick={() => form.removeListItem("socialLinks", index)}>
        <Trash size={16} />
      </ActionIcon>
    </Group>
  ));

  return (
    <Box sx={{ maxWidth: 400 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          label="College"
          placeholder="College name (optional)"
          {...form.getInputProps("college_name")}
        />
        <Textarea
          placeholder="A nice bio"
          label="Bio"
          {...form.getInputProps("bio")}
        />

        <Box sx={{ width: "100%" }} mt="sm">
          {fields.length > 0 ? (
            <Text weight={500} size="sm" sx={{ flex: 1 }}>
              Social Sites
            </Text>
          ) : (
            <Text color="dimmed" align="center">
              No one here...
            </Text>
          )}
          {fields}
          <Group position="center" mt="md">
            <Button
              variant="subtle"
              color="orange"
              onClick={() =>
                form.addListItem("socialLinks", { name: "", active: false })
              }>
              Add social profile
            </Button>
          </Group>
        </Box>
        {/* <Group position="apart" mt="md">
            <Group spacing="sm">
              <Button variant="outline">Prev</Button>
              <ActionIcon
                color="red"
                variant="hover"
                onClick={() => form.removeListItem("socialLinks", index)}>
                <Rotate size={16} />
              </ActionIcon>
            </Group>
            <Button type="submit">Submit</Button>
          </Group> */}
      </form>
    </Box>
  );
};

export default ProfileFormPart2;
