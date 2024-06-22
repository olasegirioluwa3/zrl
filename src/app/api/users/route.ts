import { NextApiRequest, NextApiResponse } from 'next';
// import { uploadProfilePicture, deleteExistingProfilePicture, uploadCoverPicture, deleteExistingCoverPicture } from '../../../middlewares/upload.user.middleware';
// import { sendClientAndAdminEmails } from '../../../lib/sendEmail';
// import phoneNumber from 'phone-number';
import userController from '../../../controllers/userController';
import validateUserData from "../../../middlewares/validator/userValidator";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'POST':
      try {
        if (req.body?.register) {
          const { data, errors } = await validateUserData(req.body.register);
          if (errors.length > 0) {
            return res.status(400).json({ errors });
          }
          await userController.registerUser(req, res, data);
        } else if (req.body?.login) {
          const { data, errors } = await validateUserData(req.body.login);
          if (errors.length > 0) {
            return res.status(400).json({ errors });
          }
          await userController.loginUser(req, res, data);
        } else if (req.body?.forgotPassword) {
          const { data, errors } = await validateUserData(req.body.forgotPassword);
          if (errors.length > 0) {
            return res.status(400).json({ errors });
          }
          await userController.forgotPassword(req, res, data);
        } else if (req.body?.resetPasswordFinal) {
          const { data, errors } = await validateUserData(req.body.resetPasswordFinal);
          if (errors.length > 0) {
            return res.status(400).json({ errors });
          }
          await userController.resetPasswordFinal(req, res, data);
        } else {
          res.status(400).json({ error: 'Invalid request' });
        }
      } catch (error) {
        console.error(error);
        res.status(500).send({ status: 'failed', message: error.message });
      }
      break;

    case 'GET':
      try {
        // await userController.getProfile(req, res);
        res.status(200).json({ status: 'failed', message: "message" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ status: 'failed', message: error.message });
      }
      break;

    case 'PUT':
      try {
        if (req.query.id) {
          await userController.updateProfile(req, res);
        } else if (req.query.id && req.body?.profilepicture) {
          await userController.updateProfilePicture(req, res);
        } else if (req.query.id && req.body?.coverpicture) {
          await userController.updateCoverPicture(req, res);
        } else {
          res.status(400).json({ error: 'Invalid request' });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ status: 'failed', message: error.message });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
