export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export const team: TeamMember[] = [
  {
    id: "uye-1",
    name: "Ahmet Yılmaz",
    role: "Kurucu & CEO",
    image: "/images/team/placeholder.jpg",
  },
  {
    id: "uye-2",
    name: "Elif Kaya",
    role: "Kreatif Direktör",
    image: "/images/team/placeholder.jpg",
  },
  {
    id: "uye-3",
    name: "Mehmet Demir",
    role: "Teknik Lider",
    image: "/images/team/placeholder.jpg",
  },
  {
    id: "uye-4",
    name: "Zeynep Arslan",
    role: "UI/UX Tasarımcı",
    image: "/images/team/placeholder.jpg",
  },
  {
    id: "uye-5",
    name: "Can Öztürk",
    role: "Full-Stack Geliştirici",
    image: "/images/team/placeholder.jpg",
  },
  {
    id: "uye-6",
    name: "Selin Aydın",
    role: "Dijital Pazarlama Uzmanı",
    image: "/images/team/placeholder.jpg",
  },
];
