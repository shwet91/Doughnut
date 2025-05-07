import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ChatState = {
  chatBar: {
    activeState?: string;
  };
  channelBar: {
    activeState: string;
    type: string;
    room: string;
  };
  chatBox: {};
};

const initialState: ChatState = {
  chatBar: {
    activeState: "",
  },
  channelBar: {
    activeState: "Friend_id",
    type: "DM",
    room: "roomId",
  },
  chatBox: {},
};

const sectionSlice = createSlice({
  name: "section",
  initialState,
  reducers: {
    updateChatBar: (
      state: ChatState,
      action: PayloadAction<{ activeState?: string }>
    ) => {
      if (action.payload.activeState !== undefined) {
        state.chatBar.activeState = action.payload.activeState;
      }
    },
    updateChannelBar: (
        state: ChatState,
        action: PayloadAction<{ activeState?: string }>
      ) => {
        if (action.payload.activeState !== undefined) {
          state.channelBar.activeState = action.payload.activeState;
        }
      },
  },
});

export const { updateChatBar , updateChannelBar } = sectionSlice.actions;
export default sectionSlice.reducer;
