import { useState } from "react";
import { Button, Box, Group, ActionIcon } from "@mantine/core";
import { Rotate } from "tabler-icons-react";
import { Stepper } from "@mantine/core";

import ProfileFormPart1 from "../../components/profile/profileForm1";
import ProfileFormPart2 from "../../components/profile/profileForm2";
import axios from "axios";

function ActivateProfileForm() {
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
  const [formData, setFormData] = useState({});

  const saveData = (data) => {
    setFormData({ ...formData, ...data });
  };

  const handleSubmit = async () => {
    try {
      await axios.post("/api/test", formData);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Box mx="auto" style={{ width: "45%", minWidth: "400px" }}>
        <Stepper active={active} onStepClick={setActive} breakpoint="sm">
          <Stepper.Step
            label="Fist step"
            description="Create an account"
            allowStepSelect={active > 0}>
            <ProfileFormPart1
              saveFormData={saveData}
              nextStep={nextStep}
              prevStep={prevStep}
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
            Step 3 content: Get full access
            <button onClick={handleSubmit}>Submit form</button>
          </Stepper.Step>
          <Stepper.Completed>
            Completed, click back button to get to previous step
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
    </>
  );
}

export default ActivateProfileForm;