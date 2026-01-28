import express from 'express';
import { catchErrors } from '@/handlers/error/errorHandlers';
import { subscriptionController} from '@/controllers/unprotected';
export const router = express.Router();

// subscription routes
router.route(`/subscription/create`).post(catchErrors(subscriptionController.create));
router.route(`/subscription/read/:id`).get(catchErrors(subscriptionController.read));
router.route(`/subscription/update/:id`).patch(catchErrors(subscriptionController.update));
router.route(`/subscription/delete/:id`).delete(catchErrors(subscriptionController.delete));