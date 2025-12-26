import ApiError from "../utils/ApiError.js";
import { Client } from "../models/client.model.js";

/* =========================
   CREATE CLIENT
========================= */
export const createClient = async (req, res, next) => {
  try {
    console.log("DEBUG req.body:", req.body);
    console.log("DEBUG req.file:", req.file);
    const { name } = req.body;

    if (!name) {
      return next(new ApiError(400, "Client name is required"));
    }

    const image = req.file
      ? {
          url: req.file.path,
          public_url: req.file.path,
          public_id: req.file.filename,
        }
      : undefined;

    const client = await Client.create({
      name,
      image,
    });

    return res.api(201, "Client created successfully", client);
  } catch (error) {
    next(error);
  }
};

/* =========================
   GET ALL CLIENTS (PUBLIC)
========================= */
export const getAllClients = async (req, res, next) => {
  try {
    const clients = await Client.find({ isActive: true }).sort({
      createdAt: -1,
    });

    return res.api(200, "Clients fetched successfully", {
      count: clients.length,
      data: clients,
    });
  } catch (error) {
    next(error);
  }
};

/* =========================
   GET CLIENT BY ID
========================= */
export const getClientById = async (req, res, next) => {
  try {
    const client = await Client.findById(req.params.id);

    if (!client || !client.isActive) {
      return next(new ApiError(404, "Client not found"));
    }

    return res.api(200, "Client fetched successfully", client);
  } catch (error) {
    next(error);
  }
};

/* =========================
   UPDATE CLIENT
========================= */
export const updateClient = async (req, res, next) => {
  try {
    const updateData = { ...req.body };

    if (req.file) {
      updateData.image = {
        url: req.file.path,
        public_url: req.file.path,
        public_id: req.file.filename,
      };
    }

    const client = await Client.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });

    if (!client) {
      return next(new ApiError(404, "Client not found"));
    }

    return res.api(200, "Client updated successfully", client);
  } catch (error) {
    next(error);
  }
};

/* =========================
   DELETE CLIENT (SOFT)
========================= */
export const deleteClient = async (req, res, next) => {
  try {
    const client = await Client.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );

    if (!client) {
      return next(new ApiError(404, "Client not found"));
    }

    return res.api(200, "Client removed successfully");
  } catch (error) {
    next(error);
  }
};
