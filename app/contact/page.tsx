import { Shield, Mail, MapPin, Phone } from "lucide-react"
import ContactForm from "@/components/contact-form"

export const metadata = {
  title: "Contact | Cybersecurity Engineer Portfolio",
  description: "Get in touch with me for cybersecurity consulting, projects, or inquiries.",
}

export default function ContactPage() {
  return (
    <div className="mx-auto px-4 py-12 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-2 text-center mb-12">
          <h1 className="text-4xl font-bold">Get In Touch</h1>
          <p className="text-muted-foreground">Have a question or want to work together? Send me a message!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="cyber-card p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-accent/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-accent" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground">contact@example.com</p>
          </div>

          <div className="cyber-card p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-accent/10 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-muted-foreground">San Francisco, CA</p>
          </div>

          <div className="cyber-card p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-accent/10 p-3 rounded-full">
                <Phone className="h-6 w-6 text-accent" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-muted-foreground">+1 (555) 123-4567</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="cyber-card p-8 rounded-lg">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-accent mr-3" />
              <h2 className="text-2xl font-bold">Send a Message</h2>
            </div>
            <ContactForm />
          </div>

          <div className="space-y-6">
            <div className="cyber-card p-6">
              <h3 className="text-xl font-semibold mb-4">Availability</h3>
              <p className="mb-4">
                I'm currently available for freelance work, consulting, and full-time positions in cybersecurity.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Security assessments and penetration testing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Security architecture design and review</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Incident response and forensics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Security training and workshops</span>
                </li>
              </ul>
            </div>

            <div className="cyber-card p-6">
              <h3 className="text-xl font-semibold mb-4">Response Time</h3>
              <p>
                I typically respond to inquiries within 24-48 hours. For urgent matters, please indicate so in your
                message.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
