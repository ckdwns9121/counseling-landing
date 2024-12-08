"use client";

import { useState, useEffect } from "react";
import * as motion from "framer-motion/client";
import styles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const navItems = [
    { label: "홈", href: "#hero" },
    { label: "서비스", href: "#services" },
    { label: "상담사", href: "#counselor" },
    { label: "블로그", href: "#blog" },
    { label: "후기", href: "#reviews" },
    { label: "위치", href: "#location" },
    { label: "FAQ", href: "#faq" },
  ];

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const hamburgerVariants = {
    open: {
      scale: 1.1,
    },
    closed: {
      scale: 1,
    },
  };

  return (
    <motion.header
      className={styles.header}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          로뎀숲
        </Link>

        {!isMobile ? (
          <>
            <nav className={styles.nav}>
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className={styles.navItem}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            <motion.a
              href="#reservation"
              className={styles.ctaButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              상담 예약하기
            </motion.a>
          </>
        ) : (
          <>
            <motion.button
              className={styles.hamburger}
              onClick={() => setIsOpen(!isOpen)}
              variants={hamburgerVariants}
              animate={isOpen ? "open" : "closed"}
              whileTap={{ scale: 0.9 }}
            >
              <span
                className={`${styles.hamburgerLine} ${
                  isOpen ? styles.open : ""
                }`}
              ></span>
              <span
                className={`${styles.hamburgerLine} ${
                  isOpen ? styles.open : ""
                }`}
              ></span>
              <span
                className={`${styles.hamburgerLine} ${
                  isOpen ? styles.open : ""
                }`}
              ></span>
            </motion.button>

            <motion.div
              className={styles.mobileMenu}
              variants={menuVariants}
              initial="closed"
              animate={isOpen ? "open" : "closed"}
            >
              <nav className={styles.mobileNav}>
                {navItems.map((item) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className={styles.mobileNavItem}
                    onClick={() => setIsOpen(false)}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>

              <motion.a
                href="#reservation"
                className={styles.mobileCta}
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                상담 예약하기
              </motion.a>
            </motion.div>
          </>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
