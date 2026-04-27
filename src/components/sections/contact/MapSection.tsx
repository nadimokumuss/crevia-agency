import { MapPin } from "lucide-react";

export default function MapSection() {
  return (
    <div className="bg-orman-yesili/30 rounded-2xl h-64 flex flex-col items-center justify-center border border-mat-yesil/20">
      <MapPin className="w-8 h-8 text-mat-yesil/50 mb-3" />
      <span className="font-syne text-nane-yesili/50">Harita Alanı</span>
    </div>
  );
}
