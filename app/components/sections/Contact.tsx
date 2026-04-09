import { motion } from "framer-motion";
import { ParticlesBackground } from "~/components/shared/ParticlesBackground";
import { OptimizedImage } from "~/components/shared/OptimizedImage";
import type { FormProps } from "react-router";

export interface ContactFormProps {
  actionData?: {
    // Zod returns fieldErrors as Record<string, string[]>
    errors?: Record<string, string[]>;
    success?: boolean;
    error?: string;
  };
  isSubmitting: boolean;
  Form: React.ComponentType<FormProps>;
}

export const ContactForm = ({ actionData, isSubmitting, Form }: ContactFormProps) => {
  // Helper to display first error message for a field
  const getFieldError = (field: string) => {
    const err = actionData?.errors?.[field];
    return Array.isArray(err) ? err[0] : err;
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen relative bg-black overflow-hidden text-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10"
    >
      <ParticlesBackground />
      <div className="relative z-10 w-full flex flex-col md:flex-row items-center gap-10">
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <OptimizedImage
              src="/assets/Astra.png"
              loading="lazy"
              alt="Contact"
              className="w-72 md:w-140 rounded-2xl shadow-lg object-cover"
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 bg-white/5 p-8 rounded-2xl shadow-lg border border-white/10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
          <Form method="post" className="flex flex-col gap-5">
            {/* Name Field */}
            <div className="flex flex-col">
              <label className="mb-1">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className={`p-3 rounded-md bg-white/10 border ${
                  actionData?.errors?.name ? "border-red-500" : "border-gray-500"
                } text-white focus:outline-none focus:border-blue-500`}
              />
              {actionData?.errors?.name && (
                <p className="text-red-500 text-xs">{getFieldError("name")}</p>
              )}
            </div>

            {/* Email Field */}
            <div className="flex flex-col">
              <label className="mb-1">
                Your Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className={`p-3 rounded-md bg-white/10 border ${
                  actionData?.errors?.email ? "border-red-500" : "border-gray-500"
                } text-white focus:outline-none focus:border-blue-500`}
              />
              {actionData?.errors?.email && (
                <p className="text-red-500 text-xs">{getFieldError("email")}</p>
              )}
            </div>

            {/* Service Field */}
            <div className="flex flex-col">
              <label className="mb-1">
                Service Needed <span className="text-red-500">*</span>
              </label>
              <select
                name="service"
                defaultValue=""
                className={`p-3 rounded-md bg-white/10 border ${
                  actionData?.errors?.service ? "border-red-500" : "border-gray-500"
                } text-white focus:outline-none focus:border-blue-500`}
              >
                <option value="" disabled>
                  Something in mind?
                </option>
                <option value="AI Automation" className="text-black">
                  AI Automation
                </option>
                <option value="AI / ML" className="text-black">
                  AI / ML
                </option>
                <option value="Web Development" className="text-black">
                  Web Development
                </option>
                <option value="Others" className="text-black">
                  Others
                </option>
              </select>
              {actionData?.errors?.service && (
                <p className="text-red-500 text-xs">{getFieldError("service")}</p>
              )}
            </div>

            {/* Budget Field */}
            <div className="flex flex-col">
              <label className="mb-1">
                Budget <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="budget"
                placeholder="Your Budget"
                className={`p-3 rounded-md bg-white/10 border ${
                  actionData?.errors?.budget ? "border-red-500" : "border-gray-500"
                } text-white focus:outline-none focus:border-blue-500`}
              />
              {actionData?.errors?.budget && (
                <p className="text-red-500 text-xs">{getFieldError("budget")}</p>
              )}
            </div>

            {/* Idea Field */}
            <div className="flex flex-col">
              <label className="mb-1">
                Explain Your Idea <span className="text-red-500">*</span>
              </label>
              <textarea
                name="idea"
                rows={5}
                placeholder="Enter Your Idea..."
                className={`p-3 rounded-md bg-white/10 border ${
                  actionData?.errors?.idea ? "border-red-500" : "border-gray-500"
                } text-white focus:outline-none focus:border-blue-500`}
              />
              {actionData?.errors?.idea && (
                <p className="text-red-500 text-xs">{getFieldError("idea")}</p>
              )}
            </div>

            {/* Status Messages */}
            {actionData?.success && (
              <p className="text-green-400 text-sm">Message sent successfully ✅</p>
            )}
            {actionData?.error && (
              <p className="text-red-400 text-sm">{actionData.error}</p>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white py-3 rounded-md font-semibold transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </Form>
        </motion.div>
      </div>
    </section>
  );
};