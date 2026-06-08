import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SectionHeading, Reveal } from "./animate";
import { Phone } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Phone number is required"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  guests: z.string().min(1, "Number of guests is required"),
  requests: z.string().optional(),
});

const fieldVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Reservation() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", phone: "", date: "", time: "", guests: "", requests: "" },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    const msg = [
      `🍽️ *New Table Reservation – Monarca*`,
      ``,
      `👤 *Name:* ${data.name}`,
      `📞 *Phone:* ${data.phone}`,
      `📅 *Date:* ${data.date}`,
      `🕐 *Time:* ${data.time}`,
      `👥 *Guests:* ${data.guests}`,
      data.requests ? `📝 *Special Requests:* ${data.requests}` : null,
      ``,
      `_Sent via Monarca website_`,
    ]
      .filter(Boolean)
      .join("\n");

    const waUrl = `https://wa.me/923007058898?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, "_blank");

    toast({
      title: "Opening WhatsApp",
      description: "Your reservation details are ready to send!",
      className: "bg-primary text-primary-foreground border-none",
    });
    form.reset();
  }

  return (
    <section id="reservations" className="py-28 bg-card relative overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.06)_0%,transparent_65%)] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <SectionHeading subtitle="An evening you'll remember">Reserve Your Table</SectionHeading>

        <Reveal>
          <div className="relative bg-background p-8 md:p-12 border border-primary/20">
            {/* Gold corner accents */}
            <span className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-primary" />
            <span className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-primary" />
            <span className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-primary" />
            <span className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-primary" />

            <Form {...form}>
              <motion.form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { name: "name" as const, label: "Name", placeholder: "Your name", type: "text" },
                    { name: "phone" as const, label: "Phone Number", placeholder: "+92 300 0000000", type: "tel" },
                    { name: "date" as const, label: "Date", placeholder: "", type: "date" },
                    { name: "time" as const, label: "Time", placeholder: "", type: "time" },
                  ].map((f, i) => (
                    <motion.div key={f.name} custom={i} variants={fieldVariants}>
                      <FormField
                        control={form.control}
                        name={f.name}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary uppercase tracking-wider text-xs">{f.label}</FormLabel>
                            <FormControl>
                              <Input
                                type={f.type}
                                placeholder={f.placeholder}
                                className="rounded-none border-primary/20 focus-visible:ring-primary bg-card transition-all duration-300 focus:border-primary/60"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                  ))}

                  <motion.div custom={4} variants={fieldVariants} className="md:col-span-2">
                    <FormField
                      control={form.control}
                      name="guests"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary uppercase tracking-wider text-xs">Number of Guests</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              min="1"
                              placeholder="2"
                              className="rounded-none border-primary/20 focus-visible:ring-primary bg-card"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  <motion.div custom={5} variants={fieldVariants} className="md:col-span-2">
                    <FormField
                      control={form.control}
                      name="requests"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary uppercase tracking-wider text-xs">Special Requests (Optional)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Any allergies, celebrations, or special occasions?"
                              className="rounded-none border-primary/20 focus-visible:ring-primary bg-card resize-none"
                              rows={4}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>
                </div>

                <motion.div custom={6} variants={fieldVariants}>
                  <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className="w-full rounded-none bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6 font-serif mt-2 tracking-wide"
                    >
                      Book Now
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.form>
            </Form>
          </div>
        </Reveal>

        <Reveal delay={1} className="mt-8 text-center">
          <p className="text-muted-foreground text-sm uppercase tracking-widest mb-2">Or reach us directly</p>
          <motion.a
            href="tel:+923007058898"
            className="inline-flex items-center gap-2 text-primary text-xl font-serif hover:underline"
            whileHover={{ scale: 1.03 }}
          >
            <Phone size={18} />
            +92 300 7058898
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}
