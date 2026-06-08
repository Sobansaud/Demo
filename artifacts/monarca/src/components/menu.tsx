import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const menuData = {
  starters: [
    { name: "Grilled Mushroom Bruschetta", price: "Rs 1,200" },
    { name: "Crispy Calamari", price: "Rs 1,800" },
    { name: "Chicken Lollipops", price: "Rs 1,400" },
    { name: "Hummus with Pita", price: "Rs 950" },
  ],
  mainCourse: [
    { name: "Grilled Chicken Steak (Continental)", price: "Rs 2,800" },
    { name: "Beef Tenderloin", price: "Rs 4,500" },
    { name: "Pasta Arabiata", price: "Rs 1,900" },
    { name: "Creamy Mushroom Risotto", price: "Rs 2,200" },
    { name: "BBQ Chicken Pizza", price: "Rs 2,100" },
  ],
  desserts: [
    { name: "Signature Monarca Cake", price: "Rs 1,500" },
    { name: "Nutella Waffle", price: "Rs 1,200" },
    { name: "Chocolate Lava Cake", price: "Rs 1,100" },
    { name: "Crème Brûlée", price: "Rs 950" },
  ],
  beverages: [
    { name: "Fresh Juices", price: "Rs 600" },
    { name: "Specialty Mocktails", price: "Rs 850" },
    { name: "Cold Coffee", price: "Rs 750" },
    { name: "Hot Beverages", price: "Rs 500" },
  ],
  hookah: [
    { name: "Double Apple", price: "Rs 2,500" },
    { name: "Blue Mist", price: "Rs 2,500" },
    { name: "Mint Fresh", price: "Rs 2,500" },
    { name: "Signature Monarca Mix", price: "Rs 3,500" },
  ]
};

export function Menu() {
  return (
    <section id="menu" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif text-primary">Our Menu</h2>
          <div className="w-24 h-1 bg-primary/50 mx-auto" />
          <p className="text-muted-foreground uppercase tracking-widest text-sm mt-4">A symphony of flavors</p>
        </div>

        <Tabs defaultValue="mainCourse" className="w-full">
          <TabsList className="w-full flex flex-wrap h-auto bg-transparent justify-center gap-2 mb-12">
            {[
              { id: "starters", label: "Starters" },
              { id: "mainCourse", label: "Main Course" },
              { id: "desserts", label: "Desserts" },
              { id: "beverages", label: "Beverages" },
              { id: "hookah", label: "Hookah" },
            ].map((cat) => (
              <TabsTrigger 
                key={cat.id} 
                value={cat.id}
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary text-lg font-serif px-6 py-3 uppercase tracking-wider"
              >
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(menuData).map(([key, items]) => (
            <TabsContent key={key} value={key} className="space-y-8 animate-in fade-in duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                {items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-end gap-4 group">
                    <div className="flex-1 border-b border-dashed border-primary/30 group-hover:border-primary transition-colors pb-2">
                      <h4 className="text-xl font-serif text-foreground group-hover:text-primary transition-colors">
                        {item.name}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
