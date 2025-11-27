"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { Mail, Phone, Linkedin, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  // --- HANDLE INPUT CHANGE ---
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // --- VALIDATION ---
  const validate = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format.";

    if (!formData.message.trim())
      newErrors.message = "Please enter a message.";

    return newErrors;
  };

  // --- FORM SUBMIT ---
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitted(true);

    // Here you can add a backend submission or email service (resend, formsubmit, etc.)
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container max-w-5xl mx-auto px-4">

        {/* Section title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Feel free to reach out for collaborations, projects, or questions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* CONTACT INFO CARD */}
          <Card className="p-8 shadow-soft animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6">My Socials</h3>

            <div className="space-y-6">

              <a
                href="mailto:wankojoelnathan@gmail.com"
                className="flex items-center gap-4 group"
              >
                <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition" />
                <span className="font-medium">wankojoelnathan@gmail.com</span>
              </a>

              <a
                href="https://wa.me/237659735264"
                target="_blank"
                className="flex items-center gap-4 group"
              >
                <Phone className="w-6 h-6 text-green-600 group-hover:scale-110 transition" />
                <span className="font-medium">+237 659 735 264</span>
              </a>

              <a
                href="https://www.linkedin.com/in/joelnathan-wanko"
                target="_blank"
                className="flex items-center gap-4 group"
              >
                <Linkedin className="w-6 h-6 text-blue-600 group-hover:scale-110 transition" />
                <span className="font-medium">JoelNathan Wanko</span>
              </a>
            </div>
          </Card>

          {/* CONTACT FORM */}
          <Card className="p-8 shadow-soft animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            {submitted ? (
              <p className="text-green-600 font-medium">
                Message sent successfully! I will get back to you shortly.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* NAME */}
                <div>
                  <label className="font-medium">Name</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name}</p>
                  )}
                </div>

                {/* EMAIL */}
                <div>
                  <label className="font-medium">Email</label>
                  <Input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="font-medium">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    rows={5}
                    className={errors.message ? "border-red-500" : ""}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message}</p>
                  )}
                </div>

                {/* SUBMIT BUTTON */}
                <Button type="submit" className="w-full flex items-center gap-2">
                  Send Message <Send className="w-4 h-4" />
                </Button>

              </form>
            )}
          </Card>

        </div>
      </div>
    </section>
  );
}
