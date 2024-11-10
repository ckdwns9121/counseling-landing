import * as motion from "framer-motion/client";

import styles from "./Services.module.css";

interface ServiceCard {
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}

const serviceCards: ServiceCard[] = [
  {
    title: "가족상담",
    description: "가족 구성원 간의 갈등 해소와 건강한 가족 관계 형성을 도와드립니다.",
    icon: "👨‍👩‍👧‍👦",
    benefits: ["가족 간 의사소통 개선", "세대 간 갈등 해결", "가족 구성원의 역할 이해", "건강한 가족 문화 형성"],
  },
  {
    title: "부부상담",
    description: "부부간의 이해와 신뢰를 회복하고 더 나은 관계를 만들어갑니다.",
    icon: "💑",
    benefits: ["부부 관계 회복", "의사소통 방법 개선", "갈등 해결 능력 향상", "정서적 유대감 강화"],
  },
  {
    title: "개인상담",
    description: "일상의 스트레스와 내면의 어려움을 함께 해결해나갑니다.",
    icon: "🧘",
    benefits: ["자아 존중감 향상", "스트레스 관리", "정서적 안정", "자기 이해 증진"],
  },
  {
    title: "기업상담",
    description: "직장 내 스트레스 관리와 조직 문화 개선을 지원합니다.",
    icon: "💼",
    benefits: ["업무 스트레스 관리", "조직 적응력 향상", "리더십 역량 강화", "직장 내 관계 개선"],
  },
];

const Services = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>맞춤형 상담 서비스</h2>
          <p className={styles.subtitle}>당신의 상황에 맞는 전문적인 상담 서비스를 제공합니다</p>
        </motion.div>

        <motion.div
          className={styles.cardGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {serviceCards.map((card) => (
            <motion.div
              key={card.title}
              className={styles.card}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
            >
              <div className={styles.cardIcon}>{card.icon}</div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDescription}>{card.description}</p>
              <ul className={styles.benefitsList}>
                {card.benefits.map((benefit, idx) => (
                  <li key={idx} className={styles.benefitItem}>
                    {benefit}
                  </li>
                ))}
              </ul>
              <motion.button className={styles.cardButton} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                상담 알아보기
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
