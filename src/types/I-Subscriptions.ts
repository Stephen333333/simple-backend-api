import { Types } from "mongoose";

export type ISubscription = {
  _id: Types.ObjectId;
  name: string;
  email: string;
  plan: "free" | "basic" | "premium";
  startDate: Date;
  endDate: Date;
  isActive: boolean;
};
