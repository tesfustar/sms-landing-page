import { Button, HStack, Input, Select, useToast } from "@chakra-ui/react";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "react-query";
import axios from "axios";

export default function OrderForm({ onClose, plan, type, period }) {
  //Hook
  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      BusinessName: "",
      PhoneNumber: "",
      Email: "",
      SelectPlan: "" || plan,
      ServiceType: "" || type,
      SubscriptionPeriod: "" || period,
      AmountofSMS: "",
    },
    initialStatus: true,
    validationSchema: Yup.object({
      BusinessName: Yup.string()
        .min(1, "Must be atleaset 1 characters")
        .required("Required"),
      PhoneNumber: Yup.string()
        .min(1, "Must be atleaset 1 characters")
        .required("Required"),
      Email: Yup.string().email("Invalid email address").required("Required"),
      SelectPlan: Yup.string().required("Required"),
      ServiceType: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      toast({
        title: "Please wait...",
        status: "info",
        duration: 1800,
        isClosable: true,
      });
      //   alert(JSON.stringify(values, null, 2));
      OrderSubmitHandler(values);
    },
  });

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  // https://email.jaktech.com.et/
  const OrderMutation = useMutation(
    async (newData) =>
      await axios.post("https://mail.smsethiopia.com/api/send", newData, {
        headers,
      }),
    {
      retry: false,
    }
  );

  const OrderSubmitHandler = async (values) => {
    const {
      BusinessName,
      PhoneNumber,
      Email,
      SelectPlan,
      ServiceType,
      SubscriptionPeriod,
      AmountofSMS,
    } = values;
    try {
      OrderMutation.mutate(
        {
          from: Email,
          to: "hello@smsethiopia.com",
          subject: "smsethiopia new request for " + SelectPlan,
          body: `<b>Order Request for</b> ${SelectPlan} 
          <br/>
          <b>Service type:</b> ${ServiceType}
          <br/>
          <b>Business Name:</b> ${BusinessName}
          <br/>
          <b>Phone Number:</b> ${PhoneNumber}
          <br/> 
          <b>Email:</b> ${Email} 
          <br/>
          <b>Subscription type:</b> ${SubscriptionPeriod}
          <br/>
          <b>Amount of Sms:</b> ${AmountofSMS}`,
          footnote: "Regards,",
        },
        {
          onSuccess: (res) => {
            toast({
              title: "Order success",
              description:
                "Your order has been submitted successfully! We will contact you in a few minutes.",
              status: "success",
              duration: 1800,
              isClosable: true,
            });
            onClose();
          },
          onError: (err) => {
            toast({
              title: "Order Unsuccess",
              description: "PLease try again...",
              status: "error",
              duration: 1800,
              isClosable: true,
            });
          },
        }
      );
    } catch (err) {
      toast({
        title: "Order Unsuccess",
        description: "PLease try again...",
        status: "error",
        duration: 1800,
        isClosable: true,
      });
    }
  };

  console.log("log: ", OrderMutation);

  //Jsx
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        onSubmit={formik.handleSubmit}
      >
        <Input
          id="BusinessName"
          placeholder="Business Name"
          variant={"flushed"}
          onChange={formik.handleChange}
          value={formik.values.BusinessName}
        />
        <Input
          id="PhoneNumber"
          placeholder="Phone Number"
          variant={"flushed"}
          onChange={formik.handleChange}
          value={formik.values.PhoneNumber}
        />
        <Input
          id="Email"
          placeholder="Email"
          variant={"flushed"}
          onChange={formik.handleChange}
          value={formik.values.Email}
        />
        <Select
          id="SelectPlan"
          variant={"flushed"}
          placeholder="Select Plan"
          onChange={formik.handleChange}
          value={formik.values.SelectPlan}
        >
          <option value="Prepaid">Prepaid</option>
          <option value="Postpaid">Postpaid</option>
        </Select>
        <Select
          id="ServiceType"
          variant={"flushed"}
          placeholder="Service Type"
          onChange={formik.handleChange}
          value={formik.values.ServiceType}
        >
          <option value="Endpoint API">Endpoint API</option>
          <option value="Dashboard">Dashboard</option>
        </Select>
        {formik.values.SelectPlan == "Prepaid" && (
          <Select
            id="SubscriptionPeriod"
            variant={"flushed"}
            placeholder="Subscription Period"
            onChange={formik.handleChange}
            value={formik.values.SubscriptionPeriod}
          >
            <option value="1">1 Month</option>
            <option value="3">3 Month</option>
            <option value="6">6 Month</option>
          </Select>
        )}
        {formik.values.SelectPlan == "Prepaid" &&
          (formik.values.SubscriptionPeriod == "1" ? (
            <Select
              id="AmountofSMS"
              variant={"flushed"}
              placeholder="Amount of SMS"
              onChange={formik.handleChange}
              value={formik.values.AmountofSMS}
            >
              <option value="<200K">{"<200K"}</option>
              <option value="100K - 200K">100K - 200K</option>
              <option value="50K - 100K">50K - 100K</option>
              <option value="10K - 50K">10K - 50K</option>
              <option value=">10K">{">10K"}</option>
            </Select>
          ) : (
            <Select
              id="AmountofSMS"
              variant={"flushed"}
              placeholder="Amount of SMS"
              onChange={formik.handleChange}
              value={formik.values.AmountofSMS}
            >
              <option value="<100K">{"<100K"}</option>
              <option value="100K - 500K">100K - 500K</option>
              <option value=">500K">{">500K"}</option>
            </Select>
          ))}
        <HStack alignSelf={"flex-end"} pt={4} spacing={4}>
          <Button onClick={onClose}>Close</Button>
          <Button colorScheme={"facebook"} type="submit">
            Submit
          </Button>
        </HStack>
      </form>
    </div>
  );
}
