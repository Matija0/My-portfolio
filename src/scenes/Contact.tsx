import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import contact from "../assets/contact-image.jpeg";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section id="contact" className="py-48">
      {/* HEADINGS */}
      <motion.div
        className="flex justify-end w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className=" text-yellow">CONTACT ME</span> TO GET STARTED
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>
      {/* FORM AND IMAGE SECTION */}
      <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          className="basis-1/2 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <img src={contact} alt="contact" />
        </motion.div>
        <motion.div
          className="basis-1/2 mt-10 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/c2f36dc820792846caf689e136939cc0"
            method="POST"
          >
            <input
              type="text"
              className="w-full bg-blue-800 border border-blue-600 rounded-md p-3 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 font-semibold"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-red">
                {errors.name.type === "required" && "This field is required!"}
                {errors.name.type === "maxLength" &&
                  "Name cannot exceed 100 characters!"}
              </p>
            )}

            <input
              type="text"
              className="w-full bg-blue-800 border border-blue-600 rounded-md p-3 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 mt-5 font-semibold"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              })}
            />
            {errors.email && (
              <p className="text-red">
                {errors.email.type === "required" && "This field is required!"}
                {errors.email.type === "pattern" && "Invalid email!"}
              </p>
            )}

            <textarea
              className="w-full bg-blue-800 border border-blue-600 rounded-md p-3 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 mt-5 font-semibold"
              placeholder="MESSAGE"
              rows={5}
              cols={50}
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-red">
                {errors.message.type === "required" &&
                  "This field is required!"}
                {errors.message.type === "maxLength" &&
                  "Message cannot exceed 2000 characters!"}
              </p>
            )}

            <button
              type="submit"
              className="p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500 rounded-md"
            >
              SEND ME A MESSAGE
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
