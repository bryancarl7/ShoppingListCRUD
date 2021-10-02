import http from "../http-common";

class ItemDataService {
  getAll() {
    return http.get("/listItems");
  }

  create(data) {
    return http.post("/listItem", data);
  }

  update(title, data) {
    return http.put(`/listItem/update/${title}`, data);
  }

  delete(title) {
    return http.delete(`/listItem/${title}`);
  }
}

export default new ItemDataService();