import express, { Request, Response } from "express";
import { param, validationResult } from "express-validator";
import { formatNumber, getMedian, getPrimeNumbersToN } from "../primeUtils";

const router = express.Router();

const lowerLimit = 2;
const upperLimit = 10000000;
const invalidInputMessage = `Number must be an integer between ${lowerLimit} and ${formatNumber(
  upperLimit,
)}`;

router.get(
  "/median/:primesUpToLimit",
  param("primesUpToLimit")
    .isInt({ min: lowerLimit, max: upperLimit })
    .withMessage(invalidInputMessage),
  function (req: Request, res: Response) {
    const limit = validationResult(req);
    if (limit.isEmpty()) {
      const primeNumberResults = getPrimeNumbersToN(
        req.params.primesUpToLimit as unknown as number,
      );
      res.send({...getMedian(primeNumberResults), limit: req.params.primesUpToLimit});
    } else {
      res.status(400).json({ errors: limit.array() });
    }
  },
);

module.exports = router;
