import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { ContactForm } from "@/types/portfolio";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FieldErrors = Partial<Record<keyof ContactForm, string>>;

function validate(form: ContactForm): FieldErrors {
  const errors: FieldErrors = {};
  if (!form.name.trim()) errors.name = "Name is required.";
  if (!form.email.trim()) errors.email = "Email is required.";
  else if (!EMAIL_REGEX.test(form.email))
    errors.email = "Enter a valid email address.";
  if (!form.message.trim()) errors.message = "Message is required.";
  else if (form.message.trim().length < 20)
    errors.message = "Message must be at least 20 characters.";
  return errors;
}

export function ContactSection() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const templateParams = {
    from_name: form.name,
    from_email: form.email,
    to_name: "Aditya",
    message: form.message,
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (sending) {
      return;
    }

    setSending(true);
    setSent(false);

    try {
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        },
      );
      console.log("SUCCESS!", response);
      setForm({ name: "", email: "", message: "" });
      setSent(true);
    } catch (error) {
      console.log("FAILED...", error);
    } finally {
      setSending(false);
    }
  };

  const handleBlur = (field: keyof ContactForm) => {
    const errors = validate(form);
    if (errors[field]) {
      setFieldErrors((prev) => ({ ...prev, [field]: errors[field] }));
    } else {
      setFieldErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleChange = (field: keyof ContactForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (fieldErrors[field]) {
      setFieldErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section id="contact" className="bg-background py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left: CTA copy */}
          <AnimatedSection direction="left">
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest block mb-3">
              Contact
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-6 leading-tight">
              Let's build something{" "}
              <span className="text-primary">worth talking about.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether you're thinking through a frontend architecture problem,
              exploring a collaboration, or want to connect about tech, my inbox
              is open.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse inline-block" />
                Available for full-time roles
              </div>
            </div>
          </AnimatedSection>

          {/* Right: form */}
          <AnimatedSection direction="right" delay={100}>
            {sent ? (
              <Card
                className="bg-card border-primary/30 shadow-elevated p-8 text-center"
                data-ocid="contact.success_state"
              >
                <div className="flex justify-center mb-4">
                  <CheckCircle2 size={44} className="text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-2">
                  Message sent!
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Thanks for reaching out. I'll get back to you within a day or
                  two.
                </p>
                <Button
                  onClick={() => setSent(false)}
                  variant="outline"
                  className="border-border"
                  data-ocid="contact.send_another_button"
                >
                  Send another message
                </Button>
              </Card>
            ) : (
              <Card
                className="bg-card border-border shadow-subtle"
                data-ocid="contact.form"
              >
                <CardContent className="p-6 sm:p-8">
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    aria-label="Contact form"
                  >
                    <div className="space-y-5">
                      {/* Name */}
                      <div>
                        <Label
                          htmlFor="contact-name"
                          className="text-sm text-foreground mb-1.5 block"
                        >
                          Your name{" "}
                          <span className="text-destructive" aria-hidden="true">
                            *
                          </span>
                        </Label>
                        <Input
                          id="contact-name"
                          type="text"
                          placeholder="Henry Williams"
                          autoComplete="name"
                          value={form.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          onBlur={() => handleBlur("name")}
                          aria-required="true"
                          aria-invalid={!!fieldErrors.name}
                          aria-describedby={
                            fieldErrors.name ? "contact-name-error" : undefined
                          }
                          data-ocid="contact.name_input"
                          className="bg-background border-input"
                        />
                        {fieldErrors.name && (
                          <p
                            id="contact-name-error"
                            className="text-xs text-destructive mt-1"
                            data-ocid="contact.name_field_error"
                            role="alert"
                          >
                            {fieldErrors.name}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <Label
                          htmlFor="contact-email"
                          className="text-sm text-foreground mb-1.5 block"
                        >
                          Email address{" "}
                          <span className="text-destructive" aria-hidden="true">
                            *
                          </span>
                        </Label>
                        <Input
                          id="contact-email"
                          type="email"
                          placeholder="henry@company.com"
                          autoComplete="email"
                          value={form.email}
                          onChange={(e) =>
                            handleChange("email", e.target.value)
                          }
                          onBlur={() => handleBlur("email")}
                          aria-required="true"
                          aria-invalid={!!fieldErrors.email}
                          aria-describedby={
                            fieldErrors.email
                              ? "contact-email-error"
                              : undefined
                          }
                          data-ocid="contact.email_input"
                          className="bg-background border-input"
                        />
                        {fieldErrors.email && (
                          <p
                            id="contact-email-error"
                            className="text-xs text-destructive mt-1"
                            data-ocid="contact.email_field_error"
                            role="alert"
                          >
                            {fieldErrors.email}
                          </p>
                        )}
                      </div>

                      {/* Message */}
                      <div>
                        <Label
                          htmlFor="contact-message"
                          className="text-sm text-foreground mb-1.5 block"
                        >
                          Message{" "}
                          <span className="text-destructive" aria-hidden="true">
                            *
                          </span>
                        </Label>
                        <Textarea
                          id="contact-message"
                          placeholder="Hey wanted to reach out about..."
                          rows={5}
                          value={form.message}
                          onChange={(e) =>
                            handleChange("message", e.target.value)
                          }
                          onBlur={() => handleBlur("message")}
                          aria-required="true"
                          aria-invalid={!!fieldErrors.message}
                          aria-describedby={
                            fieldErrors.message
                              ? "contact-message-error"
                              : undefined
                          }
                          data-ocid="contact.message_textarea"
                          className="bg-background border-input resize-none"
                        />
                        {fieldErrors.message && (
                          <p
                            id="contact-message-error"
                            className="text-xs text-destructive mt-1"
                            data-ocid="contact.message_field_error"
                            role="alert"
                          >
                            {fieldErrors.message}
                          </p>
                        )}
                      </div>

                      {/* Submit error */}
                      {submitError && (
                        <p
                          className="text-xs text-destructive"
                          data-ocid="contact.error_state"
                          role="alert"
                        >
                          {submitError}
                        </p>
                      )}

                      {/* Submit */}
                      <Button
                        type="submit"
                        disabled={sending}
                        data-ocid="contact.submit_button"
                        className="w-full bg-primary text-primary-foreground hover:opacity-90 transition-smooth gap-2"
                      >
                        {sending ? (
                          <>
                            <Loader2
                              size={16}
                              className="animate-spin"
                              data-ocid="contact.loading_state"
                            />
                            Sending…
                          </>
                        ) : (
                          <>
                            <Send size={16} />
                            Send Message
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
