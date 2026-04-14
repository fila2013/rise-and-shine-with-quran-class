import { MapPin, Calendar, Clock } from 'lucide-react';

const LocationSection = () => {
  return (
    <section className="relative py-16 px-4 bg-emerald-gradient overflow-hidden">
      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-10 reveal">
          <h2 className="font-script text-gold-gradient text-4xl md:text-5xl mb-4">Lokasi Acara</h2>
        </div>

        <div className="reveal space-y-6">
          {/* Info cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-card/60 backdrop-blur border border-primary/30 rounded-xl p-5 text-center hover:scale-105 transition-transform">
              <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-foreground font-semibold text-sm">Sabtu</p>
              <p className="text-primary font-display text-lg">13 Juni 2026</p>
            </div>
            <div className="bg-card/60 backdrop-blur border border-primary/30 rounded-xl p-5 text-center hover:scale-105 transition-transform">
              <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-foreground font-semibold text-sm">Pukul</p>
              <p className="text-primary font-display text-lg">07.15 WIB</p>
            </div>
            <div className="bg-card/60 backdrop-blur border border-primary/30 rounded-xl p-5 text-center hover:scale-105 transition-transform">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-foreground font-semibold text-sm">Tempat</p>
              <p className="text-primary font-display text-sm leading-tight">Emersia Hotel & Resort</p>
            </div>
          </div>

          {/* Map */}
          <div className="reveal rounded-xl overflow-hidden border border-primary/30 shadow-gold">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.123!2d105.261!3d-5.429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40db50e0f3f5a5%3A0x9b9e2d8b3a74f2d1!2sEmersia%20Hotel%20%26%20Resort!5e0!3m2!1sen!2sid!4v1"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Emersia Hotel & Resort"
            />
          </div>

          {/* Direction button */}
          <div className="text-center reveal">
            <a
              href="https://maps.app.goo.gl/J1CbdKJxYD6UkPep6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gold-gradient text-primary-foreground font-semibold shadow-gold hover:scale-105 transition-transform"
            >
              <MapPin className="w-5 h-5" />
              Buka di Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
