import { detectWhiteSpace, validUserRegex } from "./RegExCode";

export const validateTextField = (value: any) =>
  typeof value === "string" ? value.trim().replace(detectWhiteSpace, " ") : value;

export const isValidUser = (user: string) => !(user === null || !validUserRegex.exec(user));
