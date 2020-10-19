const express = require("express"); 
const Routes = require("./carAPI"); 
const request = require("supertest"); 
const app = express(); 
app.use("/api/cars", Routes);

describe("testing-routes", () => {
  it("GET /api/cars - success", async () => {
    const { body } = await request(app).get("/api/cars");
    expect(body).toEqual(
    [
        { 
            "id": "1",
            "make": "Fiat", 
            "model": "Punto",
            "colour": "yellow",
            "year": "1998"
        },
        { 
            "id": "2",
            "make": "Ford", 
            "model": "Focus",
            "colour": "silver",
            "year": "2007"
        },
        { 
            "id": "3",
            "make": "VW", 
            "model": "Lupo",
            "colour": "black",
            "year": "2012"
        }
    ]);
  });
});