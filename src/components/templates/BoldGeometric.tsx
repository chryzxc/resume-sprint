import { IResume } from "@/type";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Link,
} from "@react-pdf/renderer";

// Register fonts
Font.register({
  family: "Montserrat",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCs16Ew-.ttf",
      fontWeight: 400,
    },
    {
      src: "https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Ew-.ttf",
      fontWeight: 600,
    },
    {
      src: "https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCu170w-.ttf",
      fontWeight: 700,
    },
  ],
});

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 0,
    fontFamily: "Montserrat",
    backgroundColor: "#ffffff",
  },
  header: {
    backgroundColor: "#1a237e",
    padding: 30,
    color: "white",
    marginBottom: 20,
  },
  name: {
    fontSize: 32,
    fontWeight: 700,
    marginBottom: 5,
    letterSpacing: 1.5,
  },
  title: {
    fontSize: 14,
    fontWeight: 400,
    opacity: 0.9,
    marginBottom: 15,
  },
  contactBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 10,
    opacity: 0.8,
  },
  content: {
    paddingHorizontal: 30,
  },
  section: {
    marginBottom: 25,
    position: "relative",
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 700,
    color: "#1a237e",
    marginLeft: 10,
  },
  sectionIcon: {
    width: 24,
    height: 24,
    backgroundColor: "#1a237e",
    color: "white",
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
  },
  job: {
    marginBottom: 20,
    position: "relative",
    paddingLeft: 20,
    borderLeft: "2px solid #e8eaf6",
  },
  jobDot: {
    position: "absolute",
    left: -7,
    top: 5,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#3949ab",
  },
  jobHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  company: {
    fontSize: 16,
    fontWeight: 600,
    color: "#1a237e",
  },
  position: {
    fontSize: 12,
    fontWeight: 600,
    color: "#5c6bc0",
    marginBottom: 5,
  },
  date: {
    fontSize: 10,
    color: "#9fa8da",
    fontWeight: 600,
  },
  highlight: {
    fontSize: 10,
    marginBottom: 5,
    lineHeight: 1.4,
    paddingLeft: 10,
    position: "relative",
  },
  highlightBullet: {
    position: "absolute",
    left: 0,
    top: 5,
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#5c6bc0",
  },
  skillGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  skillPill: {
    backgroundColor: "#e8eaf6",
    borderRadius: 12,
    paddingVertical: 5,
    paddingHorizontal: 12,
    fontSize: 10,
    fontWeight: 600,
    color: "#3949ab",
  },
  educationItem: {
    marginBottom: 15,
    paddingLeft: 20,
  },
  degree: {
    fontSize: 14,
    fontWeight: 600,
    color: "#1a237e",
  },
  school: {
    fontSize: 12,
    color: "#5c6bc0",
    marginBottom: 3,
  },
  link: {
    color: "#3949ab",
    textDecoration: "none",
  },
});

// Icons (using Unicode characters)
const ICONS = {
  experience: "💼",
  education: "🎓",
  skills: "🛠️",
  profile: "👤",
};

const BoldGeometric = ({ resume }: { resume: IResume }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Bold Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{resume.basics.name.toUpperCase()}</Text>
        <Text style={styles.title}>{resume.basics.label}</Text>
        <View style={styles.contactBar}>
          <Text>{resume.basics.contact.email}</Text>
          <Text>{resume.basics.contact.phone}</Text>
          {resume.basics.contact.website && (
            <Link
              src={resume.basics.contact.website}
              style={{ color: "white" }}
            >
              Portfolio
            </Link>
          )}
        </View>
      </View>

      <View style={styles.content}>
        {/* Summary */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionIcon}>
              <Text>{ICONS.profile}</Text>
            </View>
            <Text style={styles.sectionTitle}>PROFILE</Text>
          </View>
          <Text style={{ fontSize: 10, lineHeight: 1.5 }}>
            {resume.basics.summary}
          </Text>
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionIcon}>
              <Text>{ICONS.experience}</Text>
            </View>
            <Text style={styles.sectionTitle}>EXPERIENCE</Text>
          </View>
          {resume.work.map((job) => (
            <View key={job.id} style={styles.job}>
              <View style={styles.jobDot} />
              <View style={styles.jobHeader}>
                <Text style={styles.company}>{job.name}</Text>
                <Text style={styles.date}>
                  {job.startDate} — {job.endDate || "Present"}
                </Text>
              </View>
              <Text style={styles.position}>{job.position}</Text>
              {job.highlights.map((highlight, i) => (
                <View key={i} style={styles.highlight}>
                  <View style={styles.highlightBullet} />
                  <Text>{highlight}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        {/* Education */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionIcon}>
              <Text>{ICONS.education}</Text>
            </View>
            <Text style={styles.sectionTitle}>EDUCATION</Text>
          </View>
          {resume.education.map((edu) => (
            <View key={edu.id} style={styles.educationItem}>
              <Text style={styles.degree}>
                {edu.studyType} in {edu.area}
              </Text>
              <Text style={styles.school}>{edu.institution}</Text>
              <Text style={styles.date}>
                {edu.startDate} — {edu.endDate} {edu.gpa && `| GPA: ${edu.gpa}`}
              </Text>
            </View>
          ))}
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionIcon}>
              <Text>{ICONS.skills}</Text>
            </View>
            <Text style={styles.sectionTitle}>SKILLS</Text>
          </View>
          <View style={styles.skillGrid}>
            {resume.skills.map((skill) => (
              <View key={skill.id} style={styles.skillPill}>
                <Text>{skill.name}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default BoldGeometric;
