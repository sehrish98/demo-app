export {};
declare global {
  interface AuthState {
    email: string;
    firstName: string;
    lastName: string;
    id: string;
    loading: boolean;
  }

  interface ClientState {
    step: Number;
    loading: boolean;
    clientsList: Client[];
    managerInfo: Client;
    catagories: catagory[];
    website: WebSite;
  }

  interface Client {
    _id: string;
    name: String;
    business_type: String;
    email: String;
    street: String;
    city: String;
    post_code: String;
    country: String;
    contact_number: String;
    webSite: String;
  }

  interface catagory {
    _id: string;
    category_title: String;
    client_id: String;
    subCatagories: subCatagory[];
  }

  interface subCatagory {
    _id: string;
    title: String;
    catagory_id: String;
  }

  interface WebSite {
    client_Id: String;
    about_us_image: String;
    about_us_text: String;
    cover_photo: String;
    gallery: [];
    MO: boolean;
    TU: boolean;
    WE: boolean;
    TH: boolean;
    FR: boolean;
    SA: boolean;
    SU: boolean;
    timeFromAM: String;
    timeFromPM: String;
    timeToAM: String;
    timeToPM: String;
  }
}
