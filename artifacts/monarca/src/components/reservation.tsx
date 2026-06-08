import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Phone number is required"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  guests: z.string().min(1, "Number of guests is required"),
  requests: z.string().optional(),
});

export function Reservation() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      requests: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast({
      title: "Reservation Request Sent",
      description: "We'll contact you shortly to confirm your booking.",
      className: "bg-primary text-primary-foreground border-none",
    });
    form.reset();
  }

  return (
    <section id="reservations" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif text-primary">Reserve Your Table</h2>
          <div className="w-24 h-1 bg-primary/50 mx-auto" />
          <p className="text-foreground/80 mt-6">
            Join us for an unforgettable evening. Fill out the form below or call us directly.
          </p>
          <a href="tel:+923007058898" className="text-primary hover:underline text-lg inline-block mt-2">
            +92 300 7058898
          </a>
        </div>

        <div className="bg-background p-8 md:p-12 border border-primary/20">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary uppercase tracking-wider text-xs">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" className="rounded-none border-primary/20 focus-visible:ring-primary bg-card" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary uppercase tracking-wider text-xs">Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="+92 300 1234567" className="rounded-none border-primary/20 focus-visible:ring-primary bg-card" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary uppercase tracking-wider text-xs">Date</FormLabel>
                      <FormControl>
                        <Input type="date" className="rounded-none border-primary/20 focus-visible:ring-primary bg-card" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary uppercase tracking-wider text-xs">Time</FormLabel>
                      <FormControl>
                        <Input type="time" className="rounded-none border-primary/20 focus-visible:ring-primary bg-card" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="guests"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel className="text-primary uppercase tracking-wider text-xs">Number of Guests</FormLabel>
                      <FormControl>
                        <Input type="number" min="1" placeholder="2" className="rounded-none border-primary/20 focus-visible:ring-primary bg-card" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="requests"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel className="text-primary uppercase tracking-wider text-xs">Special Requests (Optional)</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Any allergies or special occasions?" className="rounded-none border-primary/20 focus-visible:ring-primary bg-card resize-none" rows={4} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" className="w-full rounded-none bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6 font-serif mt-4">
                Book Now
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
