import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "./animate";

const menuData: Record<string, { name: string; desc?: string }[]> = {
  starters: [
    { name: "Grilled Mushroom Bruschetta", desc: "Toasted bread, herb-marinated mushrooms" },
    { name: "Crispy Calamari", desc: "Golden fried squid, lemon aioli" },
    { name: "Chicken Lollipops", desc: "Spiced chicken, house chili glaze" },
    { name: "Hummus with Pita", desc: "Levantine chickpea dip, warm bread" },
  ],
  mainCourse: [
    { name: "Grilled Chicken Steak", desc: "Continental style, herb jus" },
    { name: "Beef Tenderloin", desc: "Pan-seared, truffle butter, vegetables" },
    { name: "Pasta Arabiata", desc: "Spiced tomato ragù, fresh parmesan" },
    { name: "Creamy Mushroom Risotto", desc: "Arborio rice, porcini, cream" },
    { name: "BBQ Chicken Pizza", desc: "Stone-baked, smoky barbecue sauce" },
  ],
  desserts: [
    { name: "Signature Monarca Cake", desc: "Multi-layer, house pastry cream" },
    { name: "Nutella Waffle", desc: "Belgian waffle, fresh berries" },
    { name: "Chocolate Lava Cake", desc: "Warm center, vanilla ice cream" },
    { name: "Crème Brûlée", desc: "Classic French, caramelized crust" },
  ],
  beverages: [
    { name: "Fresh Juices", desc: "Seasonal fruits, no preservatives" },
    { name: "Specialty Mocktails", desc: "House-crafted, signature blends" },
    { name: "Cold Coffee", desc: "Single-origin espresso, cold milk" },
    { name: "Hot Beverages", desc: "Tea, coffee, hot chocolate" },
  ],
  hookah: [
    { name: "Double Apple", desc: "Classic blend, smooth smoke" },
    { name: "Blue Mist", desc: "Blueberry mint fusion" },
    { name: "Mint Fresh", desc: "Cool mint, refreshing session" },
    { name: "Signature Monarca Mix", desc: "Chef's exclusive blend" },
  ],
};

const categories = [
  { id: "starters", label: "Starters" },
  { id: "mainCourse", label: "Main Course" },
  { id: "desserts", label: "Desserts" },
  { id: "beverages", label: "Beverages" },
  { id: "hookah", label: "Hookah" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.25 } },
};

export function Menu() {
  const [active, setActive] = useState("mainCourse");

  return (
    <section id="menu" className="py-28 bg-card relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <SectionHeading subtitle="A symphony of flavours">Our Menu</SectionHeading>

        {/* Tab bar */}
        <div className="flex flex-wrap justify-center gap-1 mb-14 relative">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`relative px-6 py-3 text-sm md:text-base font-serif uppercase tracking-wider transition-colors duration-300 ${
                active === cat.id ? "text-primary" : "text-foreground/50 hover:text-foreground/80"
              }`}
            >
              {cat.label}
              {active === cat.id && (
                <motion.span
                  layoutId="menu-tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {menuData[active].map((item, idx) => (
              <motion.div
                key={idx}
                className="group border-b border-primary/15 py-6 flex flex-col gap-1 hover:border-primary/50 transition-colors duration-300 cursor-default"
                variants={itemVariants}
              >
                <div className="flex items-center justify-between gap-4">
                  <motion.h4
                    className="text-xl font-serif text-foreground group-hover:text-primary transition-colors duration-300"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {item.name}
                  </motion.h4>
                  <motion.span
                    className="w-0 h-px bg-primary/50 group-hover:w-8 transition-all duration-500"
                  />
                </div>
                {item.desc && (
                  <p className="text-sm text-muted-foreground font-light tracking-wide">{item.desc}</p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
