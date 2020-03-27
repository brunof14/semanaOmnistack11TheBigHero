const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

describe("ONG", () => {
  /*
  beforeEach(async () => {
    await connection.migrate.latest();
  });*/

  afterAll(async () => {
    await connection.rollback();
    await connection.destroy();
  });

  it("should be able to create a new ONG", async () => {
    const response = await request(app)
      .post("/ongs")
      //   .set('Authorization', 'id_ong')
      .send({
        name: "APAD",
        email: "contato@apad.com.br",
        whatsapp: "12345678901",
        city: "Rio Do Sul",
        uf: "SP"
      });

    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
  });
});
