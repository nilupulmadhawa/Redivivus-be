import express from "express";

const router = express.Router();

import {
  addCompany,
  getCompany,
  getCompanyById,
  updateCompany,
  deleteCompany,
} from "../controllers/company.controller";

router.post("/addcompany", addCompany);

router.get("/allcompany", getCompany);

router.get("/getcompany/:id", getCompanyById);

router.patch("/updatecompany/:id", updateCompany);

router.delete("/deletecompany/:id", deleteCompany);

module.exports = router;
