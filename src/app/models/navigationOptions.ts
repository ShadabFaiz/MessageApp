export const navigationOptions = [
  {
    name: "Messages",
    icon: "message",
    url: "/messages",
    childrens: [
      {
        name: "Chats",
        url: "",
        icon: ""
      },
      {
        name: "Send Messages",
        url: "",
        icon: ""
      }
    ]
  },
  {
    name: "Groups",
    icon: "group",
    url: "/groups",
    childrens: [
      {
        name: "History",
        url: "",
        icon: ""
      },
      {
        name: "Create Groups",
        url: "",
        icon: ""
      }
    ]
  },
  {
    name: "Video Calls",
    icon: "videocam",
    url: "/videoCalls",
    childrens: [
      {
        name: "History",
        url: "",
        icon: ""
      },
      {
        name: "Calls",
        url: "",
        icon: ""
      }
    ]
  }
];
