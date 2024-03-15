import React, { useState } from "react";
import {
  Image,
  Card,
  Center,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  CardHeader,
  CardBody,
  CardFooter,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";

const LeftHand = () => {
  // A list of the user's preferences
  const [preferences, setPreferences] = useState([]);

  return (
    <>
      <Card maxW="md" height={"auto"} minH={"100%"}>
        <CardBody>
          <Image src="/images/woMENU_logo.png" alt="WOMENU" borderRadius="lg" />

          <Stack mt="6" spacing="3" paddingX="6">
            <Center>
              <Stack>
                <Text size="sm" textAlign={"center"}>
                  a curated menu for your period :D
                </Text>
              </Stack>
            </Center>

            <Stack paddingTop="6">
              <Text fontSize="20px">your preferences</Text>
              <CheckboxGroup
                colorScheme="green"
                defaultValue={[]}
                onChange={setPreferences}
              >
                <Stack spacing={[1, 5]} direction={["column"]}>
                  <Checkbox value="iron">Add Iron</Checkbox>
                  <Checkbox value="omega3">Add Omega3</Checkbox>
                  <Checkbox value="antiox">Add Antioxidants</Checkbox>
                  <Checkbox value="bloating">Avoid Bloating</Checkbox>
                  <Checkbox value="red_meat">Avoid Red Meat</Checkbox>
                  <Checkbox value="salty_foods">Avoid Salt</Checkbox>
                  <Checkbox value="sweets">Sweet Treat!</Checkbox>
                </Stack>
              </CheckboxGroup>
            </Stack>
          </Stack>
        </CardBody>

        <Center>
          <CardFooter>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Image src="/images/favicon.ico" width={10} rounded={5} />
              <Text fontWeight={600}>Made with USC's Campus Dining Menu</Text>
            </div>
          </CardFooter>
        </Center>
      </Card>
    </>
  );
};

export default LeftHand;
