/*INFURA_PROVIDER_API_KEY*/
export const INFURA_PROVIDER_API_KEY = "b4a2bb27de814a748457eeda44339794";
/*CONTRACT*/
export const CONTRACT_ADDRESS = "0x7D59691bB93140269506dCf8270089D2F3a7c048";
export const CONTRACT_ABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "str",
        type: "string"
      }
    ],
    name: "newAnnouncement",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string"
      }
    ],
    name: "newMessage",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "str",
        type: "string"
      }
    ],
    name: "newMsg",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "announcement",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "announcementLastPaidVal",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "len",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "user",
        type: "address"
      }
    ],
    name: "showLastestMsg",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "userToMsgs",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];
