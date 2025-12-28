import { contactInfo } from "@/config/configContactInfo";
import { socialLinks } from "@/config/configSocialLinks";
import { IndexContext } from "@/context/IndexContext";
import { useContext } from "react";
import Modal from "./Modal";
//COMPONENTE CONTACTO
const Contact = () => {
  const { submitted, handleSubmit, formData, handleChange, errors, modalVisible, classEventChange, isSubmitting, disableSubmit } = useContext(IndexContext);
  return (
    <section
      id="contact"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background text-foreground"
    >
      <div className="max-w-6xl mx-auto">
        {/* SECCION HEADER*/}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h2>
          <div className="w-12 h-1 bg-portfolio-accent rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* FORMULARIO CONTACTO */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

            {submitted ? (
              <div className="p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <p className="text-green-800 dark:text-green-300 font-semibold">
                  Thank you for your message! I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* NOMBRE */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold mb-2 text-foreground"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className={`w-full px-4 py-3 rounded-lg mb-2
                    bg-background text-foreground
                    border border-input
                    placeholder:text-muted-foreground
                    focus:outline-none focus:ring-2 focus:ring-portfolio-accent
                    transition-all ${formData.name && classEventChange('name')}`}
                  />
                  {errors.name && formData.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>

                {/* EMAIL */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-2 text-foreground"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className={`w-full px-4 py-3 rounded-lg mb-2
                    bg-background text-foreground
                    border border-input
                    placeholder:text-muted-foreground
                    focus:outline-none focus:ring-2 focus:ring-portfolio-accent
                    transition-all ${formData.email && classEventChange('email')}`}
                  />

                  {errors.email && formData.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                {/* MENSAJE */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold mb-2 text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message here..."
                    className={`w-full px-4 py-3 rounded-lg resize-none mb-2
                    bg-background text-foreground
                    border border-input
                    placeholder:text-muted-foreground
                    focus:outline-none focus:ring-2 focus:ring-portfolio-accent
                    transition-all  ${formData.message && classEventChange('message')}`}
                  />
                  {errors.message && formData.message  && <p className="text-red-500 text-sm">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className={`${disableSubmit ? "opacity-50 cursor-not-allowed" : "hover:bg-portfolio-accent-hover"} w-full px-6 py-3 bg-portfolio-accent text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg`}
                  disabled={disableSubmit}
                >
                   {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

          {/* INFO CONTACTO Y ENLACE SOCIALES */}
          <div className="space-y-8">
            {/* INFORMACION DE CONTACTO */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <div key={info.label} className="flex gap-4">
                      <div className="p-3 bg-portfolio-accent text-white rounded-lg flex-shrink-0">
                        <Icon size={20} />
                      </div>
                      <div>
                        <p className="font-semibold">{info.label}</p>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ENLACES SOCIALES*/}
            <div>
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>

              <div className="grid sm:grid-cols-2 gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 border border-border rounded-lg
                      hover:border-portfolio-accent
                      hover:bg-portfolio-accent hover:text-white
                      transition-all duration-200
                      flex items-center gap-3 group"
                    >
                      <Icon size={20} />
                      <div>
                        <p className="font-semibold text-sm">{link.name}</p>
                        <p className="text-xs text-muted-foreground group-hover:text-white">
                          {link.label}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {modalVisible && (
        <Modal/>
      )}
    </section>
  );
};

export default Contact;
