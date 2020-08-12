import { Server } from "miragejs";
export const fakeServer = new Server({
  routes() {
    this.get("/categories", () => {
      console.log("fakeServer");
      return [
        { id: '1', name: "Saloons", location: "Address One" },
        { id: '2', name: "Doctors", location: "Address Two" },
      ];
    });
  },
});
