import express from "express";
import { getMembers, createMember } from "../handlers/members.js";

const router = express.Router();

router.get('/', getMembers);
router.post('/', createMember);

export default router;