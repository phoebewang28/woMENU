import React, { useState, useEffect } from "react";
import {
  Card,
  Center,
  Stack,
  Heading,
  CardBody,
  Tabs,
  TabList,
  Tab,
  Text,
} from "@chakra-ui/react";
import data from "./data.json";

const RightHand = () => {
  const [mealPlan, setMealPlan] = useState("");

  // Fetch and set the meal plan text on component mount
  useEffect(() => {
    // Assuming the JSON structure remains the same
    const text = data.candidates[0].content.parts[0].text;
    setMealPlan(text);
  }, []);

  console.log(data);

  return (
    <>
      <Card height={"auto"} minH={"100%"} w={"100%"}>
        <CardBody>
          <Stack mt="6" spacing="3" paddingX="6">
            <Center>
              <Stack>
                <Heading size="xl" textAlign={"center"}>
                  Suggested Items
                </Heading>
                
              </Stack>
            </Center>
          </Stack>

          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <pre
              style={{
                whiteSpace: "pre-wrap",
                wordWrap: "break-word",
                fontFamily: "Helvetica",
              }}
            >
              {mealPlan}
            </pre>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default RightHand;
