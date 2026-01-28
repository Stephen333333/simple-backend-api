import mongoose, { Schema, Model } from "mongoose";
import { ISubscription } from "@/types";

const schema = new Schema(
  {
    removed: {
      type: Boolean,
      default: false,
      index: true,
    },
    name: {
      type: String,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    plan: {
      type: String,
      required: [true, "plan is required"],
    },
    startDate: {
      type: Date,
      required: [true, "startDate is required"],
    },
    endDate: {
      type: Date,
      required: [true, "endDate is required"],
    },
  },
  { timestamps: true },
);

// virtuals to set is active
schema.virtual("isActive").get(function (this: ISubscription) {
  const now = new Date();
  return this.startDate <= now && now <= this.endDate;
});

schema.plugin(require("mongoose-autopopulate"));
export const Subscription: Model<ISubscription> = mongoose.model<ISubscription>(
  "Subscription",
  schema,
);
