import { useState } from "react";
import { Button, Box, Group, ActionIcon, Center } from "@mantine/core";
import { Rotate } from "tabler-icons-react";
import { Stepper } from "@mantine/core";
import axios from "axios";
import { useSession } from "next-auth/react";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

import ProfileFormPart1 from "../../components/profile/profileForm1";
import ProfileFormPart2 from "../../components/profile/profileForm2";
import ProjectForm from "../../components/profile/projectForm";

function ActivateProfileForm({ arr, arr_skills }) {
  // console.log("ARRR:  ",arr)
  const { data: session, status: authStatus } = useSession();

  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
  const [formData, setFormData] = useState({});
  const router = useRouter();

  const saveData = (data) => {
    console.log("save global form ", data);
    setFormData({ ...formData, ...data });
    R;
  };

  const handleSubmit = async () => {
    try {
      await axios.post("/api/register", formData);
      router.push("/");
    } catch (e) {
      console.error(e);
    }
    localStorage.removeItem("formSaved1");
    localStorage.removeItem("formSaved2");
    localStorage.removeItem("formSavedProjects");
  };
  // console.log("Sessionnnnn:  ",session)
  return (
    <div
      style={{
        marginTop: "16vh",
      }}>
      <Box mx="auto" style={{ width: "55%", minWidth: "400px" }}>
        <Stepper
          size="md"
          active={active}
          onStepClick={setActive}
          breakpoint="sm">
          <Stepper.Step
            label="Fist step"
            description="Create an account"
            allowStepSelect={active > 0}>
            <ProfileFormPart1
              saveFormData={saveData}
              nextStep={nextStep}
              prevStep={prevStep}
              arr={arr}
              arr_skills={arr_skills}
            />
          </Stepper.Step>
          <Stepper.Step
            label="Second step"
            description="Verify email"
            allowStepSelect={active > 1}>
            <ProfileFormPart2
              saveFormData={saveData}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          </Stepper.Step>
          <Stepper.Step
            label="Final step"
            description="Get full access"
            allowStepSelect={active > 2}>
            <ProjectForm
              saveFormData={saveData}
              nextStep={nextStep}
              prevStep={prevStep}
              arr={arr}
            />
          </Stepper.Step>
          <Stepper.Completed>
            <Center style={{ margin: "14% auto" }}>
              <Button onClick={handleSubmit}>Submit form</Button>
            </Center>
          </Stepper.Completed>
        </Stepper>
        {/* <Group position="apart" mt="lg">
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
          <Button onClick={nextStep}>Next step</Button>
        </Group> */}
      </Box>
    </div>
  );
}

export default ActivateProfileForm;
export async function getServerSideProps() {
  const res = await (
    await fetch(`${process.env.NEXTAUTH_URL}/api/getTechStack/`)
  ).json();
  const res_skills = await (
    await fetch(`${process.env.NEXTAUTH_URL}/api/getSkills/`)
  ).json();
  console.log("RES___:::", res);
  const arr = [];
  const arr_skills = [];
  for (let i = 0; i < res.length; i++) {
    arr.push(res[i].tech_stack);
  }
  for (let i = 0; i < res_skills.length; i++) {
    arr_skills.push(res_skills[i].skill);
  }
  return {
    props: {
      arr,
      arr_skills,
    },
  };
}
