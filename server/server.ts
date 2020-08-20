import { Server } from "miragejs";
import { categories, companies } from "./companies";


export const fakeServer = new Server({
  routes() {
    this.get("/categories", () => {
      console.log("fakeServer");
      return [
        { id: '1', name: "Salon", location: "Address One" },
        { id: '2', name: "Spa", location: "Address Two" },
      ];
    });
    this.get("/categories/:id", (schema, request) => {
      return categories[request.params.id];
    });
    this.get("/companies", (schema, request) => {
      return companies;
    });
    this.get("/companies/:id/show", (schema, request) => {
      return companies.find(company => (company.id === request.params.id)) || [];
    });
  },
});
