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
        ])
    })

    describe("POST /api/cars", () => {
        test("It responds with the newly created car", async () => {
          const newCar = await request(app)
            .post("/api/cars")
            .send({ 
                "id": "4",
                "make": "Jensen", 
                "model": "Inteceptor",
                "colour": "black",
                "year": "1979"
                });
      
          expect(newCar.body).toHaveProperty("id");
          expect(newCar.body.id).toBe("4");
          expect(newCar.statusCode).toBe(200);
      
          const response = await request(app).get("/api/cars");
          expect(response.body.length).toBe(4);
        });
      });
})
