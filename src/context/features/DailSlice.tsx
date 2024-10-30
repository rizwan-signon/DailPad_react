import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IState } from "../../typings/types";
const initialState: IState = {
  phoneNumber: "",
  currentCall: null,
  log: [],
};

export const DailSlice = createSlice({
  name: "Dailnumbers",
  initialState,
  reducers: {
    handleNumbers: (state, action: PayloadAction<string | number>) => {
      if (state.phoneNumber.toString().length < 11) {
        return {
          ...state,
          phoneNumber: state.phoneNumber + action.payload,
        };
      }
      return state;
    },
    handleCancel: (state) => {
      state.phoneNumber = state.phoneNumber.toString().slice(0, -1);
    },
    handleLog: (state) => {
      const newLog = {
        id: Date.now(),
        phoneNumber: state.phoneNumber,
      };
      state.log.push(newLog);
      state.currentCall = newLog;
      state.phoneNumber = "";
    },
    deleteCallLog: (state, action) => {
      state.log = state.log.filter((log) => log.id !== action.payload);
    },
  },
});

export const { handleNumbers, handleCancel, handleLog, deleteCallLog } =
  DailSlice.actions;

export default DailSlice.reducer;
