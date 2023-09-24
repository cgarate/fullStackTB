import request from "supertest";
import express from "express";
import * as http from "http";
const medianRouter = require("../routes/median");

const testApp = express();
testApp.use("/", medianRouter);
const server = testApp.listen(3002);

describe("App tests", () => {
  it("should send back a 200 code response", (done) => {
    request(server)
      .get("/median/10")
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });
  });

  it("should send back a JSON response", (done) => {
    request(server)
      .get("/median/10")
      .expect("Content-Type", /json/)
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });
  });

  it("should send back a 400 code response", (done) => {
    request(server)
      .get("/median/-10")
      .expect(400)
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });
  });

  it("should send back a 404 code response", (done) => {
    request(server)
      .get("/median/")
      .expect(404)
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });
  });

  afterAll(() => {
    server.close();
  });
});
