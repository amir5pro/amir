import React from "react";
import { Button, Form, Input } from "antd";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";
import { toast } from "react-toastify";
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const Contact = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    const isValid = Object.values(values).every(
      (value) => value.trim().length >= 1
    );
    if (isValid) {
      const templateParams = {
        from_name: values.from_name,
        from_email: values.from_email,
        message: values.message,
        to_name: "Amir",
      };
      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then((res) => {
          toast.success("Email sent Successfully !");
          form.resetFields();
        })
        .catch((error) => {
          toast.error("Error sending email:", error);
        });
    } else {
      toast.error(<p>invalid input</p>);
    }
  };
  const onFinishFailed = (errorInfo) => {};
  return (
    <>
      <div
        id="contact"
        className="lg:mr-24 mx-6 lg:ml-[96px]  2xl:mx-40  min-h-screen pt-[60px] pb-[30px] 
     "
      >
        <div className="text-text_color text-[30px]  font-black text-center mb-[30px] md:mb-[70px]">
          Contact-Me
        </div>

        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 1 }}
          className="font-sora max-w-[500px] m-auto mb-[30px]"
        >
          <Form
            name="basic"
            style={{
              maxWidth: 500,
            }}
            layout="vertical"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            form={form}
          >
            <Form.Item
              label="Full name"
              name="from_name"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <Input style={{ height: "40px" }} className="outline-none " />
            </Form.Item>
            <Form.Item
              label="Email"
              name="from_email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
                {
                  type: "email",
                  message: "The input is not a valid email!",
                },
              ]}
            >
              <Input style={{ height: "40px" }} />
            </Form.Item>
            <Form.Item
              label="Message"
              name="message"
              rules={[
                {
                  required: true,
                  message: "Please input your message!",
                },
              ]}
            >
              <Input.TextArea style={{ minHeight: "120px" }} />
            </Form.Item>

            <Form.Item className="w-[200px]">
              <motion.button
                htmlType="submit"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                  rotate: "2.5deg",
                }}
                className="bg-primary-500  border-0 rounded-md h-[35px] text-white px-[13px]"
              >
                Send Message
              </motion.button>
            </Form.Item>
          </Form>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
