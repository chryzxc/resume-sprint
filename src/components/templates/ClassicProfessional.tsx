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

// Register fonts (optional)
Font.register({
  family: "Helvetica",
  fonts: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf",
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf",
      fontWeight: "bold",
    },
  ],
});

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Helvetica",
  },
  header: {
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#2a5f89",
    borderBottomStyle: "solid",
    paddingBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2a5f89",
    marginBottom: 5,
  },
  title: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  contactInfo: {
    fontSize: 10,
    color: "#444",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2a5f89",
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    borderBottomStyle: "solid",
    paddingBottom: 3,
  },
  job: {
    marginBottom: 10,
  },
  jobHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  company: {
    fontSize: 12,
    fontWeight: "bold",
  },
  position: {
    fontSize: 12,
    fontStyle: "italic",
  },
  date: {
    fontSize: 10,
    color: "#666",
  },
  highlights: {
    fontSize: 10,
    marginLeft: 10,
  },
  highlightItem: {
    marginBottom: 3,
  },
  educationItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  skillItem: {
    marginBottom: 5,
  },
  skillName: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 2,
  },
});

const ClassicProfessional = ({ resume }: { resume: IResume }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{resume.basics.name}</Text>
        <Text style={styles.title}>{resume.basics.label}</Text>
        <View style={styles.contactInfo}>
          <Text>Email: {resume.basics.contact.email}</Text>
          <Text>Phone: {resume.basics.contact.phone}</Text>
          {resume.basics.contact.website && (
            <Link src={resume.basics.contact.website}>Website</Link>
          )}
          {resume.basics.contact.linkedin && (
            <Link src={resume.basics.contact.linkedin}>LinkedIn</Link>
          )}
        </View>
      </View>

      {/* Summary */}
      {resume.basics.summary && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PROFESSIONAL SUMMARY</Text>
          <Text style={{ fontSize: 10 }}>{resume.basics.summary}</Text>
        </View>
      )}

      {/* Work Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>PROFESSIONAL EXPERIENCE</Text>
        {resume.work.map((job) => (
          <View key={job.id} style={styles.job}>
            <View style={styles.jobHeader}>
              <View>
                <Text style={styles.company}>{job.name}</Text>
                <Text style={styles.position}>{job.position}</Text>
              </View>
              <Text style={styles.date}>
                {job.startDate} - {job.endDate || "Present"}
              </Text>
            </View>
            <View style={styles.highlights}>
              {job.highlights.map((highlight, i) => (
                <Text key={i} style={styles.highlightItem}>
                  • {highlight}
                </Text>
              ))}
            </View>
          </View>
        ))}
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>EDUCATION</Text>
        {resume.education.map((edu) => (
          <View key={edu.id} style={styles.educationItem}>
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 10 }}>
                {edu.institution}
              </Text>
              <Text style={{ fontSize: 10 }}>
                {edu.studyType} in {edu.area}
              </Text>
            </View>
            <Text style={styles.date}>
              {edu.startDate} - {edu.endDate}
            </Text>
          </View>
        ))}
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>SKILLS</Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {resume.skills.map((skill) => (
            <View key={skill.id} style={{ width: "50%", marginBottom: 5 }}>
              <Text style={styles.skillName}>{skill.name}</Text>
              {skill.level && (
                <Text style={{ fontSize: 8, color: "#666" }}>
                  {skill.level}
                </Text>
              )}
            </View>
          ))}
        </View>
      </View>

      {/* Additional Sections */}
      {resume.sections?.map((section) => (
        <View key={section.title} style={styles.section}>
          <Text style={styles.sectionTitle}>
            {section.title?.toUpperCase()}
          </Text>
          {section.items.map((item, i) => (
            <View key={i} style={{ marginBottom: 5 }}>
              <Text style={{ fontSize: 10, fontWeight: "bold" }}>
                {item.name}
              </Text>
              {item.date && (
                <Text style={{ fontSize: 8, color: "#666" }}>{item.date}</Text>
              )}
              {item.description && (
                <Text style={{ fontSize: 10 }}>{item.description}</Text>
              )}
            </View>
          ))}
        </View>
      ))}
    </Page>
  </Document>
);

export default ClassicProfessional;
