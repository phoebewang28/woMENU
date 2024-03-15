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
  SimpleGrid,
  Link,
  Tag,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

const ITEMS = [
  {
    id: 0,
    name: "Steak",
    calories: 550,
    tags: ["red_meat", "salty", "cramps"],
  },
  {
    id: 1,
    name: "Blueberries",
    calories: 50,
    tags: ["antioxidant", "fruit"],
  },
  {
    id: 2,
    name: "Quinoa",
    calories: 120,
    tags: ["healthy", "anti-cramps"],
  },
  {
    id: 3,
    name: "Chicken",
    calories: 300,
    tags: ["protein", "salty"],
  },
];

const RightHandK = () => {
  // A list of example items
  const [items, setItems] = useState(ITEMS);

  // console.log(preferences);

  return (
    <>
      <Card height={"auto"} minH={"100%"} w={"90%"}>
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

          <Tabs>
            <TabList>
              <Tab>Breakfast</Tab>
              <Tab>Lunch</Tab>
              <Tab>Dinner</Tab>
            </TabList>

            <TabPanels>
              {/* BREAKFAST */}
              <TabPanel>
                <SimpleGrid
                  spacing={4}
                  templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
                  pt={6}
                >
                  {items.map((item) => (
                    <Card key={item.id} w={"350px"}>
                      <CardBody>
                        <Heading size="md" pb={2}>
                          {item.name}
                        </Heading>
                        <Stack gap={2}>
                          <Text>{item.calories} Calories</Text>
                          <Flex gap={4}>
                            {item.tags.map((tag) => (
                              <Tag key={tag}>{tag}</Tag>
                            ))}
                          </Flex>
                        </Stack>
                      </CardBody>
                      <CardFooter>
                        <Link href="https://google.com" target="_blank">
                          <Button>Go to Menu</Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </SimpleGrid>
              </TabPanel>

              {/* LUNCH */}
              <TabPanel>
                <SimpleGrid
                  spacing={4}
                  templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
                  pt={6}
                >
                  {items.map((item) => (
                    <Card key={item.id} w={"350px"}>
                      <CardBody>
                        <Heading size="md" pb={2}>
                          {item.name}
                        </Heading>
                        <Stack gap={2}>
                          <Text>{item.calories} Calories</Text>
                          <Flex gap={4}>
                            {item.tags.map((tag) => (
                              <Tag key={tag}>{tag}</Tag>
                            ))}
                          </Flex>
                        </Stack>
                      </CardBody>
                      <CardFooter>
                        <Link href="https://google.com" target="_blank">
                          <Button>Go to Menu</Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </SimpleGrid>
              </TabPanel>

              {/* DINNER */}
              <TabPanel>
                <SimpleGrid
                  spacing={4}
                  templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
                  pt={6}
                >
                  {items.map((item) => (
                    <Card key={item.id} w={"350px"}>
                      <CardBody>
                        <Heading size="md" pb={2}>
                          {item.name}
                        </Heading>
                        <Stack gap={2}>
                          <Text>{item.calories} Calories</Text>
                          <Flex gap={4}>
                            {item.tags.map((tag) => (
                              <Tag key={tag}>{tag}</Tag>
                            ))}
                          </Flex>
                        </Stack>
                      </CardBody>
                      <CardFooter>
                        <Link href="https://google.com" target="_blank">
                          <Button>Go to Menu</Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </SimpleGrid>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </CardBody>
      </Card>
    </>
  );
};

export default RightHandK;
