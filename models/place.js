class Place {
  constructor(title, imageUri, address, location) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location; // {lat; 0.1412, lng: 127.121}} should be object
    this.id = new Date().toString() + Math.random().toString();
  }
}
