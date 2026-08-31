'use client';

import { z } from 'zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const appointmentSchema = z.object({
  fullName: z.string().min(2, 'Enter your full name'),
  email: z.string().email('Enter a valid email'),
  phone: z.string().min(10, 'Enter a valid phone number'),
  treatment: z.string().min(1, 'Select a treatment'),
  date: z.string().min(1, 'Choose a preferred date'),
  time: z.string().min(1, 'Choose a preferred time'),
  message: z.string().max(500).optional()
});

type AppointmentFormValues = z.infer<typeof appointmentSchema>;

const WHATSAPP_NUMBER = '917447681111';

const treatments = [
  'Acne Treatment',
  'Pigmentation Treatment',
  'Hair Growth Treatment',
  'PRP Therapy',
  'Laser Hair Removal',
  'Anti Aging',
  'Chemical Peel'
];

function buildWhatsAppMessage(data: AppointmentFormValues) {
  const lines = [
    'Hello, I would like to book an appointment.',
    '',
    `Name: ${data.fullName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Treatment: ${data.treatment}`,
    `Preferred Date: ${data.date}`,
    `Preferred Time: ${data.time}`
  ];

  if (data.message?.trim()) {
    lines.push(`Message: ${data.message.trim()}`);
  }

  return lines.join('\n');
}

export default function AppointmentPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<AppointmentFormValues>({ resolver: zodResolver(appointmentSchema) });

  const onSubmit = (data: AppointmentFormValues) => {
    const message = buildWhatsAppMessage(data);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
    reset();
  };

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-[32px] bg-white p-10 shadow-soft">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-gold">Book appointment</p>
            <h1 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">Schedule your premium consultation today.</h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">Complete the form and we will open WhatsApp with your details ready to send to our clinic team.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-slate-700">Full Name</label>
              <input {...register('fullName')} className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-gold focus:ring-2 focus:ring-gold/20" />
              {errors.fullName && <p className="mt-2 text-sm text-red-600">{errors.fullName.message}</p>}
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Email</label>
              <input type="email" {...register('email')} className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-gold focus:ring-2 focus:ring-gold/20" />
              {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>}
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Mobile Number</label>
              <input type="tel" {...register('phone')} className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-gold focus:ring-2 focus:ring-gold/20" />
              {errors.phone && <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p>}
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Treatment</label>
              <select {...register('treatment')} className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-gold focus:ring-2 focus:ring-gold/20">
                <option value="">Select treatment</option>
                {treatments.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.treatment && <p className="mt-2 text-sm text-red-600">{errors.treatment.message}</p>}
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Preferred Date</label>
              <input type="date" {...register('date')} className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-gold focus:ring-2 focus:ring-gold/20" />
              {errors.date && <p className="mt-2 text-sm text-red-600">{errors.date.message}</p>}
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Preferred Time</label>
              <input type="time" {...register('time')} className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-gold focus:ring-2 focus:ring-gold/20" />
              {errors.time && <p className="mt-2 text-sm text-red-600">{errors.time.message}</p>}
            </div>
            <div className="md:col-span-2">
              <label className="text-sm font-medium text-slate-700">Message</label>
              <textarea rows={5} {...register('message')} className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-gold focus:ring-2 focus:ring-gold/20" />
              {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message.message}</p>}
            </div>
            <div className="md:col-span-2">
              <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-slate-800">
                Send via WhatsApp
              </button>
              {submitted && <p className="mt-4 text-sm text-green-600">WhatsApp opened with your appointment details. Tap send to complete your request.</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
