import { createContext, useReducer, useState } from "react";
import { contentImg } from "../assets";

export const RootContext = createContext();

const ACTION_TYPES = {};

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const IntialState = {};

export const RootContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, IntialState);

  const sectionContent = {
    1: {
      upperSec: {
        heading: ["feel special", "more often."],
        para: "exclusive rewards for paying your bills",
      },

      lowerSec: {
        para: [
          "every time you pay your credit card bills on CRED, you receive CRED coins.",
          "you can use these to win exclusive rewards or get special access to curated",
          "products and experiences. on CRED, good begets good.",
        ],
        btnText: "Explore Rewards",
      },
      backgroundImg: contentImg[1],
    },
    2: {
      upperSec: {
        heading: ["we take your money", "matters seriously."],
        para: "so that you don’t have to.",
      },

      lowerSec: {
        para: [
          "never miss a due date with reminders to help you pay your bills on time,",
          "instant settlements mean you never wait for your payments to go through",
          "and statement analysis lets you know where your money goes, always.",
        ],
        btnText: "Experience the upgrade",
      },
      backgroundImg: contentImg[2],
    },
    3: {
      upperSec: {
        heading: ["security first.", "and second."],
        para: "what’s yours remains only yours.",
      },

      lowerSec: {
        para: [
          "CRED ensures that all your personal data and transactions are encrypted,",
          "and secured so what’s yours remains only yours. there’s no room for",
          "mistakes because we didn’t leave any.",
        ],
        btnText: "Become a member",
      },
      backgroundImg: contentImg[3],
    },
  };

  return (
    <RootContext.Provider value={{ sectionContent, state }}>
      {children}
    </RootContext.Provider>
  );
};
