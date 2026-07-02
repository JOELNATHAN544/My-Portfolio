import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  CheckCircle2,
  XCircle,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import TiktokIcon from "../icons/TiktokIcon";
import DiscordIcon from "../icons/DiscordIcon";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        throw new Error(
          `Missing EmailJS credentials — SERVICE_ID: ${SERVICE_ID}, TEMPLATE_ID: ${TEMPLATE_ID}, PUBLIC_KEY: ${PUBLIC_KEY ? "set" : "missing"}`
        );
      }

      console.log("EmailJS sending with:", { SERVICE_ID, TEMPLATE_ID });

      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          // Main notification template variables (sent TO Joel)
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          from_message: data.message,
          // Auto-reply template variables (sent back TO the visitor)
          name: data.name,
          email: data.email,
        },
        PUBLIC_KEY
      );

      console.log("EmailJS result:", result);

      setSubmitStatus("success");
      reset();

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error: unknown) {
      console.error("EmailJS Error (full):", error);

      // Extract specific error text from EmailJS response
      let detail = "Failed to send message. Please try again or email me directly.";
      if (error instanceof Error) {
        detail = error.message;
      } else if (typeof error === "object" && error !== null && "text" in error) {
        detail = `EmailJS error: ${(error as { text: string }).text}`;
      } else if (typeof error === "object" && error !== null && "status" in error) {
        detail = `EmailJS HTTP ${(error as { status: number }).status} — check your Service ID & Template ID`;
      }

      setSubmitStatus("error");
      setErrorMessage(detail);

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Have a project in mind or just want to say hi? I'd love to hear from
            you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground">
              Contact Information
            </h3>
            <p className="text-muted-foreground">
              Feel free to reach out through any of these channels. I am always
              open to discussing new projects, creative ideas or opportunities
              to be part of your visions.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <a
                    href="mailto:wankojoelnathan@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    wankojoelnathan@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">WhatsApp</h4>
                  <a
                    href="https://wa.me/237659735264"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +237 659735264
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Location</h4>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Bangangt%C3%A9,Cameroon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Bangangté, Cameroon
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <DiscordIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Discord</h4>
                  <p className="text-muted-foreground">wankojoelnathan_03633</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <h4 className="font-semibold text-foreground mb-4">Follow me</h4>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61572991858016"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary/10 rounded-lg text-primary hover:bg-primary/20 transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/wankojoelnathan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary/10 rounded-lg text-primary hover:bg-primary/20 transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.tiktok.com/@joelnathanwanko"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary/10 rounded-lg text-primary hover:bg-primary/20 transition-colors"
                >
                  <TiktokIcon className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/joel-nathan-wanko-1a5a31341/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary/10 rounded-lg text-primary hover:bg-primary/20 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://discord.com/users/wankojoelnathan_03633"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary/10 rounded-lg text-primary hover:bg-primary/20 transition-colors"
                >
                  <DiscordIcon className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background p-8 rounded-2xl border border-border shadow-sm">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <input
                  id="name"
                  {...register("name")}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Your name"
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="your.email@example.com"
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-foreground"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  {...register("subject")}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="What is this regarding?"
                  disabled={isSubmitting}
                />
                {errors.subject && (
                  <p className="text-sm text-destructive">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="How can I help you?"
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <p className="text-sm text-destructive">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {submitStatus === "success" && (
                <div className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/20 rounded-md text-green-600 dark:text-green-400 animate-in fade-in slide-in-from-top-2 duration-300">
                  <CheckCircle2 className="w-5 h-5" />
                  <p className="text-sm font-medium">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="flex items-center gap-2 p-4 bg-destructive/10 border border-destructive/20 rounded-md text-destructive animate-in fade-in slide-in-from-top-2 duration-300">
                  <XCircle className="w-5 h-5" />
                  <p className="text-sm font-medium">{errorMessage}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transition-colors"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>

              <div className="text-xs text-muted-foreground text-center mt-4">
                <p>Your message will be sent securely via EmailJS.</p>
                <p className="mt-1">
                  For urgent matters, please email me directly.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
