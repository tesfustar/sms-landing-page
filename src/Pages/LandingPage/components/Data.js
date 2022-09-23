export const planData = [
  {
    id: 1,
    header: "Starter",
    type: "Free",
    description:
      "Create a Free account and experience the power of our messaging platform.",
    privilages: [
      {
        id: 1,
        title: "5 SMS",
      },
      {
        id: 2,
        title: "No Custom Sender Name",
        hover:
          "The message you send will have your company's name as a Sender Name",
      },
      {
        id: 3,
        title: "Watermark on Message",
      },
      {
        id: 4,
        title: "No Excel Upload",
      },
      {
        id: 5,
        title: "No SMART SMS",
      },
      {
        id: 6,
        title: "No Scheduling",
      },
    ],
    btn: "Start free trial",
  },
  {
    id: 2,
    header: "Basic",
    planId: "72a93efd-42cf-3201-9d61-79d0046827ec",
    type: "10,000",
    description:
      "Choose this plan if you want to send announcements and one-time promotional messages.",
    price: "0.4",
    privilages: [
      {
        id: 1,
        title: "Company Sender Name ",
        hover:
          "The message you send will have your company's name as a Sender Name",
        avalabile: true,
      },
      {
        id: 2,
        title: "No Watermark on Message",
        hover:"This limit is only for Trial Account users",
        avalabile: true,
      },
      {
        id: 3,
        title: "Excel Upload ",
        hover:
          "Simply import phone numbers directly from an Excel sheet to send bulk SMS",
        avalabile: false,
      },
      {
        id: 4,
        title: "SMART SMS ",
        hover:
          "SMART SMS enables you to send customized message to each recipient without the need to write different message for each number",
        avalabile: false,
      },
      {
        id: 5,
        title: "Scheduling ",
        hover:
          "This allows you to schedule messages to be sent on certain date & time",
        avalabile: false,
      },
    ],
    btn: "Start",
  },
  {
    id: 3,
    planId: "1b4ab747-87ad-3cb8-a179-286f8eb25b06",
    header: "Business",
    type: "50,000",
    description:
      "This plan is perfect for businesses that broadcast messages to their audience more frequently.",
    price: "0.35",
    privilages: [
      {
        id: 1,
        title: "Company Sender Name ",
        hover:
          "The message you send will have your company's name as a Sender Name",
        avalabile: true,
      },
      {
        id: 2,
        title: "No Watermark on Message",
        avalabile: true,
        hover:"This limit is only for Trial Account users",
      },
      {
        id: 3,
        title: "Excel Upload ",
        hover:
          "Simply import phone numbers directly from an Excel sheet to send bulk SMS",
        avalabile: false,
      },
      {
        id: 4,
        title: "SMART SMS ",
        hover:
          "SMART SMS enables you to send customized message to each recipient without the need to write different message for each number",
        avalabile: false,
      },
      {
        id: 5,
        title: "Scheduling ",
        hover:
          "This allows you to schedule messages to be sent on certain date & time",
        avalabile: false,
      },
    ],
    btn: "Start",
  },

  {
    id: 4,
    header: "Enterprise",
    planId: "8fd2e340-03c5-3d1d-a2b1-123b58954108",
    type: "Custom",
    description:
      "For Businesses that aim to reach a larger audience we have special discounted offers based on your needs.",
    price: "Contact Us",
    privilages: [
      {
        id: 1,
        title: "Pay as you go",
      },
      {
        id: 2,
        title: "Flexible pricing",
      },
    ],
    btn: "Contact Us",
  },
];
