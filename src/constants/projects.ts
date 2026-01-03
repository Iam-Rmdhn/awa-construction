import { IMAGES } from "./images";

export type Project = {
  id: string;
  title: string;
  description: string;
  fullDescription?: string; // For the detail page if needed, otherwise use description
  type: string;
  year: string;
  location: string;
  area: string;
  time: string;
  image: string;
  gallery: string[];
};

export const PROJECTS: Project[] = [
  {
    id: "warung-selera-nusantara",
    title: "Warung Selera Nusantara",
    description: "Renovasi ruko berlantai 2 ini mengubahnya menjadi warung makan yang nyaman dan modern. Dengan desain interior yang efisien, material ramah lingkungan, dan penataan ruang yang optimal, kedua lantai memberikan suasana yang hangat dan fungsional, menciptakan pengalaman kuliner yang menyenangkan bagi pengunjung.",
    type: "Renovasi",
    year: "2025",
    location: "Mampang Prapatan, Jakarta Selatan",
    area: "4m x 12m (dua lantai)",
    time: "3 Minggu",
    image: IMAGES.PROJECT_IMAGE1,
    gallery: [
      IMAGES.DETAILS_IMAGE1,
      IMAGES.DETAILS_IMAGE2,
      IMAGES.DETAILS_IMAGE3,
      IMAGES.DETAILS_IMAGE4,
      IMAGES.DETAILS_IMAGE5,
    ],
  },
  {
    id: "rm-mas-gaw",
    title: "RM Mas Gaw",
    description: "Renovasi ruko ini mengubahnya menjadi warung makan yang nyaman dengan desain interior modern dan fungsional. Penggunaan material ramah lingkungan dan penataan ruang yang efisien menciptakan suasana yang hangat, ideal untuk pengalaman kuliner yang menyenangkan.",
    type: "Renovasi",
    year: "2025",
    location: "Margonda Raya, Depok",
    area: "6 x 25m",
    time: "3 Minggu",
    image: IMAGES.PROJECT_IMAGE2,
    gallery: [
      IMAGES.DETAILS_IMAGE6,
      IMAGES.DETAILS_IMAGE7,
      IMAGES.DETAILS_IMAGE8,
      IMAGES.DETAILS_IMAGE9,
      IMAGES.DETAILS_IMAGE10,
      IMAGES.DETAILS_IMAGE11,
    ],
  },
  {
    id: "dapur-sagawa-group",
    title: "Dapur Sagawa Group",
    description: "Konstruksi dapur komersial yang dirancang untuk efisiensi operasional maksimal. Dilengkapi dengan sistem ventilasi modern dan tata letak yang ergonomis untuk mendukung produktivitas.",
    type: "Konstruksi",
    year: "2025",
    location: "Bogor, Jawa Barat",
    area: "4m x 7m",
    time: "2 Minggu",
    image: IMAGES.PROJECT_IMAGE3,
    gallery: [
      IMAGES.DETAILS_IMAGE12,
      IMAGES.DETAILS_IMAGE13,
      IMAGES.DETAILS_IMAGE14,
      IMAGES.DETAILS_IMAGE15,
      IMAGES.DETAILS_IMAGE16,
    ],
  },
];
