import { getDiskInfo } from "node-disk-info";
import Drive from "node-disk-info/dist/classes/drive";

export const getDrives = async (): Promise<Drive[]> => {
  const drives = await getDiskInfo();
  return drives;
};
