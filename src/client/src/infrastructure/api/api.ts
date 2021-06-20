import axios from "axios";

export interface IError {
  error: Error;
}

export interface IData {
  data: unknown;
}

export const getDrives = async (): Promise<IData | IError> => {
  try {
    const response = await axios.post<unknown>("/api/getDrives");
    if (response.status !== 200) {
      return { error: new Error("Get drives list API call failure") };
    }
    return { data: response.data };
  } catch (e) {
    return { error: new Error(e as string) };
  }
};
