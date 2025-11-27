import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "wankojoelnathan@gmail.com",
      href: "mailto:wankojoelnathan@gmail.com",
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+237 659735264",
      href: "https://wa.me/237659735264",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "JoelNathan Wanko",
      href: "https://linkedin.com/in/joelnathan-wanko",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Hello! My name is ${formData.name}.\n\nEmail: ${formData.email}\n\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/237659735264?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, "_blank");
    
    // Show success toast
    toast({
      title: "Opening WhatsApp",
      description: "Your message has been prepared. Complete sending via WhatsApp.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Get In <span className="gradient-hero bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let's work together to bring your ideas to life
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact information */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                <p className="text-muted-foreground mb-8">
                  Feel free to reach out through any of these channels. I'm always open to 
                  discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Card 
                      key={index}
                      className="p-6 shadow-soft hover:shadow-glow transition-all duration-300 group cursor-pointer"
                      onClick={() => window.open(info.href, "_blank")}
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                          <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">{info.label}</div>
                          <div className="font-semibold">{info.value}</div>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Contact form */}
            <Card className="p-8 shadow-soft hover:shadow-glow transition-all duration-300 animate-fade-in">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Your Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-2 min-h-[150px]"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full gradient-hero hover:shadow-glow transition-all duration-300 group"
                >
                  Send Message
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
