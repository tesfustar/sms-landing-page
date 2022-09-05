import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Stack,
  Heading,
  Text,
  HStack,
} from "@chakra-ui/react";
import { BsBank2 } from "react-icons/bs";
import { MdOutlinePayments } from "react-icons/md";

export default function TableComponent({ Data }) {
  //Hook

  //Function
  function TRComp({ data }) {
    return (
      <Tr>
        {data?.sub?.map((data, index) => {
          return <Td key={index}>{data}</Td>;
        })}
      </Tr>
    );
  }

  function CutomTable() {
    return (
      <TableContainer rounded={"md"}>
        <Table size={"lg"} variant="striped" colorScheme="blackAlpha">
          <Thead bg={"#313D6A"}>
            <Tr>
              <Th color={"white"}>No of SMS</Th>
              <Th color={"white"}>Price Per SMS</Th>
              <Th color={"white"}>Period</Th>
              <Th color={"white"}>Customer Support</Th>
              <Th color={"white"}>Trainig</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Data?.map((data, index) => {
              return <TRComp key={index} data={data} />;
            })}
          </Tbody>
        </Table>
      </TableContainer>
    );
  }

  function PrePlansComp() {
    return (
      <Stack>
        <Text>
          As the name suggests, postpaid mobile plans are paid after the usage
          of the service. The customer shall pay for the bills collected at the
          end of the month. the Customer shall provide the Supplier with a
          security deposit in the form of a [bank guarantee] / [cash deposits]
          for the payment of charges under this Agreement (the "Security
          Deposit"). Here the payment plan for SMS will be 1birr/sms. The
          supplier will prepare bills based on the Traffic report prepared by
          the supplier.
        </Text>
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={8}
          px={2}
          py={4}
        >
          <CustCard
            title="Deposit"
            icon={<BsBank2 color={"#FAC119"} size={20} />}
            amount="10,000"
            footer="end of the month."
          />
          <CustCard
            title="Payment"
            icon={<MdOutlinePayments color={"#FAC119"} size={20} />}
            amount="1"
            footer="birr/sms"
          />
        </Stack>
      </Stack>
    );

    function CustCard({ title, amount, icon, footer }) {
      return (
        <Stack
          bg={"#313D6A"}
          rounded={"lg"}
          boxShadow={"dark-lg"}
          px={8}
          py={3}
        >
          <HStack justifyContent={"space-between"} spacing={12}>
            <Heading fontSize={"2xl"} fontWeight={"bold"}>
              {title}
            </Heading>
            {icon}
          </HStack>
          <Text fontSize={"xs"} fontWeight={"normal"} color={"#FAC119"}>
            birr
          </Text>
          <Text fontSize={"2xl"} fontWeight={"semibold"}>
            {amount}
          </Text>
          <Text fontSize={"sm"} fontWeight={"normal"} color={"#FAC119"}>
            {footer}
          </Text>
        </Stack>
      );
    }
  }

  //Jsx
  return (
    <Stack
      boxShadow={"dark-lg"}
      px={4}
      py={3}
      spacing={4}
      rounded={"md"}
      variant="striped"
      colorScheme={"teal"}
      bg={"#202B52"}
      w={"100%"}
    >
      <Heading fontWeight={"semibold"} fontSize={"2xl"}>
        Prepaid Plans
      </Heading>
      <Text fontWeight={"hairline"} fontSize={"sm"}>
        (Prepaid mobile plans are paid in advance of usage. The customer shall
        page for the packages during subscription)
      </Text>
      {Data.length != 0 ? <CutomTable /> : <PrePlansComp />}
    </Stack>
  );
}
