export interface Books {
  kind:       string;
  totalItems: number;
  items:      Item[];
}

export interface Item {
  kind:       string;
  id:         string;
  etag:       string;
  selfLink:   string;
  volumeInfo: VolumeInfo;
  saleInfo:   SaleInfo;
  accessInfo: AccessInfo;
  searchInfo: SearchInfo;
}

export interface AccessInfo {
  country:                Country;
  viewability:            Viewability;
  embeddable:             boolean;
  publicDomain:           boolean;
  textToSpeechPermission: TextToSpeechPermission;
  epub:                   Epub;
  pdf:                    PDF;
  webReaderLink:          string;
  accessViewStatus:       AccessViewStatus;
  quoteSharingAllowed:    boolean;
}

export enum AccessViewStatus {
  None = "NONE",
  Sample = "SAMPLE",
}

export enum Country {
  GB = "GB",
}

export interface Epub {
  isAvailable: boolean;
}

export interface PDF {
  isAvailable:   boolean;
  acsTokenLink?: string;
}

export enum TextToSpeechPermission {
  Allowed = "ALLOWED",
  AllowedForAccessibility = "ALLOWED_FOR_ACCESSIBILITY",
}

export enum Viewability {
  NoPages = "NO_PAGES",
  Partial = "PARTIAL",
}

export enum Kind {
  BooksVolume = "books#volume",
}

export interface SaleInfo {
  country:      Country;
  saleability:  Saleability;
  isEbook:      boolean;
  listPrice?:   SaleInfoListPrice;
  retailPrice?: SaleInfoListPrice;
  buyLink?:     string;
  offers?:      Offer[];
}

export interface SaleInfoListPrice {
  amount:       number;
  currencyCode: CurrencyCode;
}

export enum CurrencyCode {
  Gbp = "GBP",
}

export interface Offer {
  finskyOfferType: number;
  listPrice:       OfferListPrice;
  retailPrice:     OfferListPrice;
  giftable?:       boolean;
  rentalDuration?: RentalDuration;
}

export interface OfferListPrice {
  amountInMicros: number;
  currencyCode:   CurrencyCode;
}

export interface RentalDuration {
  unit:  string;
  count: number;
}

export enum Saleability {
  ForSale = "FOR_SALE",
  ForSaleAndRental = "FOR_SALE_AND_RENTAL",
  NotForSale = "NOT_FOR_SALE",
}

export interface SearchInfo {
  textSnippet: string;
}

export interface VolumeInfo {
  title:                string;
  subtitle?:            string;
  authors:              string[];
  publisher?:           string;
  publishedDate?:       string;
  description:          string;
  industryIdentifiers?: IndustryIdentifier[];
  readingModes:         ReadingModes;
  pageCount:            number;
  printType:            PrintType;
  categories?:          string[];
  averageRating?:       number;
  ratingsCount?:        number;
  maturityRating:       MaturityRating;
  allowAnonLogging:     boolean;
  contentVersion:       string;
  panelizationSummary:  PanelizationSummary;
  imageLinks:           ImageLinks;
  language:             Language;
  previewLink:          string;
  infoLink:             string;
  canonicalVolumeLink:  string;
}

export interface ImageLinks {
  smallThumbnail: string;
  thumbnail:      string;
}

export interface IndustryIdentifier {
  type:       Type;
  identifier: string;
}

export enum Type {
  Isbn10 = "ISBN_10",
  Isbn13 = "ISBN_13",
}

export enum Language {
  En = "en",
}

export enum MaturityRating {
  NotMature = "NOT_MATURE",
}

export interface PanelizationSummary {
  containsEpubBubbles:  boolean;
  containsImageBubbles: boolean;
}

export enum PrintType {
  Book = "BOOK",
}

export interface ReadingModes {
  text:  boolean;
  image: boolean;
}
