import React, { createContext, useContext, useMemo, useReducer } from "react";
import {
  HIDE_LOADING,
  HIDE_NOTIFICATION_SNACKBAR,
  HIDE_SNACKBAR,
  HIDE_UPDATE_SNACKBAR,
  SHOW_LOADING,
  SHOW_NOTIFICATION_SNACKBAR,
  SHOW_SNACKBAR,
  SHOW_UPDATE_SNACKBAR,
  UPDATE_APP_VERSION,
} from "../constants/action";
import { SUCCESS_TYPE } from "../constants/app";

// @ts-ignore
const SnackbarContext = createContext();
SnackbarContext.displayName = "SnackbarContext";

type SnackbarStateType = {
  openSnackbar: boolean;
  typeSnackbar: string;
  messageSnackbar: string;
  timeSnackbar: number;
  showLoading: boolean;
  appVersion: string;
  openUpdateSnackbar: boolean;
  openNotificationSnackbar: boolean;
  messageNotificationSnackbar: string;
};

type SnackbarActionType = {
  type: string;
  payload: any;
};

const reducer = (state: SnackbarStateType, action: SnackbarActionType) => {
  switch (action.type) {
    case SHOW_SNACKBAR:
      return {
        ...state,
        openSnackbar: true,
        typeSnackbar: action.payload.typeSnackbar,
        messageSnackbar: action.payload.messageSnackbar,
        timeSnackbar: action.payload.timeSnackbar || 3000,
      };
    case HIDE_SNACKBAR:
      return {
        ...state,
        openSnackbar: false,
      };
    case SHOW_UPDATE_SNACKBAR:
      return {
        ...state,
        openUpdateSnackbar: true,
      };
    case HIDE_UPDATE_SNACKBAR:
      return {
        ...state,
        openUpdateSnackbar: false,
      };
    case SHOW_LOADING:
      return {
        ...state,
        showLoading: true,
      };
    case HIDE_LOADING:
      return {
        ...state,
        showLoading: false,
      };
    case UPDATE_APP_VERSION:
      return {
        ...state,
        appVersion: action.payload,
      };
    case HIDE_NOTIFICATION_SNACKBAR:
      return {
        ...state,
        openNotificationSnackbar: false,
      };
    case SHOW_NOTIFICATION_SNACKBAR:
      return {
        ...state,
        openNotificationSnackbar: true,
        messageNotificationSnackbar: action.payload,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

function SnackbarProvider({ children }: { children: React.ReactElement }) {
  const initialState: SnackbarStateType = {
    openSnackbar: false,
    openUpdateSnackbar: false,
    openNotificationSnackbar: false,
    typeSnackbar: SUCCESS_TYPE,
    messageSnackbar: "Success",
    timeSnackbar: 3000,
    showLoading: false,
    appVersion: "1.0",
    messageNotificationSnackbar: "",
  };

  // @ts-ignore
  const [controller, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => [controller, dispatch], [controller, dispatch]);
  return <SnackbarContext.Provider value={value}>{children}</SnackbarContext.Provider>;
}

const useSnackbarController = () => {
  const context = useContext(SnackbarContext);

  if (!context) {
    throw new Error("useSnackbarController should be used inside the SnackbarContextProvider.");
  }

  return context;
};

const showSnackbar = (
  dispatch: any,
  {
    typeSnackbar,
    messageSnackbar,
    timeSnackbar,
    open,
  }: { typeSnackbar: string; messageSnackbar: any; timeSnackbar?: number; open?: boolean }
) =>
  dispatch({ type: SHOW_SNACKBAR, payload: { typeSnackbar, messageSnackbar, timeSnackbar, open } });

const hideSnackbar = (dispatch: any) => dispatch({ type: HIDE_SNACKBAR });

const showLoading = (dispatch: any) => dispatch({ type: SHOW_LOADING });

const hideLoading = (dispatch: any) => dispatch({ type: HIDE_LOADING });

const showUpdateSnackbar = (dispatch: any) => dispatch({ type: SHOW_UPDATE_SNACKBAR });

const hideUpdateSnackbar = (dispatch: any) => dispatch({ type: HIDE_UPDATE_SNACKBAR });
const updateAppVersion = (dispatch: any, { appVersion }: { appVersion: string }) =>
  dispatch({
    type: UPDATE_APP_VERSION,
    payload: appVersion,
  });
const hideNotificationSnackbar = (dispatch: any) => dispatch({ type: HIDE_NOTIFICATION_SNACKBAR });

const showNotificationSnackbar = (
  dispatch: any,
  {
    typeSnackbar,
    messageSnackbar,
  }: {
    typeSnackbar: string;
    messageSnackbar: any;
  }
) =>
  dispatch({
    type: typeSnackbar,
    payload: messageSnackbar,
  });

export {
  SnackbarProvider,
  useSnackbarController,
  showSnackbar,
  hideSnackbar,
  showLoading,
  hideLoading,
  updateAppVersion,
  showUpdateSnackbar,
  hideUpdateSnackbar,
  showNotificationSnackbar,
  hideNotificationSnackbar,
};
