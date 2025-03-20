"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { sendContactEmail } from "./action";

const Contact = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: false });
  const contactRef = useRef(null);
  const isContactInView = useInView(contactRef, { once: false });
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<'success' | 'error' | null>(null);
  const [loading, setLoading] = useState(false);

  const handlSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const result = await sendContactEmail(name, email, message)

    if (result?.success) {
      setStatus("success")
      setName("")
      setEmail("")
      setMessage("")
    } else {
      setStatus("error")
    }
    setLoading(false)
  }


  return (
    <div className="flex flex-col justify-center items-center w-full h-full overflow-hidden">
      <div className="w-full h-full overflow-y-auto px-2 overflow-x-hidden">
        <div className="w-full h-full justify-center items-center flex flex-col text-center gap-4">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              isHeroInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.5 }
            }
            transition={{ type: "spring", duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-sm text-neutral-500">CONTACTS</h2>
            <div className="text-5xl md:text-7xl lg:text-8xl flex flex-col mt-10">
              <span>Interested in working</span>
              <span className="text-teal-400">
                together<span className="text-white">?</span>
              </span>
            </div>
          </motion.div>
        </div>
        <div className="w-full h-full items-center justify-center flex flex-col text-center gap-4">
          <motion.div
            className="w-full md:max-w-xl border bg-black/10 border-zinc-600 rounded text-start"
            ref={contactRef}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              isContactInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.5 }
            }
            transition={{ type: "spring", duration: 0.5, delay: 0.2 }}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            <div className="border-b border-zinc-600 text-lg text-center py-2">
              &lt;contact-me/&gt;
            </div>
            <div className="p-4 flex flex-col gap-2 text-xl">
              <form onSubmit={handlSubmit}>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                  <label className="text-lg">
                    Name<span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border rounded border-zinc-600 focus:outline-none focus:border-teal-400 p-2 transition-all duration-300"
                    required
                  />
                  </div>
                  <div className="flex flex-col gap-2">
                  <label className="text-lg">
                    Email<span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border rounded border-zinc-600 focus:outline-none focus:border-teal-400 p-2 transition-all duration-300"
                    required
                  />
                  </div>
                  <div className="flex flex-col gap-2">
                  <label className="text-lg">
                    Message<span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="border rounded border-zinc-600 focus:outline-none focus:border-teal-400 p-2 transition-all duration-300"
                    required
                  ></textarea>
                  </div>
                </div>

                <button 
                className="mt-6 border border-zinc-600 text-white text-lg py-2 px-4 rounded hover:bg-teal-600/20 hover:border-teal-400 hover:text-teal-400 hover:cursor-pointer transition-all duration-300"
                type="submit"
                disabled={loading}
                >
                  { loading ? "Sending..." : "Send Message" }
                </button>
              </form>
              {status === "success" && (
                <h1 className="mt-2 text-teal-400">Your message has been sent!</h1>
              )}
              {status === "error" && (
                <h1 className="mt-2 text-red-400">Something went wrong! Please try again.</h1>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
