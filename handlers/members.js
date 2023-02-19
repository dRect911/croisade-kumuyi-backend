import mongoose from "mongoose";
import MemberDetails from "../models/memberDetails.js";

// get all members details
export const getMembers = async (req, res) => {
    try {
        const MembersDetails = await MemberDetails.find();
        res.status(201).json(MembersDetails);
        console.log('get all members');
    } catch (error) {
        console.log('error while getting members');
        res.status(409).json({message: error.message });
    }
}

// create a new member
export const createMember = async (req, res) => {
    const member = req.body.member;
    const newMember = MemberDetails(member);

    try {
        await newMember.save();
        res.status(201).json(newMember);
        console.log('created a new member');
    } catch (error) {
        console.log('error while creating a new member');
        res.status(409).json({ message: error.message });
    }
}