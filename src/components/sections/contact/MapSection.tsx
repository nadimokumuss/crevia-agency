import { MapPin, ExternalLink } from "lucide-react";

const mapUrl = "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Acıbadem, Acıbadem Cd. No:169, Üsküdar, İstanbul, Türkiye");

export default function MapSection() {
  return (
    <a href={mapUrl} target="_blank" rel="noopener noreferrer"
      className="flex min-h-36 items-center justify-between gap-4 rounded-2xl border border-mat-yesil/20 bg-orman-yesili/30 p-7 transition-colors hover:border-hardal-sarisi/50">
      <div className="flex items-center gap-4">
        <MapPin className="shrink-0 text-hardal-sarisi" size={28} />
        <div>
          <p className="font-syne font-semibold text-white">Konum ve Yol Tarifi</p>
          <p className="mt-1 font-poppins text-sm text-nane-yesili/65">Acıbadem, Üsküdar / İstanbul</p>
        </div>
      </div>
      <ExternalLink className="shrink-0 text-hardal-sarisi" size={20} />
    </a>
  );
}
