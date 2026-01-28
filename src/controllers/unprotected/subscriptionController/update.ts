import { Response, Request } from "express";
import { ISubscription } from "@/types";
import { pickAllowedFields } from "@/helpers";

export const update = async (
  req: Request<{ id: string }, {}, Partial<ISubscription>>,
  res: Response,
  Model: any,
  allowedFields: (keyof ISubscription)[],
) => {
  
  const { id } = req.params;
  const allowedFieldsData = pickAllowedFields(req.body, allowedFields);

  const result = await Model.findByIdAndUpdate(
    id,
    {
      ...allowedFieldsData,
    },
    { new: true, runValidators: true },
  );

  return res.status(200).json({
    success: true,
    result,
    message: Model.modelName + " updated successfully",
  });
};
