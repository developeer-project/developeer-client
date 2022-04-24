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
  Textarea,
  MultiSelect,
  Card,
} from "@mantine/core";
import { useForm } from "@mantine/hooks";
import { PlaylistAdd, LivePhoto, Rotate } from "tabler-icons-react";

import ProjectInfoCard from "./ProjectInfoCard";
// import Card from "../search-page/projects/Card";
import styles from "../../styles/projectform.module.scss";
import { useLocalStorage } from "../../lib/utils/useLocalSt";

const ProjectForm = (props) => {
  const { saveFormData, nextStep, prevStep } = props;

  const [modalActive, setModalActive] = useState(false);
  const [savedProjects, setSavedProjects] = useLocalStorage(
    "formSavedProjects",
    []
  );
  const [projects, setProjects] = useState(savedProjects);

  const newTrigger = () => {
    setModalActive(true);
  };

  const handleSubmit = (projData) => {
    console.log("incoming project data", projData);
    setProjects([...projects, projData]);
    setSavedProjects([...projects, projData]);
  };

  useEffect(() => {
    saveFormData({ projects });
  }, [projects]);

  return (
    <>
      <Modal
        centered
        size="lg"
        transition="scale"
        opened={modalActive}
        onClose={() => setModalActive(false)}
        withCloseButton={false}
        title="Add a new project">
        <ModalContent modalControl={setModalActive} submitFn={handleSubmit} arr={props.arr}  />
      </Modal>

      <div className={styles.root_container}>
        <Group direction="row" spacing="md">
          {projects.map((project, index) => (
            <ProjectInfoCard project={project} key={index} />
          ))}
          <NewProjectButton cb={newTrigger} />
        </Group>
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
          <Button type="submit" onClick={(e) => projects.length && nextStep()}>
            Next step
          </Button>
        </Group>
      </div>
    </>
  );
};

export default ProjectForm;

function ModalContent({ submitFn, modalControl, arr}) {
  const fileInputRef = useRef();
  const [data, setData] = useState(arr);

  const handleChange = () => {
    // do something with event data
  };
  const form = useForm({
    initialValues: {
      title: "",
      link: "",
      repo_link: "",
      description: "",
      tech_stack: [],
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const handleSave = (e) => {
    e.preventDefault();
    submitFn(form.values);
    modalControl(false);
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
                style={{ height: "80px" }}
                label="Tech stack"
                {...form.getInputProps("tech_stack")}
                data={data}
                placeholder="Select items"
                searchable
                creatable
                getCreateLabel={(query) => `+ Create ${query}`}
                onCreate={(query) => setData((current) => [...current, query])}
              />
              {/* <InterestSelection {...form.getInputProps("interests")} arr={arr} /> */}
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
                {...form.getInputProps("repo_link")}
                mb="sm"
              />
              <Textarea
                placeholder="A short description about this project"
                label="Description"
                mb="sm"
                {...form.getInputProps("description")}
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
