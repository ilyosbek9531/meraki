import React from "react";
import styles from "./Contact.module.scss";
import Marquee from "react-fast-marquee";
import { useTheme } from "@emotion/react";
import { t } from "i18next";
import { Button, Container, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import MaskInput from "Components/UI/InputMask/MaskInput";
import ContactIcon from "../../../assets/images/support.png";
import BuildingIcon from "../../../assets/images/building 1.png";
import MediasIcon from "../../../assets/images/social-media 1.png";
import { FaceBookIcon, InstagramIcon, TelegramIcon } from "helpers/icons";
import { Link } from "react-router-dom";

const inputs = [
  { id: "communication", label: "Communication" },
  { id: "communication", label: "Communication" },
  { id: "communication", label: "Communication" },
  { id: "communication", label: "Communication" },
  { id: "communication", label: "Communication" },
  { id: "communication", label: "Communication" },
];

const Contact = ({ data, isActive = false }) => {
  const {
    palette: { mode },
  } = useTheme();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber:
        typeof window !== "undefined" && localStorage.getItem("phone_number"),
    },
  });

  return (
    <div className={styles.contact}>
      {isActive && (
        <div>
          <div className="animationslide_wrapper">
            <div
              className="marqueeRoot"
              style={{
                backgroundColor: mode === "dark" ? "#EC3B3B" : "#2B2D42",
              }}
            >
              <Marquee
                className="marquee"
                pauseOnHover={false}
                speed={40}
                direction="right"
                gradientWidth={100}
                // gradient={width1000px}
                gradientColor={[255, 255, 255]}
              >
                {data?.root2?.map((el, index) => (
                  <div
                    className="marquee__item"
                    style={{ color: mode === "dark" ? el.dark : el.color }}
                  >
                    <h1>{t(el.text)}</h1>
                  </div>
                ))}
              </Marquee>
            </div>
            <div
              className="marqueeRoot marquee3"
              style={{
                backgroundColor: mode === "dark" ? "#EC3B3B" : "#2B2D42",
              }}
            >
              <Marquee
                className="marquee"
                pauseOnHover={false}
                speed={40}
                direction="left"
                gradientWidth={100}
                // gradient={width1000px}
                gradientColor={[255, 255, 255]}
              >
                {data?.root2?.map((el, index) => (
                  <div
                    className="marquee__item"
                    style={{ color: mode === "dark" ? el.dark : el.color }}
                  >
                    <h1>{t(el.text)}</h1>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      )}

      <Container>
        <h1
          className="title"
          style={{ color: mode === "light" ? "#fff" : "#2B2D42" }}
        >
          {t("Contact Us")}
        </h1>
        <div className={styles.contact_wrapper}>
          <div
            className={styles.contact_wrapper_infos}
            style={{ background: mode === "dark" ? "#424242" : "#2B2D42" }}
          >
            <div className={styles.box}>
              <div className={styles.icon_wrapper}>
                <img src={ContactIcon} alt="contact_img" />
              </div>
              <div className={styles.box_content}>
                <h1 className={styles.title}>{t("Contact")}</h1>
                <p>+123456789</p>
                <p>hello.meraki@gmail.com</p>
              </div>
            </div>

            <div className={styles.box}>
              <div className={styles.icon_wrapper}>
                <img src={BuildingIcon} alt="contact_img" />
              </div>
              <div className={styles.box_content}>
                <h1 className={styles.title}>{t("Address")}</h1>
                <p>Tashkent, Uzbekistan</p>
                <p>Amir Temur ko’chasi, 12st</p>
              </div>
            </div>

            <div className={styles.box}>
              <div className={styles.icon_wrapper}>
                <img src={MediasIcon} alt="contact_img" />
              </div>
              <div className={styles.box_content}>
                <h1 className={styles.title}>{t("Social Media")}</h1>
                <div className={styles.medias}>
                  {/* <FaceBookIcon/> */}
                  <Link to="/">
                    <InstagramIcon fill={28} />
                  </Link>
                  <Link to="/">
                    <TelegramIcon fill={28} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <form
            // onSubmit={handleSubmit(onSubmit)}
            className={styles.contact_wrapper_form}
            style={{ background: mode === "dark" ? "#424242" : "#fff" }}
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <div className={styles.input}>
                  <label for="firstName">
                    Name <span className="redLetters">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder={t("Enter your name")}
                    {...register("firstName", { required: true })}
                    style={errors.firstName ? { borderColor: "#F76659" } : {}}
                  />
                  {errors.firstName && (
                    <p className={styles.errorMessage}>
                      {t("Name field should not contain symbols")}
                    </p>
                  )}
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className={styles.input}>
                  <label for="company_name">{t("Company Name")}</label>
                  <input
                    type="text"
                    placeholder={t("Enter Your Company Name")}
                    {...register("company_name", { required: false })}
                  />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className={styles.input}>
                  <label for="email">
                    {t("Email")} <span className="redLetters">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder={t("Enter Your Email address")}
                    {...register("email", { required: true })}
                    style={errors.email ? { borderColor: "#F76659" } : {}}
                  />
                  {errors.email && (
                    <p className={styles.errorMessage}>
                      {t("Email field should not contain symbols")}
                    </p>
                  )}
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className={styles.input}>
                  <label for="phoneNumber">
                    {t("Phone number")} <span className="redLetters">*</span>
                  </label>
                  <MaskInput
                    mask="+\9\9\8 99 999-99-99"
                    maskChar=""
                    placeholder="Введите номер телефона"
                    name="phoneNumber"
                    control={control}
                    errors={errors}
                    disabled={true}
                    autoFocus
                    validation={{
                      required: {
                        value: true,
                        message: "Raqamni to'liq kiriting",
                      },
                    }}
                    className={styles.numberInput}
                  />
                </div>
              </Grid>
            </Grid>

            <div className={styles.service}>
              <p className={styles.service_title}>
                {t("Choose Services")} <span className="redLetters">*</span>
              </p>
              <Grid container spacing={2}>
                {inputs.map((input, index) => (
                  <Grid item xs={6} sm={4} key={index}>
                    <div className={styles.service_checkbox}>
                      <input
                        type="checkbox"
                        id={input.id}
                        {...register(input.id, { required: true })}
                        style={
                          errors[input.id] ? { borderColor: "#F76659" } : {}
                        }
                      />
                      {errors[input.id] && (
                        <p className={styles.errorMessage}>
                          {t("Choose Services!!!")}
                        </p>
                      )}
                      <label htmlFor={input.id}>{t(input.label)}</label>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </div>

            <div className={styles.input}>
              <label for="description">{t("Describe work")}</label>
              <textarea
                name="description"
                id="description"
                placeholder={t("Enter Your Ideas ...")}
              ></textarea>
            </div>

            <select
              name="select"
              id="select"
              defaultValue=""
              {...register("select", { required: false })}
              className={styles.selector}
            >
              <option value="" disabled hidden>
                {`Where did you hear about `}{" "}
                <span className="redLetters">meraki ?</span>
              </option>
              <option value="friends">{t("Friends")}</option>
              <option value="socialMedia">{t("Social Media")}</option>
            </select>

            <Button variant="contained" type="submit" className={styles.button}>
              {t("Submit")}
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
