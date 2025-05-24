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
  family: "Inter",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZg.ttf",
      fontWeight: 400,
    },
    {
      src: "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYMZg.ttf",
      fontWeight: 600,
    },
    {
      src: "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyYMZg.ttf",
      fontWeight: 700,
    },
  ],
});

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Inter",
    backgroundColor: "#f9f9f9",
  },
  container: {
    flexDirection: "row",
    height: "100%",
  },
  sidebar: {
    width: "30%",
    backgroundColor: "#2c3e50",
    padding: 20,
    color: "white",
  },
  mainContent: {
    width: "70%",
    padding: 20,
    paddingTop: 30,
  },
  name: {
    fontSize: 22,
    fontWeight: 700,
    marginBottom: 5,
    color: "white",
  },
  title: {
    fontSize: 12,
    fontWeight: 400,
    color: "#bdc3c7",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 700,
    marginBottom: 10,
    color: "#2c3e50",
    letterSpacing: 1,
  },
  sidebarSection: {
    marginBottom: 20,
  },
  sidebarTitle: {
    fontSize: 12,
    fontWeight: 700,
    marginBottom: 8,
    color: "#ecf0f1",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  sidebarText: {
    fontSize: 10,
    marginBottom: 5,
    color: "#ecf0f1",
    lineHeight: 1.4,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  contactIcon: {
    width: 12,
    marginRight: 8,
  },
  job: {
    marginBottom: 15,
  },
  jobHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  company: {
    fontSize: 12,
    fontWeight: 700,
    color: "#2c3e50",
  },
  position: {
    fontSize: 11,
    fontWeight: 600,
    color: "#7f8c8d",
    marginBottom: 3,
  },
  date: {
    fontSize: 9,
    color: "#95a5a6",
  },
  highlight: {
    fontSize: 10,
    marginBottom: 3,
    lineHeight: 1.4,
  },
  skillContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 5,
  },
  skillPill: {
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginRight: 5,
    marginBottom: 5,
    fontSize: 8,
    color: "#2c3e50",
  },
  divider: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginVertical: 15,
  },
});

const ModernSidebar = ({ resume }: { resume: IResume }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.container}>
        {/* Left Sidebar */}
        <View style={styles.sidebar}>
          <Text style={styles.name}>{resume.basics.name}</Text>
          <Text style={styles.title}>{resume.basics.label}</Text>

          {/* Contact */}
          <View style={styles.sidebarSection}>
            <Text style={styles.sidebarTitle}>Contact</Text>
            <View style={styles.contactItem}>
              <Text style={styles.sidebarText}>
                {resume.basics.contact.email}
              </Text>
            </View>
            <View style={styles.contactItem}>
              <Text style={styles.sidebarText}>
                {resume.basics.contact.phone}
              </Text>
            </View>
            {resume.basics.contact.address && (
              <View style={styles.contactItem}>
                <Text style={styles.sidebarText}>
                  {resume.basics.contact.address}
                </Text>
              </View>
            )}
          </View>

          {/* Skills */}
          <View style={styles.sidebarSection}>
            <Text style={styles.sidebarTitle}>Skills</Text>
            <View style={styles.skillContainer}>
              {resume.skills.map((skill) => (
                <Text key={skill.id} style={styles.skillPill}>
                  {skill.name}
                </Text>
              ))}
            </View>
          </View>

          {/* Links */}
          {(resume.basics.contact.website ||
            resume.basics.contact.linkedin ||
            resume.basics.contact.github) && (
            <View style={styles.sidebarSection}>
              <Text style={styles.sidebarTitle}>Links</Text>
              {resume.basics.contact.website && (
                <Link
                  src={resume.basics.contact.website}
                  style={styles.sidebarText}
                >
                  Portfolio
                </Link>
              )}
              {resume.basics.contact.linkedin && (
                <Link
                  src={resume.basics.contact.linkedin}
                  style={styles.sidebarText}
                >
                  LinkedIn
                </Link>
              )}
              {resume.basics.contact.github && (
                <Link
                  src={resume.basics.contact.github}
                  style={styles.sidebarText}
                >
                  GitHub
                </Link>
              )}
            </View>
          )}
        </View>

        {/* Main Content */}
        <View style={styles.mainContent}>
          {/* Summary */}
          {resume.basics.summary && (
            <>
              <Text style={styles.sectionTitle}>Profile</Text>
              <Text style={{ fontSize: 10, lineHeight: 1.5, marginBottom: 15 }}>
                {resume.basics.summary}
              </Text>
              <View style={styles.divider} />
            </>
          )}

          {/* Experience */}
          <Text style={styles.sectionTitle}>Experience</Text>
          {resume.work.map((job) => (
            <View key={job.id} style={styles.job}>
              <View style={styles.jobHeader}>
                <View>
                  <Text style={styles.company}>{job.name}</Text>
                  <Text style={styles.position}>{job.position}</Text>
                </View>
                <Text style={styles.date}>
                  {job.startDate} — {job.endDate || "Present"}
                </Text>
              </View>
              {job.highlights.map((highlight, i) => (
                <Text key={i} style={styles.highlight}>
                  • {highlight}
                </Text>
              ))}
            </View>
          ))}

          <View style={styles.divider} />

          {/* Education */}
          <Text style={styles.sectionTitle}>Education</Text>
          {resume.education.map((edu) => (
            <View key={edu.id} style={{ marginBottom: 10 }}>
              <View style={styles.jobHeader}>
                <View>
                  <Text style={styles.company}>{edu.institution}</Text>
                  <Text style={styles.position}>
                    {edu.studyType} in {edu.area}
                  </Text>
                </View>
                <Text style={styles.date}>
                  {edu.startDate} — {edu.endDate}
                </Text>
              </View>
              {edu.gpa && (
                <Text style={{ fontSize: 9, color: "#7f8c8d" }}>
                  GPA: {edu.gpa}
                </Text>
              )}
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

export default ModernSidebar;
