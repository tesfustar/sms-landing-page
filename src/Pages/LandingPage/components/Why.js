import { Box, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";

export default function Why() {
  //Hook

  //Function
  function GridItems({ icon, title, body }) {
    return (
      <Stack w={"90%"} alignItems={{ base: "center", md: "flex-start" }}>
        <Image
          boxSize="75px"
          objectFit="cover"
          src={require(`../../../assets/why/${icon}`)}
        />
        <Heading fontSize={"lg"} fontWeight={"bold"}>
          {title}
        </Heading>
        <Text fontSize={"sm"}>{body}</Text>
      </Stack>
    );
  }

  function GridSection() {
    return (
      <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={6}>
        {Data?.map((data, index) => (
          <GridItems
            key={index}
            icon={data?.icon}
            title={data?.title}
            body={data?.body}
          />
        ))}
      </SimpleGrid>
    );
  }

  //Jsx
  return (
    <Stack
      px={{ base: 6, md: 24 }}
      py={12}
      alignItems={"center"}
      bg={"#F6F6F6"}
      spacing={16}
    >
      <Stack alignItems={"center"}>
        <Heading>Why Choose SMS Ethiopia</Heading>
        <Text>
          By using the professional SMS, you engage in a digital communication
          that aims to create a real link between your customers and your brand.
        </Text>
      </Stack>
      <GridSection />
    </Stack>
  );
}

const Data = [
  {
    icon: "Reminders.png",
    title: "Reminders",
    body: `Sending your customers reminders about their appointments helps reduce wasted bookings and makes it easier for them to reschedule. This could be Booking reservations, travel tickets etc…`,
  },
  {
    icon: "FAAuthentication.png",
    title: "2FA (Two-factor Authentication)",
    body: "Two-factor authentication (2FA) sends a OTP(One Time Passwords) to a person's mobile phone when they try logging into one of their accounts. This enables you to add a second layer of security to your digital products easily.",
  },
  {
    icon: "Alertsandnotifications.png",
    title: "Alerts and notifications",
    body: `use SMS texts to alert patients, passengers, customers about immediate emergencies or announcements. You can also send alerts to individuals about any unusual activity to keep the customer safe and foster trust in your service.`,
  },
  {
    icon: "Customer.png",
    title: "Customer Relationship Management Service",
    body: `A2P SMS is a very powerful value-add option for customers already engaged with a brand. You can build and manage your customer relationship practice by letting them know you care about them and help you create customer loyalty.`,
  },
  {
    icon: "Promotional.png",
    title: "Promotional and Marketing Service",
    body: `One of the most effective ways to engage with your customers is through SMS marketing campaigns. You can also send contents to a subscriber based on a prior enquiry to let them know the product or service is available.`,
  },
  {
    icon: "Pushed.png",
    title: "Pushed Content Service",
    body: `These could be sent to confirm a certain action a customer performed e.g. booking confirmation, purchase confirmation, Payment confirmation etc. Online shopping, especially when it's for digital items like tickets, benefits greatly when confirmed via SMS.`,
  },
];
