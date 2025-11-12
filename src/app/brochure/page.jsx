
"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiX } from 'react-icons/fi';

function PdfIcon({ className = "w-12 h-12" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="2" fill="#fff3e0" stroke="#f6b84b" />
       <path d="M8 8h5l3 3v6a1 1 0 0 1-1 1H8V8z" fill="#ffd6a5" />
      <path d="M9 14.5h6" stroke="#b45309" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 11h6" stroke="#b45309" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="7.5" cy="16.5" r="0.9" fill="#b45309" />
    </svg>
  );
}

function BrochureCard({ brochure, onRemove }) {
  const href = brochure.fileUrl;
  const fileName = brochure.fileName || (href ? href.split("/").pop() : "file.pdf");

  return (
    <article className="flex flex-col rounded-2xl overflow-hidden shadow-lg border bg-white">
      <div className="relative h-48 bg-gradient-to-b from-white to-[#fff7ed] flex items-center justify-center">
        {brochure.previewImage ? (
          <Image src={brochure.previewImage} alt={brochure.title} fill className="object-cover object-center" unoptimized />
        ) : (
          <div className="flex flex-col items-center gap-3">
            <PdfIcon className="w-16 h-16" />
            <div className="text-sm font-semibold text-[#0b2b52]">{brochure.title}</div>
          </div>
        )}
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-[#0b2b52]">{brochure.title}</h3>
        <p className="mt-2 text-sm text-gray-600 leading-relaxed flex-1" style={{ textAlign: "justify" }}>
          {brochure.desc}
        </p>

        <div className="mt-4 flex items-center gap-3">
          <button
            onClick={() => openModal(brochure)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f6b84b] text-black font-semibold shadow hover:scale-[1.02] transition"
            aria-label={`Download ${fileName}`}
          >
            Download
          </button>

          <button
            onClick={() => openModal(brochure)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#e6e6e6] text-[#0b2b52] font-medium hover:bg-gray-50 transition"
            aria-label={`View ${fileName}`}
          >
            View
          </button>

          {onRemove && (
            <button
              onClick={() => onRemove(brochure.id)}
              className="ml-auto text-sm text-red-600 underline"
              aria-label={`Remove ${fileName}`}
              title="Remove (temporary)"
            >
              Remove
            </button>
          )}
        </div>

        <div className="mt-3 text-xs text-gray-500">
          {brochure.fileSize ? `${(brochure.fileSize / 1024).toFixed(0)} KB` : null}
          {brochure.uploadedAt ? ` • Added: ${new Date(brochure.uploadedAt).toLocaleString()}` : null}
        </div>
      </div>
    </article>
  );
}

export default function BrochurePage() {
  // Set the static brochure path to where you placed the PDF under /public.
  // You said you put brochure.pdf in public/docs/ so we reference /docs/brochure.pdf
  const initial = [
    {
      id: "official-1",
      title: "Veer Bharat — Company Brochure",
      desc: "Company profile, product portfolio and contact information. Click Download to save the PDF or View to open it in a new tab.",
      fileUrl: "/docs/brochure.pdf",
      fileName: "brochure.pdf",
    },
  ];

  const [brochures, setBrochures] = useState(initial);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBrochure, setSelectedBrochure] = useState(null);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', address: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [downloadReady, setDownloadReady] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    return () => {
      brochures.forEach((b) => {
        if (b._blobUrl) URL.revokeObjectURL(b._blobUrl);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleFileAdd(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      alert("Please select a PDF file.");
      return;
    }

    const blobUrl = URL.createObjectURL(file);
    const newBrochure = {
      id: `local-${Date.now()}`,
      title: file.name.replace(/\.[^/.]+$/, ""),
      desc: "Temporary user-uploaded brochure for preview & download (client-side only).",
      fileUrl: blobUrl,
      fileName: file.name,
      fileSize: file.size,
      uploadedAt: Date.now(),
      _blobUrl: blobUrl,
    };

    setBrochures((s) => [newBrochure, ...s]);
    e.target.value = "";
  }

  function handleRemove(id) {
    setBrochures((s) => {
      const toRemove = s.find((b) => b.id === id);
      if (toRemove && toRemove._blobUrl) URL.revokeObjectURL(toRemove._blobUrl);
      return s.filter((b) => b.id !== id);
    });
  }

  const openModal = (brochure) => {
    setSelectedBrochure(brochure);
    setModalOpen(true);
    setDownloadReady(false);
    setFormData({ name: '', phone: '', email: '', address: '' });
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedBrochure(null);
    setDownloadReady(false);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleFormSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   try {
  //     // Use Formspree like the contact form
  //     const formDataToSend = new FormData();
  //     formDataToSend.append('name', formData.name);
  //     formDataToSend.append('phone', formData.phone);
  //     formDataToSend.append('email', formData.email);
  //     formDataToSend.append('address', formData.address);
  //     formDataToSend.append('subject', 'Brochure Download Request');

  //     const response = await fetch('https://formspree.io/f/mkgpgdov', {
  //       method: 'POST',
  //       body: formDataToSend,
  //     });

  //     if (response.ok) {
  //       setDownloadReady(true);
  //     } else {
  //       alert('Error submitting form. Please try again.');
  //     }
  //   } catch (error) {
  //     console.error('Form submission error:', error);
  //     alert('Error submitting form. Please try again.');
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

const handleFormSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const res = await fetch("/api/brochure", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData, // name, phone, email, address
        from: "brochure",
        brochureTitle: selectedBrochure?.title || "",
        brochureFile: selectedBrochure?.fileName || "",
      }),
    });

    if (res.ok) {
      setDownloadReady(true);
    } else {
      alert("Form submit failed. Try again.");
    }
  } catch (err) {
    alert("Error submitting form.");
  }
  setIsSubmitting(false);
};




  const handleDownload = () => {
    if (selectedBrochure) {
      const link = document.createElement('a');
      link.href = selectedBrochure.fileUrl;
      link.download = selectedBrochure.fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      closeModal();
    }
  };

  const handleView = () => {
    if (selectedBrochure) {
      window.open(selectedBrochure.fileUrl, '_blank');
      closeModal();
    }
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#0b0d11] py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold">Brochures & Downloads</h1>
          {/* <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            नीचे कंपनी ब्रॉशर डाउनलोड करिए या प्रीव्यू के लिए View पर क्लिक करें. स्थायी रूप से ब्रॉशर होस्ट करने के लिए
            PDF को <code className="bg-gray-100 px-1 rounded">public/docs/</code> में रखें (उदाहरण: <code className="bg-gray-100 px-1 rounded">public/docs/brochure.pdf</code>).
          </p> */}
        </header>

        {/* Add PDF control */}
        <section className="mb-8 flex flex-col md:flex-row items-center gap-4">
          <label className="inline-flex items-center gap-3 bg-white px-4 py-3 rounded-lg shadow-md border cursor-pointer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#0b2b52]" aria-hidden>
              <path d="M12 5v14" stroke="#0b2b52" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5 12h14" stroke="#0b2b52" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-sm font-medium text-[#0b2b52]">Add PDF (temporary)</span>
            <input
              ref={fileInputRef}
              onChange={handleFileAdd}
              accept="application/pdf"
              type="file"
              className="hidden"
            />
          </label>

          <div className="text-sm text-gray-500">
            <div>Temporary uploads are client-side only — use them to preview downloads quickly.</div>
            <div className="mt-1">For permanent availability, add PDFs to <code className="bg-gray-100 px-1 rounded">public/docs/</code> and redeploy.</div>
          </div>
        </section>

        {/* Grid of brochure cards */}
        <section>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {brochures.map((b) => (
              <BrochureCard key={b.id} brochure={b} onRemove={b.id.startsWith("local-") ? handleRemove : undefined} />
            ))}
          </div>
        </section>

        {/* Short admin note (clean) */}
        {/* <section className="mt-10 p-4 bg-white rounded-md border">
          <h4 className="font-semibold mb-2">Permanent hosting (quick)</h4>
          <p className="text-sm text-gray-600">
            1) Add your PDF to <code className="bg-gray-100 px-1 rounded">public/docs/</code> (example: <code className="bg-gray-100 px-1 rounded">public/docs/brochure.pdf</code>).
            <br />
            2) Commit & push, then deploy. The file will be available at <code className="bg-gray-100 px-1 rounded">/docs/brochure.pdf</code>.
          </p>
        </section> */}

        {/* Modal */}
        <AnimatePresence>
          {modalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {downloadReady ? 'Download Ready!' : 'Download Brochure'}
                    </h3>
                    <button
                      onClick={closeModal}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <FiX className="w-5 h-5" />
                    </button>
                  </div>

                  {!downloadReady ? (
                    <form onSubmit={handleFormSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleFormChange}
                            className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-[#fef9c3]/30 to-[#DFC6F6]/30 border-2 border-gray-200 focus:border-red-500 focus:outline-none transition-all duration-300 text-gray-900 placeholder-gray-500"
                            placeholder="Enter your name"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleFormChange}
                            className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-[#fef9c3]/30 to-[#DFC6F6]/30 border-2 border-gray-200 focus:border-red-500 focus:outline-none transition-all duration-300 text-gray-900 placeholder-gray-500"
                            placeholder="+91 1234567890"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleFormChange}
                          className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-[#fef9c3]/30 to-[#DFC6F6]/30 border-2 border-gray-200 focus:border-red-500 focus:outline-none transition-all duration-300 text-gray-900 placeholder-gray-500"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Your Address *
                        </label>
                        <textarea
                          name="address"
                          required
                          value={formData.address}
                          onChange={handleFormChange}
                          rows={4}
                          className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-[#fef9c3]/30 to-[#DFC6F6]/30 border-2 border-gray-200 focus:border-red-500 focus:outline-none transition-all duration-300 text-gray-900 placeholder-gray-500 resize-none"
                          placeholder="Your complete address..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group w-full px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            <FiSend className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            Submit & Download
                          </>
                        )}
                      </button>
                    </form>
                  ) : (
                    <div className="text-center space-y-4">
                      <div className="text-green-600 text-4xl mb-2">✓</div>
                      <p className="text-gray-700 mb-4">
                        Thank you! Your information has been submitted successfully.
                      </p>
                      <div className="flex gap-3">
                        <button
                          onClick={handleDownload}
                          className="flex-1 bg-[#f6b84b] text-black font-semibold py-3 px-4 rounded-lg hover:bg-[#e59e3d] transition-colors"
                        >
                          Download PDF
                        </button>
                        <button
                          onClick={handleView}
                          className="flex-1 border border-gray-300 text-gray-700 font-semibold py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          View PDF
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
