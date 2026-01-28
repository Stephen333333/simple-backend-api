import { Response, Request } from "express";
import { ISubscription } from "@/types";
import { pickAllowedFields } from "@/helpers";

export const create = async (
  req: Request<{}, {}, ISubscription>,
  res: Response,
  Model: any,
  allowedFields: (keyof ISubscription)[],
) => {

  const allowedFieldsData = pickAllowedFields(req.body, allowedFields);
  const { name, email, plan, startDate, endDate } = allowedFieldsData;


  const result = await new Model({
    name,
    email,
    plan,
    startDate,
    endDate,
  }).save();

  return res.status(201).json({
    success: true,
    result,
    message: Model.modelName + " created successfully",
  });
};
