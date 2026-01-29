import express from 'express';
import { catchErrors } from '@/handlers/error/errorHandlers';
import { subscriptionController} from '@/controllers/unprotected';
export const router = express.Router();

// subscription routes
router.route(`/subscription`).post(catchErrors(subscriptionController.create));
router.route(`/subscription/:id`).get(catchErrors(subscriptionController.read));
router.route(`/subscription/:id`).patch(catchErrors(subscriptionController.update));
router.route(`/subscription/:id`).delete(catchErrors(subscriptionController.delete));