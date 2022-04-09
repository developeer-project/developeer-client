import React, { useState, useRef, useEffect } from "react";
import {
  Button,
  Group,
  Container,
  Text,
  ActionIcon,
  Divider,
  Modal,
  TextInput,
  Box,
  Checkbox,
  Textarea,
  MultiSelect,
  Paper,
} from "@mantine/core";
import { useForm } from "@mantine/hooks";
import { PlaylistAdd, LivePhoto } from "tabler-icons-react";
// import { Dropzone } from "@mantine/dropzone";

import styles from "../../styles/projectform.module.scss";

const ProjectForm = (props) => {
  const { saveFormData, nextStep, prevStep } = props;
  const [modalActive, setModalActive] = useState(false);
  const [projects, setProjects] = useState([]);

  const newTrigger = () => {
    setModalActive(true);
  };

  const handleSubmit = (projData) => {
    console.log("incoming project data", projData);
    setProjects([...projects, projData]);
  };

  useEffect(() => {
    saveFormData({ projects });
  }, [projects]);

  return (
    <>
      <Modal
        centered
        size="md"
        transition="scale"
        opened={modalActive}
        onClose={() => setModalActive(false)}
        title="Add a new project">
        <ModalContent submitFn={handleSubmit} />
      </Modal>
      <div className={styles.root_container}>
        <Text mx="auto" align="center" weight={500}>
          Add projects
        </Text>

        <div>
          <NewProjectButton cb={newTrigger} />
        </div>
        <div>
          <Button onClick={nextStep}> next </Button>
        </div>
      </div>
    </>
  );
};

export default ProjectForm;

function ModalContent({ submitFn }) {
  const fileInputRef = useRef();
  const [data, setData] = useState(["React", "Angular", "Svelte", "Vue"]);
  const handleChange = () => {
    // do something with event data
  };
  const form = useForm({
    initialValues: {
      email: "",
      title: "",
      link: "",
      repo: "",
      description: "",
      techStack: [],
      inProfile: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const handleSave = (e) => {
    e.preventDefault();
    submitFn(form.values);
  };

  return (
    <>
      <Container px="xs" fluid>
        <form onSubmit={handleSave}>
          <Group direction="row" position="center" spacing="md">
            <div
              className={styles.div_top}
              onClick={() => fileInputRef.current.click()}>
              <input
                onChange={handleChange}
                multiple={false}
                ref={fileInputRef}
                type="file"
                hidden
              />
              <ActionIcon my="54px" mx="auto">
                <LivePhoto />
              </ActionIcon>
            </div>
            <div
              className={styles.div_top}
              style={{ flexGrow: 1, border: "none", height: "70%" }}>
              <MultiSelect
                label="Tech stack"
                {...form.getInputProps("techStack")}
                data={data}
                placeholder="Select items"
                searchable
                creatable
                getCreateLabel={(query) => `+ Create ${query}`}
                onCreate={(query) => setData((current) => [...current, query])}
              />
            </div>
          </Group>
          <Divider my="sm" variant="dotted" />
          <Group direction="column" spacing="md">
            <Box sx={{ width: "100%" }}>
              <TextInput
                required
                label="Title"
                placeholder="Project title"
                {...form.getInputProps("title")}
                mb="sm"
              />
              <TextInput
                required
                label="Link"
                placeholder="Project link"
                {...form.getInputProps("link")}
                mb="sm"
              />
              <TextInput
                required
                label="Repo"
                placeholder="Project repo"
                {...form.getInputProps("repo")}
                mb="sm"
              />
              <Textarea
                placeholder="A short description about this project"
                label="Description"
                mb="sm"
                {...form.getInputProps("description")}
              />
              <Checkbox
                mt="md"
                label="Showcase on profile"
                {...form.getInputProps("inProfile", { type: "checkbox" })}
              />

              <Group position="right" mt="md">
                <Button type="submit">Submit</Button>
              </Group>
            </Box>
          </Group>
        </form>
      </Container>
    </>
  );
}

const NewProjectButton = ({ cb }) => (
  <div onClick={cb} className={styles.new_project__btn}>
    <ActionIcon mx="auto">
      <PlaylistAdd />
    </ActionIcon>
  </div>
);
