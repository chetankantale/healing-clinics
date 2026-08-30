import { Mail, MapPin, Phone, Clock4, MessageSquare } from 'lucide-react';

const phoneNumber = '+917447681111';
const displayPhone = '+91 7447 681 111';
const email = 'supighodke1990@gmail.com';
const address = 'Shop no. 8, Vimal Vihar Society, Bibwewadi, Pune 411037';
const mapUrl = 'https://maps.app.goo.gl/PwtJEbsksgLRP2HQ6?g_st=awb';

export default function ContactPage() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_0.7fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-gold">Get in touch</p>
            <h1 className="text-4xl font-semibold text-slate-950 sm:text-5xl">Contact Healing Clinic for personalized care.</h1>
            <p className="max-w-3xl text-base leading-8 text-slate-600">Reach our luxury clinic via phone, email, or WhatsApp. We are ready to support your skin and hair treatment journey.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-6 shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold text-white">
                  <Phone size={20} />
                </div>
                <p className="mt-4 text-sm uppercase tracking-[0.3em] text-slate-500">Call</p>
                <a href={`tel:${phoneNumber}`} className="mt-2 block text-base font-semibold text-slate-900">{displayPhone}</a>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold text-white">
                  <Mail size={20} />
                </div>
                <p className="mt-4 text-sm uppercase tracking-[0.3em] text-slate-500">Email</p>
                <a href={`mailto:${email}`} className="mt-2 block break-words text-base font-semibold text-slate-900">{email}</a>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold text-white">
                  <MessageSquare size={20} />
                </div>
                <p className="mt-4 text-sm uppercase tracking-[0.3em] text-slate-500">WhatsApp</p>
                <a href="https://wa.me/917447681111" className="mt-2 block text-base font-semibold text-slate-900">{displayPhone}</a>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold text-white">
                  <Clock4 size={20} />
                </div>
                <p className="mt-4 text-sm uppercase tracking-[0.3em] text-slate-500">Hours</p>
                <p className="mt-2 text-base font-semibold text-slate-900">Mon - Sat, 9:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>
          <div className="space-y-6 rounded-[32px] bg-white p-10 shadow-soft">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Office location</p>
              <p className="mt-4 text-lg font-semibold text-slate-900">{address}</p>
            </div>
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[360px] flex-col items-center justify-center rounded-[28px] bg-slate-900 p-8 text-center text-white transition hover:bg-slate-800"
              aria-label="Open Healing Clinic location on Google Maps"
            >
              <MapPin className="h-12 w-12 text-gold" />
              <p className="mt-5 text-sm uppercase tracking-[0.3em] text-slate-300">Google Maps</p>
              <p className="mt-4 max-w-sm text-xl font-semibold">Open clinic location</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
